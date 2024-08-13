import Text from '@/components/typography/Text';
import { Divider, Input, Select, Space } from 'antd';
import { Add, ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import { SortByLabel } from '../../sort/SortConditionRow';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
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
      style={style}
      defaultValue={value}
      dropdownRender={(menu) => (
        <div className="flex flex-col gap-1">
          {isSearch && (
            <Input
              className="h-9"
              placeholder={searchPlaceholder}
              onKeyDown={(e) => e.stopPropagation()}
            />
          )}
          {menu}
        </div>
      )}
      suffixIcon={<ArrowDown2 size={16} />}
      popupClassName={popupClassName}
      options={itemsList.map((item) => ({
        label: (
          <Text variant="B2-Regular" as="span">
            {typeof item === 'string' ? item : item.label}
          </Text>
        ),

        value: typeof item === 'string' ? item : item.label,
      }))}
    />
  );
};

export default FieldSelect;
