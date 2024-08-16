import Text from '@/components/typography/Text';
import { Divider, Input, Select, Space } from 'antd';
import { Add, ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import { SortByLabel } from '../../sort/SortConditionRow';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { CustomInput } from '@/components/input/Input';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
interface SelectProps {
  style?: React.CSSProperties;
  initialValue?: IField | string;
  itemsList: IField[] | string[];
  searchPlaceholder?: string;
  popupClassName?: string;
  isSearch?: boolean;
}
const FieldSelect = ({
  style,
  initialValue,
  itemsList,
  searchPlaceholder,
  popupClassName,
  isSearch = false,
}: SelectProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <Select
      style={{ ...style, height: '30px', width: '120px' }}
      defaultValue={value}
      dropdownRender={(menu) => (
        <div className="flex flex-col gap-1 overflow-auto customScrollBar max-h-[260px] p-3 rounded-lg">
          {isSearch && (
            <CustomInput
              className="h-9 min-h-9 !border-none"
              placeholder={searchPlaceholder}
              onKeyDown={(e) => e.stopPropagation()}
            />
          )}
          {itemsList.map((item) => (
            <DropdownItem className="cursor-pointer hover:bg-gray-50">
              {typeof item !== 'string' && <item.icon size={16} />}
              <Text variant="B2-Regular" as="span">
                {typeof item === 'string' ? item : item.label}
              </Text>
            </DropdownItem>
          ))}
        </div>
      )}
      suffixIcon={<ArrowDown2 size={16} />}
      popupClassName={popupClassName}
    />
  );
};

export default FieldSelect;
