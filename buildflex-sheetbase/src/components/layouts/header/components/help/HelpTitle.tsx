import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { ArrowLeft } from 'iconsax-react';
import React from 'react';
interface HelpTitleProps {
  title: string;
  onClose: () => void;
  onBack?: () => void;
}
const HelpTitle = ({ title, onBack, onClose }: HelpTitleProps) => {
  return (
    <div className="flex gap-2 h-8 items-center w-full ">
      <div
        className={cn('flex items-center gap-2', onBack && 'cursor-pointer')}
        onClick={onBack && onBack}
      >
        {onBack && <ArrowLeft size={16} />}
        <Text variant={'B2-Medium'} as="span" className="text-white">
          {title}
        </Text>
      </div>
      <button
        onClick={onClose}
        className=" bg-transparent size-4 p-0  border-none cursor-pointer  ml-auto"
      >
        <CloseIcon color="#ffffff" className="text-white" />
      </button>
    </div>
  );
};
export default HelpTitle;
