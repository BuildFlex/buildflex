import Text from '@/components/typography/Text';
import { Divider, Input, Select, Space } from 'antd';
import { Add, ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
interface SelectProps {
  style?: React.CSSProperties;
  initialValue?: string;
  itemsList: string[];
  searchPlaceholder?: string;
  popupClassName?: string;
}
const FieldSelect = ({
  style,
  initialValue,
  itemsList,
  searchPlaceholder,
  popupClassName,
}: SelectProps) => {
  const [items, setItems] = useState(itemsList);
  const [value, setValue] = useState(initialValue);

  return (
    <Select
      style={style}
      defaultValue={value}
      dropdownRender={(menu) => (
        <>
          <Input
            placeholder={searchPlaceholder}
            onKeyDown={(e) => e.stopPropagation()}
          />
          {menu}
        </>
      )}
      suffixIcon={<ArrowDown2 size={16} />}
      popupClassName={popupClassName}
      options={items.map((item) => ({
        label: (
          <Text variant="B2-Regular" as="span">
            {item}
          </Text>
        ),
        value: item,
      }))}
    />
  );
};

export default FieldSelect;
