import Text from '@/components/typography/Text';
import { ArrowDown2, UserTick } from 'iconsax-react';
import React from 'react';

import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { Link } from 'react-router-dom';

interface CreatedByDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const CreatedByDropdown: React.FC<CreatedByDropdownProps> = ({
  onChangeDropdown,
}) => {
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <UserTick size={16} />
        <Text as="span" variant="B2-Regular">
          Created by
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <div className="flex items-center gap-1">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          See which user created the record.{' '}
        </Text>{' '}
        <Link
          to="#"
          className="w-fit h-[18px] flex items-center box-border"
          style={{ borderBottom: '1px solid #101828 ' }}
        >
          <Text as="span" variant="B2-Medium" className="text-neutral-dark-500">
            Learn more
          </Text>
        </Link>
      </div>
    </>
  );
};

export default CreatedByDropdown;
