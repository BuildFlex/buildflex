import React from 'react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CheckBoxIcon, MoreVert, QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown, Input, MenuProps } from 'antd';
import { Add } from 'iconsax-react';
const items: MenuProps['items'] = [
  {
    key: 'add-condition',
    label: (
      <DropdownItem>
        <Text as="span" variant="B2-Regular">
          Add condition
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'add-condition-group',
    label: (
      <DropdownItem>
        <Text as="span" variant="B2-Regular">
          Add condition group
        </Text>
      </DropdownItem>
    ),
  },
];
const AddConditionDropdown = ({ className }: { className?: string }) => {
  return (
    <Dropdown
      menu={{ items }}
      placement="bottomRight"
      className={className}
      align={{ offset: [0, 0] }}
      overlayClassName=" boxShadowSecondary add-conditions-dropdown !rounded-lg"
    >
      <div className="size-4" onClick={(e) => e.stopPropagation()}>
        <Add
          size={16}
          className="  text-neutral-dark-300 hover:text-gray-500 cursor-pointer"
        />
      </div>
    </Dropdown>
  );
};

export default AddConditionDropdown;
