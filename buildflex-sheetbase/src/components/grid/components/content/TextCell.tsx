import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import React from 'react';
interface TextCellProps {
  text: string;
  className?: string;
}
const TextCell = ({ text, className }: TextCellProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const ref = useOutsideClick(() => {
    setIsFocus(false);
  });
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
      <div
        className={cn(
          'max-w-[164px] flex items-center w-full truncate overflow-hidden',
          className,
        )}
      >
        <Text
          as="span"
          variant="B2-Regular"
          className="whitespace-nowrap h-[18px] "
        >
          {text}
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

export default TextCell;
