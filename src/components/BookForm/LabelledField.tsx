import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelledFieldProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: string;
  htmlFor?: string;
}

const LabelledField = ({
  label,
  children,
  htmlFor,
  className,
}: LabelledFieldProps) => {
  return (
    <div
      className={twMerge(
        'u-flex u-justify-between u-items-center u-gap-2',
        className,
      )}
    >
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
};

export default LabelledField;
