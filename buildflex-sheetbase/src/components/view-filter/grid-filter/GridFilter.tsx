import React, { ReactNode, useState } from 'react';
import {
  Grid1,
  EyeSlash,
  Filter,
  Hashtag,
  Sort,
  Bucket,
  Pharagraphspacing,
  Share,
  ArrowDown2,
  People,
} from 'iconsax-react';
import HideFieldsPopup from './hide-field';
import Text from '@/components/typography/Text';
import { Dropdown, MenuProps } from 'antd';
import { gridViewItems } from '../components/dropdown-items/gridview-dropdown-items';
import { fieldsItems } from '../components/dropdown-items/fields-dropdown-items';
import { cn } from '@/utils/cn';
import HideFieldDropdownRender from '../components/dropdown-render/HideFieldDropdownRender';
import GroupDropdownRender from '../components/dropdown-render/GroupDropdownRender';
import FilterDropdownRender from '../components/dropdown-render/FilterDropdownRender';
import SortDropdownRender from '../components/dropdown-render/SortDropdownRender';
import RowHeightItems from '../components/dropdown-items/row-height-items';
import ShareAndSyncItems from '../components/dropdown-items/share-and-sync-items';
import ShareAndSyncDropdownRender from '../components/dropdown-render/ShareAndSyncDropdownRender';
import ColorDropdownRender from '../components/dropdown-render/ColorDropdownRender';

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
    menuItems: gridViewItems,
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
    className: 'grid-filter-dropdown',
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
    menuItems: RowHeightItems,
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

  const [showHideFields, setShowHideFields] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterClick = (id: string) => {
    // if (id === 'fields') {
    //   setShowHideFields(!showHideFields);
    // } else {
    //   setActivePopup(activePopup === id ? null : id);
    // }
    setActivePopup(activePopup === id ? null : id);
  };

  const renderPopup = (item: FilterItem) => {
    if (activePopup !== item.id) return null;

    return (
      <div className="absolute mt-2 p-4 bg-white shadow-lg rounded-md z-10">
        <HideFieldsPopup onClose={() => setShowHideFields(false)} />
      </div>
    );
  };
  const dropdownRender = (menu: ReactNode) => {
    switch (activePopup) {
      case 'fields':
        return <HideFieldDropdownRender menu={menu} />;
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
      default:
        return menu;
    }
  };
  return (
    <div className="flex items-center max-w-full p-[10px] gap-8 box-border bg-white h-10">
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
            onClick={() => handleFilterClick(item.id)}
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
