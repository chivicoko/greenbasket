'use client';

import { UserFormData } from '@/utils/types';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

interface UserFormContextType {
  userInfo: UserFormData | null;
  saveUserInfo: (user: UserFormData) => void;
  dropUserInfo: () => void;
}

const UserFormContext = createContext<UserFormContextType | undefined>(undefined);

export const UserFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserFormData | null>(null);

  const router = useRouter();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const saveUserInfo = (userInfo: UserFormData) => {
    setUserInfo(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  };

  const dropUserInfo = () => {
    setUserInfo(null);
    localStorage.removeItem('userInfo');
    router.push('users/auth/register');
  };

  return (
    <UserFormContext.Provider
      value={{
        userInfo,
        saveUserInfo,
        dropUserInfo
      }}
    >
      {children}
    </UserFormContext.Provider>
  );
};

export const useUserForm = () => {
  const context = useContext(UserFormContext);
  if (!context) {
    throw new Error('useUserForm must be used within an UserFormProvider');
  }
  return context;
};