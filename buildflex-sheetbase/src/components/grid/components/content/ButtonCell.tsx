import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import React from 'react';
interface ButtonCellProps {
  name: string;
  className?: string;
}
const ButtonCell = ({ name, className }: ButtonCellProps) => {
  return (
    <div className={cn(' w-full flex items-center justify-center', className)}>
      <div className="bg-theme-ocean-blue flex items-center justify-center box-border px-3 py-1 rounded-md h-7  ">
        <Text as="span" variant="B2-Medium" className="text-white h-[18px]">
          {name}
        </Text>
      </div>
    </div>
  );
};

export default ButtonCell;
