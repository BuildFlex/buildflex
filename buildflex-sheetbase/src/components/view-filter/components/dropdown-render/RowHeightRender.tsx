import DropdownItem from '@/components/common/dropdown/DropdownItem';
import {
  RowHeightExtraIcon,
  RowHeightMediumIcon,
  RowHeightShortIcon,
  RowHeightTallIcon,
} from '@/components/icons';
import Text from '@/components/typography/Text';
import React, { useState } from 'react';

export interface IField {
  id: string;
  icon: React.ElementType;
  label: string;
}
const RowHeightRender = ({
  setActivePopup,
}: {
  setActivePopup: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const handleSeleted = () => setActivePopup(null);
  return (
    <div className="flex flex-col gap-1 box-border p-3 rounded-lg  w-auto max-w-[480px]  ">
      <DropdownItem className="text-neutral-dark-300">
        <Text as="span" variant="B2-Regular">
          Select a row height
        </Text>
      </DropdownItem>
      <DropdownItem
        onClick={handleSeleted}
        className="cursor-pointer hover:bg-gray-50"
      >
        <RowHeightShortIcon />
        <Text as="span" variant="B2-Regular">
          Short
        </Text>
      </DropdownItem>
      <DropdownItem
        onClick={handleSeleted}
        className="cursor-pointer hover:bg-gray-50"
      >
        <RowHeightMediumIcon />
        <Text as="span" variant="B2-Regular">
          Medium
        </Text>
      </DropdownItem>
      <DropdownItem
        onClick={handleSeleted}
        className="cursor-pointer hover:bg-gray-50"
      >
        <RowHeightTallIcon />
        <Text as="span" variant="B2-Regular">
          Tall
        </Text>
      </DropdownItem>
      <DropdownItem
        onClick={handleSeleted}
        className="cursor-pointer hover:bg-gray-50"
      >
        <RowHeightExtraIcon />
        <Text as="span" variant="B2-Regular">
          Extra Tall
        </Text>
      </DropdownItem>
    </div>
  );
};

export default RowHeightRender;
