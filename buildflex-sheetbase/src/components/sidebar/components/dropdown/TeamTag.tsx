import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import React from 'react';

interface TagProps {
  name: string;
  className?: string;
}
const Tag = ({ name, className }: TagProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-6 flex items-center justify-center box-border w-[57px] px-3 ml-auto bg-semantic-50 text-semantic-600',
        className,
      )}
    >
      <Text as="span" variant="B2-Medium">
        {name}
      </Text>
    </div>
  );
};

export default Tag;
