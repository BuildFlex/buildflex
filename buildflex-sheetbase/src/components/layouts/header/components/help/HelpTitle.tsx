import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
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
      {onBack && (
        <ArrowLeft className="cursor-pointer" size={16} onClick={onBack} />
      )}
      <Text variant={'B2-Medium'} as="span" className="text-white">
        {title}
      </Text>
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
