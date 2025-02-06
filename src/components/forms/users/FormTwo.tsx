import React from 'react'
import ButtonNeutral from '../../button/ButtonNeutral';
import Image from 'next/image';
import InputTwo from '../../inputs/InputTwo';
import { UserBasicDataProps } from '@/utils/types';

type InitialBasicInfoProps = UserBasicDataProps & {
  updateFields: (fields: Partial<UserBasicDataProps>) => void
}

const FormTwo = ({fullName, userName, phoneNumber, email, updateFields}: InitialBasicInfoProps) => {

  return (
    <div className='h-[75%]'>
      <h2 className='text-2xl sm:text-center'>Complete profile setup</h2>
      <p className='text-sm text-neutral-500 mt-4 mb-4 sm:text-center'>Connect your socials for quick setup</p>
      <div className="flex items-center gap-2 mb-5">
        <div className='flex-1 rounded-xl bg-customGray py-3 px-4 flex items-center justify-center focus-within:ring-2 ring-primary'>
          <ButtonNeutral
            icon1={<div className="relative size-5 border-0"><Image src="/images/Instagram.svg" sizes="100%" fill alt="Arrow Left" className="rounded-full object-cover" /></div>}
          />
        </div>
        <div className='flex-1 rounded-xl bg-customGray py-3 px-4 flex items-center justify-center focus-within:ring-2 ring-primary'>
          <ButtonNeutral
            icon1={<div className="relative size-5"><Image src="/images/Tik Tok.svg" sizes="100%" fill alt="Arrow Left" className="rounded-full object-cover" /></div>}
          />
        </div>
        <div className='flex-1 rounded-xl bg-customGray py-3 px-4 flex items-center justify-center focus-within:ring-2 ring-primary'>
          <ButtonNeutral
            icon1={<div className="relative size-5"><Image src="/images/Google.svg" sizes="100%" fill alt="Arrow Left" className="rounded-full object-cover" /></div>}
          />
        </div>
      </div>

      <p className='text-sm text-neutral-500 mt-4 mb-4'>Or enter manually</p>

      <div className="space-y-3 mt-[6px] flex items-center justify-center flex-wrap">
        <InputTwo autoFocus required value={fullName} onChange={e => updateFields({fullName: e.target.value})} classes='w-full' floatingLabel='Full name' />
        <InputTwo required value={userName} onChange={e => updateFields({userName: e.target.value})} classes='w-full' floatingLabel='Username' />
        <InputTwo required value={phoneNumber} onChange={e => updateFields({phoneNumber: e.target.value})} classes='w-full' floatingLabel='Phone number' />
        <InputTwo required value={email} onChange={e => updateFields({email: e.target.value})} classes='w-full' floatingLabel='Email' />
      </div>
    </div>
  )
}

export default FormTwo;