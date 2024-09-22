import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown, MenuProps } from 'antd';
import {
  ArrowDown2,
  Bucket,
  EyeSlash,
  Filter,
  Grid1,
  Hashtag,
  People,
  Pharagraphspacing,
  Share,
  Sort,
} from 'iconsax-react';
import React, { ReactNode, useCallback, useState } from 'react';
import ColorDropdownRender from '../components/dropdown-render/ColorDropdownRender';
import FilterDropdownRender from '../components/dropdown-render/FilterDropdownRender';
import GroupDropdownRender from '../components/dropdown-render/GroupDropdownRender';
import HideFieldDropdownRender from '../components/dropdown-render/HideFieldDropdownRender';
import RowHeightRender from '../components/dropdown-render/RowHeightRender';
import ShareAndSyncDropdownRender from '../components/dropdown-render/ShareAndSyncDropdownRender';
import SortDropdownRender from '../components/dropdown-render/SortDropdownRender';
import ViewDropdownRender from '../components/dropdown-render/ViewDropdownRender';

interface FilterItem {
  id: string;
  icon: React.ElementType;
  label: string | React.ReactNode;
  hasDropdown?: boolean;
  popupType: 'panel' | 'menu';
  filterType:
    | 'grid'
    | 'hideFields'
    | 'filter'
    | 'group'
    | 'sort'
    | 'color'
    | 'rowHeight'
    | 'shareAndSync';
  menuItems?: MenuProps['items'];
  className?: string;
  placement?: 'bottomCenter' | 'bottomLeft';
}

const filterItems: FilterItem[] = [
  {
    id: 'view',
    icon: Grid1,
    label: (
      <div className="flex items-center gap-2">
        {' '}
        <Text as="span" variant="B2-Regular">
          Grid view
        </Text>
        <People size={16} />
      </div>
    ),
    hasDropdown: true,
    popupType: 'menu',
    filterType: 'grid',
    className: 'grid-view-dropdown',
  },
  {
    id: 'fields',
    icon: EyeSlash,
    label: 'Hide fields',
    popupType: 'panel',
    filterType: 'hideFields',
  },
  {
    id: 'filter',
    icon: Filter,
    label: 'Filter',
    popupType: 'panel',
    filterType: 'filter',
    placement: 'bottomCenter',
    className: 'no-border-select',
  },
  {
    id: 'group',
    icon: Hashtag,
    label: 'Group',
    popupType: 'menu',
    filterType: 'group',
  },
  {
    id: 'sort',
    icon: Sort,
    label: 'Sort',
    popupType: 'panel',
    filterType: 'sort',
  },
  {
    id: 'color',
    icon: Bucket,
    label: 'Color',
    popupType: 'panel',
    filterType: 'color',
    placement: 'bottomLeft',
  },
  {
    id: 'rowHeight',
    icon: Pharagraphspacing,
    label: 'Row height',
    popupType: 'menu',
    filterType: 'rowHeight',
  },
  {
    id: 'share',
    icon: Share,
    label: 'Share and sync',
    popupType: 'panel',
    filterType: 'shareAndSync',
    className: 'grid-share-dropdown',
  },
];

const GridFilter: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterClick = useCallback(
    (id: string) => () => setActivePopup(activePopup === id ? null : id),
    [activePopup],
  );

  const dropdownRender = (menu: ReactNode) => {
    switch (activePopup) {
      case 'view':
        return <ViewDropdownRender setActivePopup={setActivePopup} />;
      case 'fields':
        return <HideFieldDropdownRender />;
      case 'filter':
        return <FilterDropdownRender />;
      case 'group':
        return <GroupDropdownRender />;
      case 'sort':
        return <SortDropdownRender />;
      case 'share':
        return <ShareAndSyncDropdownRender setIsModalOpen={setIsModalOpen} />;
      case 'color':
        return <ColorDropdownRender />;
      case 'rowHeight':
        return <RowHeightRender setActivePopup={setActivePopup} />;

      default:
        return menu;
    }
  };
  return (
    <div className="flex items-center overflow-auto max-w-full p-[10px] gap-8 box-border bg-white h-10">
      {filterItems.map((item) => (
        <Dropdown
          open={activePopup === item.id}
          key={item.id}
          onOpenChange={(open) => {
            if (!open && !isModalOpen) setActivePopup(null);
          }}
          trigger={['click']}
          placement={item.placement ?? 'bottomLeft'}
          className="flex items-center relative justify-center"
          overlayClassName={cn(
            ' boxShadowSecondary grid-dropdown !rounded-lg',
            item?.className,
          )}
          menu={{ items: item.menuItems ?? [] }}
          dropdownRender={(menu) => dropdownRender(menu)}
        >
          <button
            className="flex items-center whitespace-nowrap h-[18px]  p-0 rounded   text-sm text-neutral-dark-500 border-none bg-transparent cursor-pointer "
            onClick={handleFilterClick(item.id)}
            id={item.id}
          >
            <item.icon size={16} className="mr-2 " />
            {typeof item.label === 'string' ? (
              <Text as="span" variant="B2-Regular">
                {item.label}
              </Text>
            ) : (
              item.label
            )}
            {item.hasDropdown && <ArrowDown2 size={16} className="ml-1" />}
          </button>
        </Dropdown>
      ))}
    </div>
  );
};

export default GridFilter;
