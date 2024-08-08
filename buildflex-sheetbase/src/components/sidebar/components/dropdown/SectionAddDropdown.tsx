import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { MoreVert, QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown, Input, MenuProps } from 'antd';
import {
  Add,
  ArrowRight,
  ArrowRight2,
  Calendar,
  Copy,
  DocumentForward,
  Edit2,
  Element3,
  ElementEqual,
  Folder2,
  Grid1,
  Grid2,
  Home2,
  Kanban,
  SearchNormal1,
  Share,
  Trash,
} from 'iconsax-react';
import React from 'react';
import SearchDropdown from './SearchDropdown';
const items: MenuProps['items'] = [
  {
    key: 'grid',
    label: (
      <DropdownItem>
        <Grid1 color="#087AAF" size={16} />
        <Text as="span" variant="B2-Regular">
          Grid
        </Text>
        <Add size={16} className="ml-auto" />
      </DropdownItem>
    ),
  },
  {
    key: 'form',
    label: (
      <DropdownItem>
        <ElementEqual color="#8E24AA" size={16} />
        <Text as="span" variant="B2-Regular">
          Form
        </Text>
        <Add size={16} className="ml-auto" />
      </DropdownItem>
    ),
  },
  {
    key: 'gallery',
    label: (
      <DropdownItem>
        <Grid2 color="#FB8C00" size={16} />
        <Text as="span" variant="B2-Regular">
          Gallery
        </Text>
        <Add size={16} className="ml-auto" />
      </DropdownItem>
    ),
  },
  {
    key: 'kanban',
    label: (
      <DropdownItem>
        <Kanban color="#FB8C00" size={16} />
        <Text as="span" variant="B2-Regular">
          Kanban
        </Text>
        <Add size={16} className="ml-auto" />
      </DropdownItem>
    ),
  },
  {
    key: 'calender',
    label: (
      <DropdownItem>
        <Calendar color="#15A0A3" size={16} />
        <Text as="span" variant="B2-Regular">
          Calender
        </Text>
        <Add size={16} className="ml-auto" />
      </DropdownItem>
    ),
  },
];
const SectionAddDropdown = ({ className }: { className?: string }) => {
  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      placement="bottomLeft"
      className={className}
      align={{ offset: [0, 0] }}
      overlayClassName=" boxShadowSecondary w-[160px] sectionAddDropdown !rounded-lg"
    >
      <Add
        size={16}
        onClick={(e) => e.stopPropagation()}
        className=" text-neutral-dark-300 hover:text-gray-500 cursor-pointer"
      />
    </Dropdown>
  );
};

export default SectionAddDropdown;
