import Text from '@/components/typography/Text';
import { DatePicker } from 'antd';
import { ArrowDown2, Calendar } from 'iconsax-react';
import { useCallback, useId, useState } from 'react';

const ExpandDate = () => {
  const [date, setDate] = useState('12/12/2021');
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <div className="flex justify-between items-start">
      {/* Date  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <Calendar size={16} />
        <Text as="span" variant="B2-Regular">
          Date
        </Text>
      </div>
      <button
        className="max-w-[430px] relative h-9 w-full flex items-center rounded-lg px-2"
        style={{ border: '1px solid #EDEDED' }}
        onClick={handleOpen}
      >
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-500">
          {date}
        </Text>
        <ArrowDown2 size={16} className="text-neutral-dark-500 ml-auto " />
        <DatePicker
          open={isOpen}
          onCalendarChange={(dates, dateString) =>
            setDate(dateString as string)
          }
          popupClassName="!z-[9999]"
          style={{
            visibility: 'hidden',
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}
          id={`date-picker-${id}`}
          className="hidden"
          format="M/D/YYYY"
        />
      </button>
    </div>
  );
};

export default ExpandDate;
