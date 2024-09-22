import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import React from 'react';
import LongTextCellModal from './modal/long-text-cell-modal';
interface LongTextCellProps {
  text: string;
  className?: string;
}
const LongTextCell = ({ text, className }: LongTextCellProps) => {
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
        console.log('im in onDoubleClick');
      }}
      ref={ref}
      className={cn(
        'max-w-[164px] flex items-center h-full w-full ',
        !isActive &&
          isFocus &&
          'after:content-[""] after:pointer-events-none after:absolute after:h-[calc(100%+2px)] after:w-[calc(100%+2px)] after:z-[2] after:-top-[1px] after:-left-[1px] after:border-theme-ocean-blue after:border-solid after:border',
        className,
        isActive ? '' : 'truncate overflow-hidden',
      )}
    >
      {isFocus ? (
        <>
          <textarea
            defaultValue={text}
            style={{ boxShadow: 'none' }}
            rows={1}
            className={cn(
              '  m-0   font-lato text-sm  resize-none  border-none',
              isActive
                ? 'absolute  w-[182px] min-h-[120px] p-2 pr-7  text-wrap  customScrollBar leading-normal block overflow-auto  bg-white z-10 border border-theme-ocean-blue border-solid  -top-[1px] -left-[1px] '
                : ' h-[18px] w-full overflow-y-hidden  p-0 leading-[18.2px]',
            )}
          />
          {isActive && <LongTextCellModal />}
          <div
            className={cn(
              'absolute  bg-white z-[11] size-[10px] rounded-sm',
              isActive
                ? ' -bottom-[85px] -right-[5px] '
                : ' -bottom-[4px] -right-[4px] ',
            )}
            style={{ border: '1px solid #087AAF' }}
          />
        </>
      ) : (
        <div className="h-full w-full  flex items-center justify-start">
          <Text
            as="span"
            variant="B2-Regular"
            className="whitespace-nowrap my-auto truncate h-[18px]"
          >
            {text}
          </Text>
        </div>
      )}
    </div>
  );
};

export default LongTextCell;
