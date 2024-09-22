import Text from '@/components/typography/Text';
import { ArrowDown2, Link } from 'iconsax-react';
import React from 'react';

import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';

interface URLDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const URLDropdown: React.FC<URLDropdownProps> = ({ onChangeDropdown }) => {
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <Link size={16} />
        <Text as="span" variant="B2-Regular">
          URL
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        {'Enter a URL (e.g. airtable.com or https://airtable.com/universe).'}
      </Text>
    </>
  );
};

export default URLDropdown;
