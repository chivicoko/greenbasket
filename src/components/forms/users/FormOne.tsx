import React from 'react'
import InputTwo from '../../inputs/InputTwo';
import { UserEmailProps } from '@/utils/types';

type InitialEmailProps = UserEmailProps & {
  updateFields: (fields: Partial<UserEmailProps>) => void
}

const FormOne = ({email, updateFields}: InitialEmailProps) => {

  return (
    <div className='h-[75%]'>
      <h2 className='text-2xl md:text-3xl sm:text-center pt-8'>Enter your phone number or email to get started</h2>
      <p className='text-sm sm:text-center text-neutral-500 mt-3 mb-4'>We will send you a verification code for confirmation</p>
      <div className="space-y-3 mt-[6px] flex items-center justify-center mx-auto max-w-xl">
        <InputTwo autoFocus required value={email} onChange={e => updateFields({email: e.target.value})} classes='w-full' floatingLabel='Enter phone number or email' />
      </div>
    </div>
  )
}

export default FormOne;