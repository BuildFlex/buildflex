import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { MoreVert, QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown, Input, MenuProps } from 'antd';
import {
  ArrowRight,
  ArrowRight2,
  Copy,
  DocumentForward,
  Edit2,
  Element3,
  Folder2,
  Home2,
  SearchNormal1,
  Share,
  Trash,
} from 'iconsax-react';
import React from 'react';
import SearchDropdown from './SearchDropdown';
import { CustomInput } from '@/components/input/Input';
const items: MenuProps['items'] = [
  {
    key: 'rename-table',
    label: (
      <DropdownItem>
        <Edit2 size={16} />
        <Text as="span" variant="B2-Regular">
          Rename Table
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'duplicate-table',
    label: (
      <DropdownItem>
        <Copy size={16} />
        <Text as="span" variant="B2-Regular">
          Duplicate Table
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'move-to',
    // type: 'group',
    label: (
      <DropdownItem>
        <DocumentForward size={16} />
        <Text as="span" variant="B2-Regular">
          Move To
        </Text>
        <ArrowRight2 size={16} className="ml-auto" />
      </DropdownItem>
    ),

    children: [
      {
        key: 'search-section',
        type: 'group',
        label: (
          <div className=" border-b border-neutral-200">
            <CustomInput
              placeholder="Search section"
              autoFocus={true}
              prefixIcon={
                <SearchNormal1
                  className="min-w-4"
                  size={16}
                  color={'#6A758B'}
                />
              }
              className="h-9 "
            />
          </div>
        ),
      },
      {
        key: 'section-1',
        label: (
          <DropdownItem>
            <Folder2 size={16} />
            <Text as="span" variant="B2-Regular">
              Section 1
            </Text>
          </DropdownItem>
        ),
      },
      {
        key: 'section-2',
        label: (
          <DropdownItem>
            <Folder2 size={16} />
            <Text as="span" variant="B2-Regular">
              Section 2
            </Text>
          </DropdownItem>
        ),
      },
      {
        key: 'section-3',
        label: (
          <DropdownItem>
            <Folder2 size={16} />
            <Text as="span" variant="B2-Regular">
              Section 3
            </Text>
          </DropdownItem>
        ),
      },
    ],
  },
  {
    key: 'publish-as-shared-data-source',
    label: (
      <DropdownItem>
        <DocumentForward size={16} />
        <Text as="span" variant="B2-Regular">
          Publish as Shared Data Source
        </Text>
        <QuestionCircle />
      </DropdownItem>
    ),
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor',
  },
  {
    key: 'delete-table',
    label: (
      <DropdownItem>
        <Trash size={16} />
        <Text as="span" variant="B2-Regular">
          Delete Table
        </Text>
      </DropdownItem>
    ),
  },
];
const SectionMoreDropdown = ({ className }: { className?: string }) => {
  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      placement="bottomRight"
      className={className}
      align={{ offset: [0, 0] }}
      overlayClassName=" boxShadowSecondary !rounded-lg"
    >
      <div className="size-4" onClick={(e) => e.stopPropagation()}>
        <MoreVert className="  text-neutral-dark-300 hover:text-gray-500 cursor-pointer" />
      </div>
    </Dropdown>
  );
};

export default SectionMoreDropdown;
