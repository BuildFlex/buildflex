import Text from '@/components/typography/Text';
import { ArrowDown2, Call } from 'iconsax-react';
import React from 'react';

import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';

interface PhoneDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const PhoneDropdown: React.FC<PhoneDropdownProps> = ({ onChangeDropdown }) => {
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer "
      >
        <Call size={16} />
        <Text as="span" variant="B2-Regular">
          Phone
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        {'Enter a telephone number (e.g. (415) 555-9876).'}
      </Text>
    </>
  );
};

export default PhoneDropdown;
