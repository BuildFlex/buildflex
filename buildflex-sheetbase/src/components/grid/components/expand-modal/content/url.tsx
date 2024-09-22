import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { Link } from 'iconsax-react';

const ExpandURL = () => {
  return (
    <div className="flex justify-between items-start">
      {/* URL  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <Link size={16} />
        <Text as="span" variant="B2-Regular">
          URL
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <CustomInput
          defaultValue={'https://Linksample.com/'}
          className="rounded-lg underline underline-offset-[2px]"
        />
      </div>{' '}
    </div>
  );
};

export default ExpandURL;
