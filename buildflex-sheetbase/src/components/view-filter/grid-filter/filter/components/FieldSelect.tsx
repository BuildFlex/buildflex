import { Divider, Input, Select, Space } from 'antd';
import React, { useState } from 'react';
interface SelectProps {
  style?: React.CSSProperties;
  initialValue?: string;
  itemsList: string[];
}
const FieldSelect = ({ style, initialValue, itemsList }: SelectProps) => {
  const [items, setItems] = useState(itemsList);
  const [value, setValue] = useState(initialValue);

  return (
    <Select
      style={style}
      placeholder="custom dropdown render"
      defaultValue={value}
      dropdownRender={(menu) => (
        <>
          {menu}
          {/* <Divider style={{ margin: '8px 0' }} />
          <Space style={{ padding: '0 8px 4px' }}>
            <Input
              placeholder="Please enter item"
              value={value}
              onKeyDown={(e) => e.stopPropagation()}
            />
          </Space> */}
        </>
      )}
      options={items.map((item) => ({ label: item, value: item }))}
    />
  );
};

export default FieldSelect;
