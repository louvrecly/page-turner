import {
  DetailedHTMLProps,
  ForwardedRef,
  TextareaHTMLAttributes,
  forwardRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

const FormTextArea = forwardRef(
  (
    {
      className,
      ...props
    }: DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea
        ref={ref}
        className={twMerge(
          'u-py-1 u-px-2 u-min-h-[32px] u-bg-zinc-800/70 u-rounded',
          className,
        )}
        {...props}
      />
    );
  },
);

export default FormTextArea;
