import React from 'react';
import { Input, Switch } from 'antd';
import { Add, ArrowDown2, ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { MoveToIcon, QuestionCircle, SparklesIcon } from '@/components/icons';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import { cn } from '@/utils/cn';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { CustomInput } from '@/components/input/Input';

interface SingleLineTextDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}
const SingleLineTextDropdown: React.FC<SingleLineTextDropdownProps> = ({
  onChangeDropdown,
}) => {
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer mr-1"
      >
        <MoveToIcon />
        <Text as="span" variant="B2-Regular">
          Single line text
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Enter text, or prefill each new cell with a default value.
      </Text>
      <DropdownItem className="h-fit flex-col gap-1 mt-1 p-0 text-neutral-dark-300 items-start">
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          Default
        </Text>
        <CustomInput
          placeholder="Enter default value (optional)"
          className="h-9 "
        />
      </DropdownItem>
    </>
  );
};

export default SingleLineTextDropdown;
