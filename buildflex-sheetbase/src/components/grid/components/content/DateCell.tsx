import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { DatePicker, Dropdown } from 'antd';
import { Add } from 'iconsax-react';
import React, { useId } from 'react';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 1,
});

interface DateCellProps {
  date: string;
  time: string;
  gmt: string;
}
const DateCell = ({ date, time, gmt }: DateCellProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isDatePickOpen, setIsDatePickOpen] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(time);
  const [currentDate, setCurrentDate] = React.useState(date);
  const handleDateChange = (date: string) => setCurrentDate(date);
  const handleDropdownVisible = (isOpen: boolean) => setIsDropdownOpen(isOpen);
  const ref = useOutsideClick(() => {
    !isDropdownOpen && setIsFocus(false);
  });

  const id = useId();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsFocus(true);
      }}
      ref={ref}
      className={cn(
        'max-w-[164px] flex items-center gap-1 h-full w-full ',
        isFocus &&
          'after:content-[""] after:pointer-events-none after:absolute after:h-[calc(100%+2px)] after:w-[calc(100%+2px)] after:z-[2] after:-top-[1px] after:-left-[1px] after:border-theme-ocean-blue after:border-solid after:border',
      )}
    >
      <div className="gap-1 h-[20px] flex justify-between items-end w-full ">
        <label
          htmlFor={'date-picker-' + id}
          className="h-[18px] flex items-center  overflow-hidden relative"
        >
          <Text
            as="span"
            variant="B2-Regular"
            className="whitespace-nowrap cursor-pointer "
          >
            {currentDate}
          </Text>
          <DatePicker
            onCalendarChange={(dates, dateString) =>
              setCurrentDate(dateString as string)
            }
            style={{
              visibility: 'hidden',
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'none',
            }}
            id={'date-picker-' + id}
            className="hidden"
            format="M/D/YYYY"
          />
        </label>

        <TimeDropdown
          open={isDropdownOpen}
          setOpen={handleDropdownVisible}
          onSelect={(value) => setCurrentTime(value)}
          times={times}
        >
          <div className="h-[18px] flex items-center">
            <Text
              as="span"
              variant="B2-Regular"
              className="whitespace-nowrap cursor-pointer "
            >
              {currentTime}
            </Text>
          </div>
        </TimeDropdown>

        <Text
          as="span"
          variant="sub-title"
          className="whitespace-nowrap text-neutral-dark-300 "
        >
          {gmt}
        </Text>
      </div>
      {isFocus && (
        <div
          className={cn(
            'absolute  bg-white z-[11] pointer-events-none size-[10px] rounded-sm',
            ' -bottom-[4px] -right-[4px] ',
          )}
          style={{ border: '1px solid #087AAF' }}
        />
      )}
    </div>
  );
};

export default DateCell;

const TimeDropdown = ({
  times,
  setOpen,
  open,
  children,
  onSelect,
}: {
  times: {
    label: string;
    id: string;
  }[];
  open: boolean;
  onSelect: (value: string) => void;
  setOpen: (value: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <Dropdown
      trigger={['click']}
      open={open}
      onOpenChange={setOpen}
      placement="bottomLeft"
      dropdownRender={(menu) => (
        <div className="flex flex-col w-[112px] max-h-[200px] overflow-y-auto customScrollBar py-2 boxShadowSecondary box-border rounded-lg w-fit">
          {times.map((time, index) => (
            <DropdownItem
              onClick={() => {
                onSelect(time.label);
                setOpen(false);
              }}
              className=" cursor-pointer text-neutral-dark-300 hover:bg-gray-100"
            >
              <Text
                variant="B2-Regular"
                as="span"
                className="text-neutral-dark-300"
              >
                {time.label}
              </Text>
            </DropdownItem>
          ))}
        </div>
      )}
      className=""
    >
      {children}
    </Dropdown>
  );
};

const times = [
  { label: '12:00am', id: '12am' },
  { label: '12:30am', id: '1230am' },
  { label: '1:00am', id: '1am' },
  { label: '1:30am', id: '130am' },
  { label: '2:00am', id: '2am' },
  { label: '2:30am', id: '230am' },
  { label: '3:00am', id: '3am' },
  { label: '3:30am', id: '330am' },
  { label: '4:00am', id: '4am' },
  { label: '4:30am', id: '430am' },
  { label: '5:00am', id: '5am' },
  { label: '5:30am', id: '530am' },
  { label: '6:00am', id: '6am' },
  { label: '6:30am', id: '630am' },
  { label: '7:00am', id: '7am' },
  { label: '7:30am', id: '730am' },
  { label: '8:00am', id: '8am' },
  { label: '8:30am', id: '830am' },
  { label: '9:00am', id: '9am' },
  { label: '9:30am', id: '930am' },
  { label: '10:00am', id: '10am' },
  { label: '10:30am', id: '1030am' },
  { label: '11:00am', id: '11am' },
  { label: '11:30am', id: '1130am' },
  { label: '12:00pm', id: '12pm' },
  { label: '12:30pm', id: '1230pm' },
  { label: '1:00pm', id: '1pm' },
  { label: '1:30pm', id: '130pm' },
  { label: '2:00pm', id: '2pm' },
  { label: '2:30pm', id: '230pm' },
  { label: '3:00pm', id: '3pm' },
  { label: '3:30pm', id: '330pm' },
  { label: '4:00pm', id: '4pm' },
  { label: '4:30pm', id: '430pm' },
  { label: '5:00pm', id: '5pm' },
  { label: '5:30pm', id: '530pm' },
  { label: '6:00pm', id: '6pm' },
  { label: '6:30pm', id: '630pm' },
  { label: '7:00pm', id: '7pm' },
  { label: '7:30pm', id: '730pm' },
  { label: '8:00pm', id: '8pm' },
  { label: '8:30pm', id: '830pm' },
  { label: '9:00pm', id: '9pm' },
  { label: '9:30pm', id: '930pm' },
  { label: '10:00pm', id: '10pm' },
  { label: '10:30pm', id: '1030pm' },
  { label: '11:00pm', id: '11pm' },
  { label: '11:30pm', id: '1130pm' },
];
