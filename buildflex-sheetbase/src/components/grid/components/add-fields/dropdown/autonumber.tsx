import Text from '@/components/typography/Text';
import { ArrowDown2 } from 'iconsax-react';
import React from 'react';

import { AutoNumberIcon } from '@/components/icons';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';

interface AutoNumberDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const AutoNumberDropdown: React.FC<AutoNumberDropdownProps> = ({
  onChangeDropdown,
}) => {
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <AutoNumberIcon />
        <Text as="span" variant="B2-Regular">
          AutoNumber
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Automatically generate unique incremental numbers for each record.
      </Text>{' '}
    </>
  );
};

export default AutoNumberDropdown;
