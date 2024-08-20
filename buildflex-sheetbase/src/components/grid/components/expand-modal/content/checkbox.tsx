import { CheckBoxIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { TickSquare } from 'iconsax-react';
import React from 'react';

const ExpandCheckbox = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <div className="flex justify-between items-start">
      {/* Checkbox Title */}
      <div className="flex items-center gap-2 h-9  text-neutral-dark-300">
        <TickSquare size={16} />
        <Text as="span" variant="B2-Regular">
          Checkbox
        </Text>
      </div>
      {/* Checkbox */}
      <div className=" max-w-[430px] relative flex gap-2 w-full">
        <button
          className={cn(
            'size-[30px] rounded-md flex items-center justify-center box-border',
            checked ? 'bg-neutral-100 ' : 'bg-white',
          )}
          style={{
            border: '1.5px solid #EDEDED',
          }}
          onClick={() => setChecked(!checked)}
        >
          {checked && (
            <CheckBoxIcon
              className="text-theme-ocean-blue size-5"
              color="currentColor"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default ExpandCheckbox;
