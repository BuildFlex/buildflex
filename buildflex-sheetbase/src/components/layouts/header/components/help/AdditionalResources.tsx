import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { LaptopIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import {
  CodeCircle,
  Document,
  Gift,
  Global,
  Message,
  MessageQuestion,
  Sms,
  Video,
} from 'iconsax-react';
import React from 'react';

const items = [
  { icon: <Document size={16} />, text: 'Templates' },
  { icon: <Message size={16} />, text: 'Message support' },
  { icon: <Sms size={16} />, text: 'Contact sales' },
  { icon: <LaptopIcon />, text: 'Keyboard shortcuts' },
  { icon: <MessageQuestion size={16} />, text: 'Help center' },
  { icon: <Global size={16} />, text: 'Community' },
  { icon: <Video size={16} />, text: 'Webinars' },
  { icon: <Gift size={16} />, text: 'What’s new' },
  { icon: <CodeCircle size={16} />, text: 'API documentation' },
];

const AdditionalResources = () => {
  return (
    <div className="mt-auto flex flex-col gap-2">
      <DropdownItem className={cn('text-white px-0')}>
        <Text as="span" variant="B2-SemiBold" className="h-[18px]">
          Additional resources
        </Text>
      </DropdownItem>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <DropdownItem
            key={item.text}
            className={cn('text-white px-0 cursor-pointer')}
          >
            {item.icon}
            <Text as="span" variant="B2-SemiBold" className="h-[18px]">
              {item.text}
            </Text>
          </DropdownItem>
        ))}
      </div>
    </div>
  );
};

export default AdditionalResources;
