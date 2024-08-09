import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CheckBoxIcon, MoreVert, QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown, Input, MenuProps } from 'antd';
import {
  ArrowRight2,
  Copy,
  Edit2,
  People,
  Setting2,
  Trash,
  User,
} from 'iconsax-react';
import Tag from './TeamTag';
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
        key: 'collaborative-view',
        label: (
          <div className="flex flex-col gap-1 p-2">
            <div className=" text-neutral-dark-500 h-5 items-center  flex gap-2 box-border rounded">
              <People size={16} />
              <Text as="span" variant="B2-Regular">
                Collaborative view
              </Text>
              <CheckBoxIcon
                color="#026AA2"
                className="ml-auto size-5 text-primary-700"
              />
            </div>
            <Text
              as="span"
              variant="sub-title"
              className="text-neutral-dark-400 h-4"
            >
              Editors and up can edit the view configuration
            </Text>
          </div>
        ),
      },
      {
        key: 'personal-view',
        disabled: true,
        label: (
          <div className="flex flex-col gap-1 p-2 opacity-50">
            <div className=" text-neutral-dark-500 h-5 items-center  flex gap-2 box-border rounded">
              <User size={16} />
              <Text as="span" variant="B2-Regular">
                Personal view
              </Text>
              <Tag name="Team" className="mr-2" />
            </div>
            <Text
              as="span"
              variant="sub-title"
              className="text-neutral-dark-400 h-4"
            >
              Only you can edit the view configuration
            </Text>
          </div>
        ),
      },
      {
        key: 'looked-view',
        label: (
          <div className="flex flex-col gap-1 p-2 ">
            <div className=" text-neutral-dark-500 h-5 items-center  flex gap-2 box-border rounded">
              <User size={16} />
              <Text as="span" variant="B2-Regular">
                Looked view
              </Text>
              <Tag name="Team" className="mr-2" />
            </div>
            <Text
              as="span"
              variant="sub-title"
              className="text-neutral-dark-400 h-4"
            >
              Nobody can edit the view configuration{' '}
            </Text>
          </div>
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
const ViewMoreDropdown = ({ className }: { className?: string }) => {
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

export default ViewMoreDropdown;
