'use client';

type InputProps = {
  key?: number;
  placeholderText?: string;
  id?: string;
  classes?: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'file' | 'checkbox';
  name?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputOne: React.FC<InputProps> = ({
  key = null,
  placeholderText = '',
  id = '',
  classes = '',
  value = '',
  type = 'text',
  name="image",
  disabled = false,
  required = false,
  autoFocus = false,
  checked = false,
  onChange = () => {},
}) => {

  return (
    <input
      key={key}
      id={id}
      type={type}
      name={name}
      required={required}
      placeholder={placeholderText}
      autoFocus={autoFocus}
      checked={checked}
      value={value}
      disabled={disabled}
      onChange={onChange}
      className={`text-secondary rounded-xl p-[0.625rem] border outline-0 focus:ring-2 focus:ring-secondary focus:ring-offset-2 outline-none text-sm ${classes}`}
    />
  );
};

export default InputOne;
