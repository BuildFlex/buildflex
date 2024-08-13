import Text from '@/components/typography/Text';
import { useTheme } from '@/provider/theme-provider';
import { cn } from '@/utils/cn';
import React from 'react';

const CreateLink = () => {
  const { theme } = useTheme();
  return (
    <div className="h-9 px-2 py-[7px] ">
      <Text
        as="span"
        variant="B2-Regular"
        className={cn('cursor-pointer', theme.color)}
      >
        Create invite link
      </Text>
    </div>
  );
};

export default CreateLink;
