import { cn } from '@/utils/cn';
import React from 'react';

interface DropdownItemProps {
  children: React.ReactNode;
  className?: string;
}
const DropdownItem = ({ children, className }: DropdownItemProps) => {
  return (
    <div
      className={cn(
        'px-2 py-[7px] text-neutral-dark-500 items-center h-8 flex gap-2 box-border rounded',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default DropdownItem;
