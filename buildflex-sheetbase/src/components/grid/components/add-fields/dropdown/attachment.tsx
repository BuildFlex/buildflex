import { MoveToIcon, QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { Switch } from 'antd';
import { ArrowDown2 } from 'iconsax-react';
import React from 'react';

interface AttachmentDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}
const AttachmentDropdown: React.FC<AttachmentDropdownProps> = ({
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
          Attachment
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Add images, documents, or other files to be viewed or downloaded.
      </Text>

      <div className="flex gap-2 items-center h-8 mt-1">
        <Switch className="!w-8 !my-[1px]" size="small" />

        <Text as="span" variant="B2-Regular" className="h-[18px]">
          Filter record selection by a condition
        </Text>
        <QuestionCircle color="#6A758B" size={16} />
      </div>
    </>
  );
};

export default AttachmentDropdown;
