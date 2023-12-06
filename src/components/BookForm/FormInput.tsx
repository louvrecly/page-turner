import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const FormInput = ({
  className,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      className={twMerge('u-py-1 u-px-2 u-rounded', className)}
      {...props}
    />
  );
};

export default FormInput;
