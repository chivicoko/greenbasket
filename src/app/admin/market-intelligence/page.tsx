import { useUserForm } from '@/context/UserFormContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const MarketIntelligence = () => {
  const {userInfo} = useUserForm();
  const router = useRouter();
  
  if(!userInfo) router.push('/users/auth/register');

  return (
    <div>MarketIntelligence</div>
  )
}

export default MarketIntelligence;