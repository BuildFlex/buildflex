import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  inputClassName?: string;
}

export const CustomInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  inputClassName,
  prefixIcon,
  suffixIcon,
  ...restProps
}: InputProps) => {
  return (
    <label
      style={{ border: '1px solid #EDEDED', ...restProps.style }}
      className={cn(
        'relative  flex px-2 items-center justify-between h-9  gap-2 w-full box-border  outline-none border-none shadow-none  rounded text-neutral-dark-500 ',
        className,
      )}
    >
      {prefixIcon}
      <input
        placeholder={placeholder}
        id={label}
        value={value}
        style={{ boxShadow: 'none' }}
        onChange={onChange}
        className={cn(
          '  w-full p-0 bg-transparent placeholder:text-neutral-dark-300 border-none h-4 font-lato text-sm py-0   outline-none ',
          inputClassName,
        )}
        {...restProps}
      />
      {suffixIcon}
    </label>
  );
};
