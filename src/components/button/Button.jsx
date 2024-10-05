'use client';

import {useFormStatus} from 'react-dom';

const Button = ({process, btnText, classes}) => {
    const {pending} = useFormStatus();

  return (
    <button type='submit' className={classes} disabled={pending}>{pending ? process : btnText}</button>
  )
}

export default Button;