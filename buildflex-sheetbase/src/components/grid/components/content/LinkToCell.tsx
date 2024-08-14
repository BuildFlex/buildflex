import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Checkbox } from 'antd';
import React from 'react';
interface LinkToCellProps {
  linkList: {
    name: string;
    color: string;
  }[];
}
const LinkToCell = ({ linkList }: LinkToCellProps) => {
  console.log('linkList', linkList);
  return (
    <div className="max-w-[164px] overflow-hidden flex items-center gap-1 w-full  ">
      {linkList.map((link, index) => (
        <div
          className={cn('rounded h-6 box-border  px-2  bg-semantic-50 ')}
          style={{ backgroundColor: link.color }}
        >
          <Text as="span" variant="sub-title-medium">
            {link.name}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default LinkToCell;
