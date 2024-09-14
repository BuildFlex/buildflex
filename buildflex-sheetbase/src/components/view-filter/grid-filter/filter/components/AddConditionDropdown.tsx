import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { Dropdown, MenuProps } from 'antd';
import { Add } from 'iconsax-react';
import React from 'react';
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
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <Dropdown
      menu={{ items }}
      placement="bottomRight"
      open={isOpen}
      className={className}
      align={{ offset: [0, 0] }}
      dropdownRender={() => (
        <div className="flex gap-1 flex-col p-3 w-[240px] box-border">
          <DropdownItem
            onClick={handleClose}
            className="cursor-pointer hover:bg-gray-50 rounded "
          >
            <Text as="span" variant="B2-Regular">
              Add condition group
            </Text>
          </DropdownItem>
          <DropdownItem
            onClick={handleClose}
            className="cursor-pointer hover:bg-gray-50 rounded "
          >
            <Text as="span" variant="B2-Regular">
              Add condition group
            </Text>
          </DropdownItem>
        </div>
      )}
      overlayClassName=" boxShadowSecondary !rounded-lg"
    >
      <div className="size-4" onClick={(e) => setIsOpen(true)}>
        <Add
          size={16}
          className="  text-neutral-dark-300 hover:text-gray-500 cursor-pointer"
        />
      </div>
    </Dropdown>
  );
};

export default AddConditionDropdown;
