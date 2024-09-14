import { AutoNumberIcon } from '@/components/icons';
import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { CalendarTick } from 'iconsax-react';

const ExpandAutoNumber = () => {
  return (
    <div className="flex justify-between items-start">
      {/* AutoNumber  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <AutoNumberIcon size={16} />
        <Text as="span" variant="B2-Regular">
          AutoNumber
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <CustomInput
          defaultValue={'1'}
          className="rounded-lg "
          inputClassName="text-end"
        />
      </div>
    </div>
  );
};

export default ExpandAutoNumber;
