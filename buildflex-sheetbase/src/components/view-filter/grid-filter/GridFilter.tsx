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
import FindAField from './filter/components/FindAField';
import Text from '@/components/typography/Text';
import { Dropdown, MenuProps } from 'antd';
import { gridViewItems } from '../dropdown/gridview-dropdown-items';
import HideFieldDropdownRender from './hide-field/HideFieldDropdownRender';
import { fieldsItems } from '../dropdown/fields-dropdown-items';
import { cn } from '@/utils/cn';
import FilterDropdownRender from './filter/FilterDropdownRender';

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
  },
];

const GridFilter: React.FC = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const [showHideFields, setShowHideFields] = useState(false);

  const handleFilterClick = (id: string) => {
    // if (id === 'fields') {
    //   setShowHideFields(!showHideFields);
    // } else {
    //   setActivePopup(activePopup === id ? null : id);
    // }
    setActivePopup(id);
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
    console.log('activePopup', activePopup);
    switch (activePopup) {
      case 'fields':
        return <HideFieldDropdownRender menu={menu} />;
      case 'filter':
        return <FilterDropdownRender />;
      default:
        return menu;
    }
  };
  return (
    <div className="flex items-center max-w-full p-[10px] gap-2 box-border bg-white h-10">
      {filterItems.map((item) => (
        <Dropdown
          key={item.id}
          trigger={['click']}
          placement="bottomLeft"
          className="flex items-center relative justify-center"
          overlayClassName={cn(
            ' boxShadowSecondary grid-dropdown !rounded-lg',
            item?.className,
          )}
          menu={{ items: item.menuItems ?? [] }}
          dropdownRender={(menu) => dropdownRender(menu)}
        >
          <button
            className="flex items-center whitespace-nowrap h-[34px]  p-2 hover:bg-gray-50 rounded   text-sm text-neutral-dark-500 border-none bg-transparent cursor-pointer "
            onClick={() => handleFilterClick(item.id)}
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
      {/* <FindAField />   */}
    </div>
  );
};

export default GridFilter;
