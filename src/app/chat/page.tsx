'use client';

import { useUserForm } from '@/context/UserFormContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const Chat = () => {
  const {userInfo} = useUserForm();
  const router = useRouter();
  
  if(!userInfo) router.push('/users/auth/register');
  return (
    <div>Chat</div>
  )
}

export default Chat