import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface BookItemContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const BookItemContainer = ({
  className,
  children,
  ...props
}: BookItemContainerProps) => {
  return (
    <div
      className={twMerge(
        'u-relative u-py-4 u-px-6 u-flex-grow u-aspect-[2/3] u-bg-gradient-to-b u-from-emerald-900 u-to-emerald-600 u-rounded u-shadow u-flex u-flex-col u-items-stretch u-gap-2 u-cursor-pointer u-transition-transform sm:u-flex-grow-0 sm:u-basis-1/3 md:u-basis-1/4 lg:u-basis-1/5 hover:u-scale-105',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BookItemContainer;
