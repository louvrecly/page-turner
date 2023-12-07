import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelledFieldProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: string;
  htmlFor?: string;
  errorMessage?: string;
}

const LabelledField = ({
  label,
  children,
  htmlFor,
  className,
  errorMessage = '',
}: LabelledFieldProps) => {
  return (
    <div className={twMerge('u-flex u-justify-between u-gap-2', className)}>
      <label className="u-py-1" htmlFor={htmlFor}>
        {label}
      </label>

      <div className="u-basis-56 u-flex u-flex-col u-items-stretch u-gap-px">
        {children}
        <p className="u-w-full u-text-xs u-text-rose-600">{errorMessage}</p>
      </div>
    </div>
  );
};

export default LabelledField;
