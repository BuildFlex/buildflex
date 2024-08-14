import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import { Add } from 'iconsax-react';
import React from 'react';
import FindField from './FindField';
import { IField } from '../../components/dropdown-render/GroupDropdownRender';
import { fields as initialFields } from '../../components/dropdown-render/HideFieldDropdownRender';

interface AddSortRowProps {
  setFields: React.Dispatch<React.SetStateAction<IField[]>>;
  fields: IField[];
  buttonName?: string;
}
const AddSortRow = ({ setFields, fields, buttonName }: AddSortRowProps) => {
  const handleAdd = (field: IField) => {
    const btn = document.getElementById('add-sub-group-btn');
    setFields((fields) => [...fields, field]);
    btn?.click();
  };
  const filterFields = initialFields.filter((field) => {
    return !fields.some((f) => f.id === field.id);
  });
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomLeft"
      className="flex items-center relative justify-center"
      overlayClassName={cn(' boxShadowSecondary grid-dropdown !rounded-lg')}
      menu={[] as any}
      dropdownRender={(menu) => (
        <FindField
          fields={filterFields}
          onSelectField={handleAdd}
          className="max-h-[300px] p-3"
          searchPlaceholder="Find a field"
          isCollapsed
        />
      )}
    >
      <DropdownItem
        id="add-sub-group-btn"
        className="cursor-pointer w-fit px-0 text-neutral-dark-300 hover:text-neutral-dark-500"
      >
        <Add size={16} />
        <Text as="span" variant="B2-Regular" className="">
          {buttonName || 'Add another sort'}
        </Text>
      </DropdownItem>
    </Dropdown>
  );
};

export default AddSortRow;
