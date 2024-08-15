import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import React from 'react';
interface TextCellProps {
  text: string;
  className?: string;
}
const TextCell = ({ text, className }: TextCellProps) => {
  return (
    <div
      className={cn('max-w-[164px] w-full truncate overflow-hidden', className)}
    >
      <Text as="span" variant="B2-Regular" className="whitespace-nowrap  ">
        {text}
      </Text>
    </div>
  );
};

export default TextCell;
