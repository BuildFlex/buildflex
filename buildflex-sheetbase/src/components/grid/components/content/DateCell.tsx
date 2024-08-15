import Text from '@/components/typography/Text';
import React from 'react';
interface DateCellProps {
  date: string;
  time: string;
  gmt: string;
}
const DateCell = ({ date, time, gmt }: DateCellProps) => {
  return (
    <div className="gap-1 h-[20px] flex justify-between items-end w-full ">
      <Text as="span" variant="B2-Regular" className="whitespace-nowrap  ">
        {date}
      </Text>
      <Text as="span" variant="B2-Regular" className="whitespace-nowrap  ">
        {time}
      </Text>
      <Text
        as="span"
        variant="sub-title"
        className="whitespace-nowrap text-neutral-dark-300 "
      >
        {gmt}
      </Text>
    </div>
  );
};

export default DateCell;
