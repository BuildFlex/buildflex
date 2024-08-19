import React from 'react';
import { ArrowDown2, Barcode, Link, UserTick } from 'iconsax-react';
import Text from '@/components/typography/Text';

import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { AutoNumberIcon } from '@/components/icons';

interface BarCodeDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const BarCodeDropdown: React.FC<BarCodeDropdownProps> = ({
  onChangeDropdown,
}) => {
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <Barcode size={16} />
        <Text as="span" variant="B2-Regular">
          Barcode
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        See barcodes scanned from the Sheetbase
      </Text>{' '}
    </>
  );
};

export default BarCodeDropdown;
