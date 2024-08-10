import Text from '@/components/typography/Text';
import { Button } from 'antd';
import { TickCircle } from 'iconsax-react';
import React from 'react';
import NotificationEmpty from './NotificationEmpty';
import { cn } from '@/utils/cn';

const NotiModal = () => {
  const [isReadTab, setIsReadTab] = React.useState(false);
  return (
    <div className="w-[392px] box-border !rounded-lg p-3 gap-1 flex flex-col">
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <Text as="span" variant="B2-Medium" className="text-[#000000]">
            Notifications
          </Text>
          <button
            onClick={() => setIsReadTab(false)}
            className={cn(
              'cursor-pointer ml-auto outline-none border-none h-8  px-5 py-2 rounded-lg ',
              isReadTab
                ? 'bg-transparent hover:bg-gray-50  text-neutral-dark-300'
                : 'bg-[#E0F2FE]  text-primary-600 ',
            )}
          >
            <Text as="span" variant="B2-Medium">
              Unread
            </Text>
          </button>
          <button
            className={cn(
              'cursor-pointer  outline-none border-none h-8  px-5 py-2 rounded-lg ',
              !isReadTab
                ? 'bg-transparent hover:bg-gray-50 text-neutral-dark-300 '
                : 'bg-[#E0F2FE]  text-primary-600',
            )}
            onClick={() => setIsReadTab(true)}
          >
            {' '}
            <Text as="span" variant="B2-Regular" className="">
              Read
            </Text>
          </button>
        </div>
        <div className="h-[1px] bg-borderColor w-full" />
        {!isReadTab && (
          <div className="w-full">
            <div className="text-neutral-dark-300 cursor-pointer w-fit flex gap-2 items-center px-2 py-[7px] ml-auto">
              <TickCircle size={16} />
              <Text variant="sub-title" as="span">
                Mark all as read
              </Text>
            </div>
          </div>
        )}
      </div>
      <NotificationEmpty />
    </div>
  );
};

export default NotiModal;
