import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CSVIcon, PlusIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown, MenuProps } from 'antd';
import { ArrowRight2, Copy, Edit2, Setting2, Trash } from 'iconsax-react';
import SheetBaseIcon from '@/components/common/SheetBaseIcon';
const items: MenuProps['items'] = [
  {
    key: 'rename-view',
    label: (
      <DropdownItem>
        <Edit2 size={16} />
        <Text as="span" variant="B2-Regular">
          Rename View
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'duplicate-view',
    label: (
      <DropdownItem>
        <Copy size={16} />
        <Text as="span" variant="B2-Regular">
          Duplicate View
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'configure-view',
    // type: 'group',
    label: (
      <DropdownItem>
        <Setting2 size={16} />
        <Text as="span" variant="B2-Regular">
          Configure View
        </Text>
        <ArrowRight2 size={16} className="ml-auto" />
      </DropdownItem>
    ),

    children: [
      {
        key: 'sheetbase-base',
        label: (
          <DropdownItem>
            <SheetBaseIcon className="size-5" />
            <Text as="span" variant="B2-Regular">
              Sheetbase Base
            </Text>
          </DropdownItem>
        ),
      },
      {
        key: 'csv-file',
        label: (
          <DropdownItem>
            <CSVIcon />
            <Text as="span" variant="B2-Regular">
              CSV file
            </Text>
          </DropdownItem>
        ),
      },
    ],
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor',
  },
  {
    key: 'delete-view',
    label: (
      <DropdownItem>
        <Trash size={16} />
        <Text as="span" variant="B2-Regular">
          Delete View
        </Text>
      </DropdownItem>
    ),
  },
];
const CreateTableDropdown = ({ className }: { className?: string }) => {
  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      placement="topLeft"
      className={className}
      dropdownRender={(menu) => (
        <div className="flex flex-col gap-3 rounded-lg p-3 create-dropdown">
          <div className="flex flex-col gap-1 ">
            <Text
              as="span"
              variant="sub-title"
              className="text-neutral-dark-300"
            >
              Add a blank table
            </Text>
            <DropdownItem>Start from scratch</DropdownItem>
          </div>
          <div className="h-[1px] bg-borderColor " />
          <div className="flex flex-col gap-2 ">
            <Text
              as="span"
              variant="sub-title"
              className="text-neutral-dark-300"
            >
              Add from other sources
            </Text>
            {menu}
          </div>
        </div>
      )}
      align={{ offset: [0, 0] }}
      overlayClassName=" boxShadowSecondary !rounded-lg"
    >
      <div className="size-4">
        <PlusIcon className="text-neutral-200 hover:text-white" />
      </div>
    </Dropdown>
  );
};

export default CreateTableDropdown;
