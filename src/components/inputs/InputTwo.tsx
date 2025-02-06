'use client';

type InputProps = {
  key?: number;
  placeholderText?: string;
  floatingLabel?: string;
  id?: string;
  classes?: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'file' | 'checkbox';
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const InputTwo: React.FC<InputProps> = ({
  key = null,
  placeholderText = ' ',
  floatingLabel = ' ',
  id = '',
  classes = '',
  value = '',
  type = 'text',
  disabled = false,
  required = false,
  autoFocus = false,
  checked = false,
  onChange = () => {},
  onKeyDown = () => {},
}) => {
  return (
    <div className="relative w-full">
      <input 
        key={key}
        id={id}
        required={required}
        autoFocus={autoFocus}
        checked={checked}
        disabled={disabled}
        type={type}
        value={value}
        placeholder={placeholderText}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`block h-12 pt-2 px-3 text-base text-black bg-white border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-[1px] focus:ring-primary peer ${classes}`}
      />
      <label 
        htmlFor={id}
        className="absolute text-gray-500 text-sm transform -translate-y-1 scale-90 top-[2px] left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-1 transition-all duration-200"
      >
        {floatingLabel}
      </label>
    </div>
  );
};

export default InputTwo;
