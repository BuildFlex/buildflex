import Text from '@/components/typography/Text';
import React from 'react';
interface LinkCellProps {
  text: string;
}
const LinkCell = ({ text }: LinkCellProps) => {
  return (
    <div
      className="max-w-[164px] h-fit w-fit truncate overflow-hidden"
      style={{ borderBottom: '1px solid #101828' }}
    >
      <Text
        as="span"
        variant="B2-Medium"
        className="whitespace-nowrap h-[18px]  "
      >
        {text}
      </Text>
    </div>
  );
};

export default LinkCell;
