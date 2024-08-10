import NotiEmptyIcon from '@/components/common/NotiEmptyIcon';
import Text from '@/components/typography/Text';
import React from 'react';

const NotificationEmpty = () => {
  return (
    <div className="h-[290px] w-full py-3 gap-2 flex flex-col items-center justify-center">
      <div className="size-[240px] flex items-center justify-center">
        <NotiEmptyIcon />
      </div>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        NotiEmptyIcon
      </Text>
    </div>
  );
};

export default NotificationEmpty;
