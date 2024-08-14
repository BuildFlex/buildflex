import Text from '@/components/typography/Text';
import { fields } from '@/components/view-filter/components/dropdown-render/HideFieldDropdownRender';
import { Checkbox } from 'antd';
import { Add, ArrowDown2 } from 'iconsax-react';
import React from 'react';
import { gridTableFields } from '../../GridUI';
import HeaderFilterDropdown from './header-filter-dropdown';

const GridTableHeader = () => {
  return (
    <thead className="sticky top-0 z-10">
      <tr
        style={{ borderBottom: '1px solid #EDEDED' }}
        className="w-full bg-gray-100 h-9 box-border"
      >
        <th
          className="px-2 z-[10] box-border text-start min-w-[72px] sticky border-r left-0 bg-gray-100 after:absolute after:h-full after:bg-[#EDEDED] after:content-[''] after:-right-[1px] after:top-0 after:w-[1px]"
          style={{ borderRight: '1px solid #EDEDED' }}
        >
          <Checkbox />
        </th>
        {gridTableFields.map((field, index) => (
          <th
            key={field.id + index}
            style={{ borderRight: '1px solid #EDEDED' }}
            className="px-2 min-w-[180px] whitespace-nowrap box-border text-left"
          >
            <div className="flex gap-2 items-center text-neutral-dark-500">
              <field.icon size={16} />
              <Text as="span" variant="B2-Regular" className="h-[18px]">
                {field.label}
              </Text>
              {/* <ArrowDown2 className="ml-auto" size={16} /> */}
              <HeaderFilterDropdown />
            </div>
          </th>
        ))}
        <th
          className="z-[10] min-w-[100px]  box-border  "
          style={{ borderRight: '1px solid #EDEDED' }}
        >
          <div className="w-full h-full flex items-center justify-center cursor-pointer">
            <Add size={16} />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default GridTableHeader;
