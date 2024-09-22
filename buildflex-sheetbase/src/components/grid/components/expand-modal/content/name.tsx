import Text from '@/components/typography/Text';
import { Text as TextIcon } from 'iconsax-react';

const ExpandName = () => {
  return (
    <div className="flex flex-col gap-1">
      {/* Name Title */}
      <div className="flex items-center gap-2 text-neutral-dark-300">
        <TextIcon size={16} />
        <Text as="span" variant="B2-Regular">
          Name
        </Text>
      </div>
      {/* Name input */}
      <input
        style={{ boxShadow: 'none' }}
        placeholder="Start typing..."
        defaultValue={'Isabella Chen'}
        className="py-[10px] placeholder:text-neutral-dark-300 px-0 border-none w-full font-lato text-xl leading-[26px] outline-none "
      />
      <div className="h-[1px] min-h-[1px] bg-borderColor w-full" />
    </div>
  );
};

export default ExpandName;
