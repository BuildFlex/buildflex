import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { Dropdown } from 'antd';
import {
  Add,
  Calendar,
  ElementEqual,
  Grid1,
  Grid2,
  Kanban,
} from 'iconsax-react';
import { useState } from 'react';

const itemsList = [
  { key: 'grid', label: 'Grid', icon: <Grid1 size={16} color="#087AAF" /> },
  {
    key: 'form',
    label: 'Form',
    icon: <ElementEqual size={16} color="#8E24AA" />,
  },
  {
    key: 'gallery',
    label: 'Gallery',
    icon: <Grid2 size={16} color="#FB8C00" />,
  },
  {
    key: 'kanban',
    label: 'Kanban',
    icon: <Kanban size={16} color="#12B981" />,
  },
  {
    key: 'calender',
    label: 'Calender',
    icon: <Calendar size={16} color="#15A0A3" />,
  },
];
const SectionAddDropdown = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomLeft"
      open={open}
      onOpenChange={(status) => setOpen(status)}
      className={className}
      dropdownRender={(menu) => (
        <div className="flex w-[160px] box-border flex-col gap-1 p-3 rounded-lg">
          {itemsList.map((item) => (
            <DropdownItem
              key={item.key}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="cursor-pointer hover:bg-gray-50"
            >
              {item.icon}
              <Text as="span" variant="B2-Regular">
                {item.label}
              </Text>
              <Add size={16} className="ml-auto" />
            </DropdownItem>
          ))}
        </div>
      )}
      align={{ offset: [0, 0] }}
      overlayClassName=" boxShadowSecondary rounded-lg"
    >
      <Add
        size={16}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className=" text-neutral-dark-300 hover:text-gray-500 cursor-pointer"
      />
    </Dropdown>
  );
};

export default SectionAddDropdown;
