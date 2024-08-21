import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Add } from 'iconsax-react';
import React from 'react';

interface AddCategoryButtonProps {
  icon: React.ReactNode;
  title: string;
  isComingSoon?: boolean;
}
const AddCategoryButton = ({
  icon,
  title,
  isComingSoon,
}: AddCategoryButtonProps) => {
  return (
    <div
      className={cn(
        'bg-white px-4 py-2 items-center h-[60px] w-[312px] flex gap-2 border border-borderColor rounded-lg',
      )}
    >
      <div
        className={cn(
          'flex items-center gap-2',
          isComingSoon && 'opacity-[48%]',
        )}
      >
        {icon}
        <Text as="span" variant="B1-Semibold">
          {title}
        </Text>
      </div>
      {isComingSoon ? (
        <div className="bg-[#E3EEF2] rounded-2xl h-[26px] ml-auto py-2 px-3 text-semantic-600 flex gap-1 items-center">
          <div className="size-[6px] rounded-full bg-semantic-600" />
          <Text as="span" variant="B2-Medium">
            Coming Soon
          </Text>
        </div>
      ) : (
        <Add className="text-neutral-dark-300 ml-auto" size={24} />
      )}
    </div>
  );
};

export default AddCategoryButton;
