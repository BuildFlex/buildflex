import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Input, Switch } from 'antd';
import { Add, SearchNormal1 } from 'iconsax-react';
import React, { ReactNode, useState } from 'react';
import { Eye, More, Text as TextIcon } from 'iconsax-react';
import ConditionRow from './components/ConditionRow';

const FilterDropdownRender = () => {
  const [showFields, setShowFields] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-3 box-border p-3 rounded-lg min-w-[331px] max-h-[300px] ">
      <DropdownItem className="text-neutral-dark-300 h-10">
        <Text as="span" variant="B2-Regular" className="">
          No filter conditions are applied
        </Text>
        <QuestionCircle className="cursor-pointer" color="currentColor" />
      </DropdownItem>
      {/* Conditions Rows */}
      <ConditionRow />
      <div className="flex items-center whitespace-nowrap gap-3 mt-1">
        <button className="flex gap-2 items-center w-full bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
          <Add size={16} />
          <Text as="span" variant="B2-Medium">
            Add conditions
          </Text>
        </button>
        <button className="flex gap-2 items-center w-full bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
          <Add size={16} />

          <Text as="span" variant="B2-Medium">
            Add condition group
          </Text>
          <QuestionCircle className="cursor-pointer" color="#6A758B" />
        </button>
      </div>
    </div>
  );
};

export default FilterDropdownRender;
