'use client';

import { useFormStatus } from 'react-dom';
import React, { ReactNode } from 'react';

type ButtonProps = {
  key?: number;
  processText?: string;
  btnText?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  classes?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};

const ButtonNeutral: React.FC<ButtonProps> = ({
  key = null,
  processText = 'Processing...',
  btnText = '',
  icon1 = null,
  icon2 = null,
  classes = '',
  id = '',
  type = 'button',
  disabled = false,
  onClick = () => {}
}) => {
  const { pending } = useFormStatus() || {};

  return (
    <button
      key={key}
      type={type}
      id={id}
      className={`flex items-center justify-start text-primary rounded-full focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none text-sm font-semibold ${classes} ${pending || disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={pending || disabled}
      onClick={onClick}
    >
      {icon1 && <span>{icon1}</span>}
      {pending ? processText : btnText}
      {icon2 && <span>{icon2}</span>}
    </button>
  );
};

export default ButtonNeutral;
