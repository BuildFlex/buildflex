import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { PercentageCircle } from 'iconsax-react';
import { useState } from 'react';

const ExpandPercent = () => {
  const [value, setValue] = useState('');
  return (
    <div className="flex justify-between items-start">
      {/* Percent  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <PercentageCircle size={16} />
        <Text as="span" variant="B2-Regular">
          Percent
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <CustomInput
          className="rounded-lg gap-0 no-input-number-arrow"
          inputClassName="text-end"
          onChange={(e) => setValue(e.target.value)}
          suffixIcon={value && <Text variant="B2-Regular">%</Text>}
          type="number"
          defaultValue={'50'}
          max={100}
          min={0}
        />
      </div>
    </div>
  );
};

export default ExpandPercent;
