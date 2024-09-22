import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import React from 'react';
interface TimeCellProps {
  date: string;
  time: string;
  gmt?: string;
  subText: string;
}
const TimeCell = ({ date, time, gmt, subText }: TimeCellProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const ref = useOutsideClick(() => {
    setIsFocus(false);
    setIsActive(false);
  });
  return (
    <div
      onClick={() => setIsFocus(true)}
      onDoubleClick={() => {
        setIsActive(true);
      }}
      ref={ref}
      className={cn(
        'max-w-[164px] flex items-center h-full w-full ',
        !isActive &&
          isFocus &&
          'after:content-[""] after:pointer-events-none after:absolute after:h-[calc(100%+2px)] after:w-[calc(100%+2px)] after:z-[2] after:-top-[1px] after:-left-[1px] after:border-theme-ocean-blue after:border-solid after:border',
        isActive ? '' : 'truncate overflow-hidden',
      )}
    >
      {isFocus ? (
        <>
          <div
            style={{ boxShadow: 'none' }}
            className={cn(
              '  m-0    border-none',
              isActive
                ? 'absolute flex box-border justify-start flex-col gap-1  w-[181px] min-h-[64px] p-2   text-wrap  customScrollBar leading-normal  overflow-auto  bg-white z-10 border border-theme-ocean-blue border-solid  -top-[1px] -left-[1px] '
                : ' w-full overflow-y-hidden flex items-center  p-0 ',
            )}
          >
            <div
              className={cn(
                'gap-1 h-[20px] flex justify-between items-end w-full ',
                isActive && 'mt-[1px]',
              )}
            >
              <Text
                as="span"
                variant="B2-Regular"
                className="whitespace-nowrap  "
              >
                {date}
              </Text>
              <Text
                as="span"
                variant="B2-Regular"
                className="whitespace-nowrap  "
              >
                {time}
              </Text>
              {gmt && (
                <Text
                  as="span"
                  variant="sub-title"
                  className="whitespace-nowrap text-neutral-dark-300 "
                >
                  {gmt}
                </Text>
              )}
            </div>
            {isActive && (
              <span className="whitespace-normal font-lato text-[10px] text-neutral-dark-300 my-auto truncate h-auto">
                {subText}
              </span>
            )}
          </div>

          <div
            className={cn(
              'absolute  bg-white z-[11] size-[10px] rounded-sm',
              isActive
                ? ' -bottom-[30px] -right-[5px] '
                : ' -bottom-[4px] -right-[4px] ',
            )}
            style={{ border: '1px solid #087AAF' }}
          />
        </>
      ) : (
        <div className="h-full w-full  flex items-center ">
          <div className="gap-1 h-[20px] flex justify-between items-end w-full ">
            <Text
              as="span"
              variant="B2-Regular"
              className="whitespace-nowrap  "
            >
              {date}
            </Text>
            <Text
              as="span"
              variant="B2-Regular"
              className="whitespace-nowrap  "
            >
              {time}
            </Text>
            {gmt && (
              <Text
                as="span"
                variant="sub-title"
                className="whitespace-nowrap text-neutral-dark-300 "
              >
                {gmt}
              </Text>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeCell;
