import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { gridTableFields } from '@/components/grid/GridUI';
import { SparklesIcon } from '@/components/icons';
import TagSelect from '@/components/select/tag-select';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import FindField from '@/components/view-filter/grid-filter/sort/FindField';
import { ArrowRight2 } from 'iconsax-react';
import React from 'react';
interface MainDropdownProps {
  onChangeDropdown: (value: IField) => void;
}
const MainDropdown = ({ onChangeDropdown }: MainDropdownProps) => {
  return (
    <div className="flex flex-col gap-2 ">
      <FindField
        fields={gridTableFields}
        searchPlaceholder="Find a field type"
        onSelectField={onChangeDropdown}
        isShowQuestion
        className="max-h-[190px] box-border gap-2"
        fieldClassName=" mr-1"
        fieldsClassName="p-[3px] pr-[8px] ring ring-[1px] ring-[#EDEDED] rounded"
      />
      <DropdownItem
        style={{ border: '1px solid #EDEDED' }}
        className="h-9 cursor-pointer "
      >
        <SparklesIcon />
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          AI
        </Text>
        <Tag name="Team" className="ml-auto" />
        <ArrowRight2 size={16} />
      </DropdownItem>
    </div>
  );
};

export default MainDropdown;
