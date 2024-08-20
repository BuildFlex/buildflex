import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { Call, DollarCircle, Hashtag, Link, Sms, User } from 'iconsax-react';

const ExpandCurrency = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Currency  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <DollarCircle size={16} />
        <Text as="span" variant="B2-Regular">
          Currency
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <CustomInput
          defaultValue={'$145.00'}
          className="rounded-lg "
          inputClassName="text-end"
        />
      </div>
    </div>
  );
};

export default ExpandCurrency;
