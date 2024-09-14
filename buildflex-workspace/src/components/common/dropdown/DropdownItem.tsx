import { cn } from '@/utils/cn';
import React from 'react';

interface DropdownItemProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const DropdownItem = ({
  id,
  style,
  children,
  className,
  onClick,
}: DropdownItemProps) => {
  return (
    <div
      id={id}
      onClick={onClick}
      style={style}
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
