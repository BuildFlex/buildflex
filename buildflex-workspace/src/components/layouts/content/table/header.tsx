import { CheckBoxIcon, MoreIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Checkbox } from 'antd';
import { ArrowDown2 } from 'iconsax-react';
import React from 'react';

const CategoryHeader = () => {
  const [check, setCheck] = React.useState(false);
  return (
    <div className="flex items-center min-h-10  px-1 h-10">
      <div className="flex flex-1 items-center min-w-[150px] gap-2 px-2 text-neutral-dark-400">
        <button
          onClick={() => setCheck((prev) => !prev)}
          className="size-5 min-w-5 rounded flex w-fit ml-1 items-center justify-center box-border bg-white "
          style={{
            border: '1.5px solid #EDEDED',
          }}
        >
          {check && (
            <CheckBoxIcon
              className="text-theme-ocean-blue size-4"
              color="currentColor"
            />
          )}
        </button>
        <Text as="span" variant="B2-Regular" className="h-[18px] ">
          Name
        </Text>
        <ArrowDown2 size={16} />
      </div>
      <div className="flex min-w-[360px] gap-2 items-center text-neutral-dark-400  px-2">
        <Text as="span" variant="B2-Regular" className="h-[18px] ">
          Updated
        </Text>
      </div>
      <div className="flex min-w-[223px] gap-2 items-center text-neutral-dark-400 px-2">
        <Text as="span" variant="B2-Regular" className="h-[18px] ">
          Last Editor
        </Text>
      </div>
      <div className="flex min-w-[169px] gap-2 items-center text-neutral-dark-400 ">
        <button className="flex ml-auto size-8 min-w-8 justify-center border-none bg-transparent gap-2 items-center text-neutral-dark-500">
          <MoreIcon />
        </button>
      </div>
    </div>
  );
};

export default CategoryHeader;
