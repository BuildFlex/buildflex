import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { Call, Hashtag, Link, Sms, User } from 'iconsax-react';

const ExpandNumber = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Number  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <Hashtag size={16} />
        <Text as="span" variant="B2-Regular">
          Number
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <CustomInput
          defaultValue={'0,145M'}
          className="rounded-lg "
          inputClassName="text-end"
        />
      </div>
    </div>
  );
};

export default ExpandNumber;
