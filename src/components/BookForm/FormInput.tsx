import {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

const FormInput = forwardRef(
  (
    {
      className,
      ...props
    }: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={twMerge('u-py-1 u-px-2 u-w-full u-rounded', className)}
        {...props}
      />
    );
  },
);

export default FormInput;
