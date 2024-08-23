import EmptyIcon from '@/components/icons/empty';
import Text from '@/components/typography/Text';
import React from 'react';

const NoContent = () => {
  return (
    <div className="w-full h-[418px] flex flex-col items-center justify-center">
      <EmptyIcon />
      <Text as="span" variant="B2-Medium" className="text-neutral-dark-400">
        You don't have any folders here
      </Text>
    </div>
  );
};

export default NoContent;
