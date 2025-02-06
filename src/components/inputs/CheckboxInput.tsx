'use client';

type InputProps = {
  key?: number;
  id?: string;
  classes?: string;
  type?: 'checkbox';
  disabled?: boolean;
  required?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
};

const CheckboxInput: React.FC<InputProps> = ({
  key = null,
  id = '',
  classes = '',
  type = 'checkbox',
  disabled = false,
  required = false,
  defaultChecked = false,
  onChange = () => {},
}) => {
  return (
    <input
      key={key}
      id={id}
      type={type}
      defaultChecked={defaultChecked}
      required={required}
      disabled={disabled}
      onChange={onChange}
      className={`size-4 border checked:border-transparent rounded-sm border-gray-300 appearance-none cursor-pointer custom-checkbox ${classes}`}
    />
  );
};

export default CheckboxInput;
