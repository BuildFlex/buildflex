import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CheckBoxIcon } from '@/components/icons';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import Text from '@/components/typography/Text';
import { MenuProps } from 'antd';
import {
  ArrowRight2,
  Copy,
  DocumentDownload,
  Edit2,
  People,
  Printer,
  Setting2,
  Trash,
  User,
} from 'iconsax-react';

export const gridViewItems: MenuProps['items'] = [
  {
    key: 'collaborative-view-active',
    label: (
      <div className="flex flex-col gap-1 p-2">
        <div className=" text-neutral-dark-500 h-5 items-center  flex gap-2 box-border rounded">
          <People size={16} />
          <Text as="span" variant="B2-Regular">
            Collaborative view
          </Text>
          <ArrowRight2 size={16} className="ml-auto" />
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
    className: '!bg-borderColor !my-2',
  },
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
    key: 'edit-view-description',
    label: (
      <DropdownItem>
        <Edit2 size={16} />
        <Text as="span" variant="B2-Regular">
          Edit view description
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
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
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
  },
  {
    key: 'download-svg',
    label: (
      <DropdownItem>
        <DocumentDownload size={16} />
        <Text as="span" variant="B2-Regular">
          Download CSV
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'print-view',
    label: (
      <DropdownItem>
        <Printer size={16} />
        <Text as="span" variant="B2-Regular">
          Print view
        </Text>
      </DropdownItem>
    ),
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
