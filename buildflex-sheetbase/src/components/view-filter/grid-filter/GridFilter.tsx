import React, { useState } from 'react';
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
} from 'iconsax-react';
import HideFieldsPopup from './hide-field';
import FindAField from './filter/components/FindAField';

interface FilterItem {
  id: string;
  icon: React.ElementType;
  label: string;
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
}

const filterItems: FilterItem[] = [
  {
    id: 'view',
    icon: Grid1,
    label: 'Grid view',
    hasDropdown: true,
    popupType: 'menu',
    filterType: 'grid',
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
    if (id === 'fields') {
      setShowHideFields(!showHideFields);
    } else {
      setActivePopup(activePopup === id ? null : id);
    }
  };

  const renderPopup = (item: FilterItem) => {
    if (activePopup !== item.id) return null;

    return (
      <div className="absolute mt-2 p-4 bg-white shadow-lg rounded-md z-10">
        <HideFieldsPopup onClose={() => setShowHideFields(false)} />
      </div>
    );
  };

  return (
    <div className="flex items-center bg-white shrink-0 flex-wrap min-h-10">
      {filterItems.map((item) => (
        <div key={item.id} className="relative">
          <button
            className="flex items-center px-2 py-2 rounded-md text-sm text-neutral-dark-500 border-none bg-transparent cursor-pointer hover:bg-gray-100"
            onClick={() => handleFilterClick(item.id)}
          >
            <item.icon size={16} className="mr-2" />
            <span>{item.label}</span>
            {item.hasDropdown && <ArrowDown2 size={16} className="ml-1" />}
          </button>
          {renderPopup(item)}
        </div>
      ))}
      <FindAField />
    </div>
  );
};

export default GridFilter;
