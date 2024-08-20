import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { Call, Sms, User } from 'iconsax-react';

const ExpandEmail = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Email  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <Sms size={16} />
        <Text as="span" variant="B2-Regular">
          Email
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <CustomInput
          defaultValue={'BuildFlex123@work.com'}
          className="rounded-lg underline underline-offset-[2px]"
        />
      </div>
    </div>
  );
};

export default ExpandEmail;
