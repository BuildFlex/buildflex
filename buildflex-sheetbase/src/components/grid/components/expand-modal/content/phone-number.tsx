import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { Call } from 'iconsax-react';

const ExpandPhoneNumber = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Phone number Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <Call size={16} />
        <Text as="span" variant="B2-Regular">
          Phone number
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <CustomInput
          defaultValue={'260248975'}
          type="number"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ExpandPhoneNumber;
