import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const FormTextArea = ({
  className,
  ...props
}: DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) => {
  return (
    <textarea
      className={twMerge('u-py-1 u-px-2 u-min-h-[32px] u-rounded', className)}
      {...props}
    />
  );
};

export default FormTextArea;
