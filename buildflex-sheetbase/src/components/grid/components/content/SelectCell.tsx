import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Checkbox } from 'antd';
import React from 'react';
interface SelectCellProps {
  selects: {
    name: string;
    color: string;
  }[];
}
const SelectCell = ({ selects }: SelectCellProps) => {
  return (
    <div className="max-w-[164px] overflow-hidden flex items-center gap-1 w-full  ">
      {selects.map((select, index) => (
        <div
          className={cn(
            'rounded-[100px] h-6 box-border  px-2  bg-semantic-50 ',
          )}
          style={{ backgroundColor: select.color }}
        >
          <Text as="span" variant="sub-title">
            {select.name}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default SelectCell;
