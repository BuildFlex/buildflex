import React from 'react';
import { Input, Switch } from 'antd';
import { ArrowDown2 } from 'iconsax-react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { MoveToIcon, QuestionCircle } from '@/components/icons';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';

interface LongTextDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}
const LongTextDropdown: React.FC<LongTextDropdownProps> = ({
  onChangeDropdown,
}) => {
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <MoveToIcon />
        <Text as="span" variant="B2-Regular">
          Long text
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Enter text, or prefill each new cell with a default value.
      </Text>
      <div className="flex gap-2 items-start">
        <Switch className="!w-8 !my-[1px]" size="small" />
        <div className="flex gap-1 flex-col">
          <div className="flex gap-2 items-center">
            <Text as="span" variant="B2-Regular" className="h-[18px]">
              Enable rich text formatting
            </Text>
            <QuestionCircle color="#6A758B" size={16} />
          </div>
          <Text as="span" variant="sub-title" className="text-neutral-dark-300">
            Formatting options include checklists, hyperlinks, headers, code
            blocks, and more.{' '}
          </Text>
        </div>
      </div>

      <div className="flex gap-2 items-start">
        <div className="flex items-center h-6">
          <Switch className="!w-8 !my-[1px]" size="small" />
        </div>
        <div className="flex gap-1 flex-col">
          <div className="flex gap-2 items-center h-6">
            <Text as="span" variant="B2-Regular" className="h-[18px]">
              Generate text
            </Text>
            <QuestionCircle color="#6A758B" size={16} />
            <Tag name="Team" className="ml-1" />
          </div>
          <Text as="span" variant="sub-title" className="text-neutral-dark-300">
            Use AI to generate content, summarize key points, categorize
            information, and more—all based on your own data.{' '}
          </Text>
        </div>
      </div>
    </>
  );
};

export default LongTextDropdown;
