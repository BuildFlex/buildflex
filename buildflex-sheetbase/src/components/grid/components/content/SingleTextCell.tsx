import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import React from 'react';
interface SingleLineCellProps {
  text: string;
  className?: string;
}
const SingleLineCell = ({ text, className }: SingleLineCellProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const ref = useOutsideClick(() => {
    setIsFocus(false);
  });
  return (
    <div
      onClick={() => setIsFocus(true)}
      ref={ref}
      className={cn(
        'max-w-[164px] h-full w-full truncate overflow-hidden',
        isFocus &&
          'after:content-[""] after:pointer-events-none after:absolute after:h-[calc(100%+2px)] after:w-[calc(100%+1px)] after:z-[2] after:-top-[1px] after:left-0 after:border-theme-ocean-blue after:border-solid after:border',
        className,
      )}
    >
      {isFocus ? (
        <>
          <CustomInput
            defaultValue={text}
            autoFocus
            onClick={() => setIsFocus(true)}
            className="rounded-lg !border-none px-0 overflow-hidden"
            inputClassName="whitespace-nowrap truncate h-[18px]"
          />
          <div
            className="absolute -bottom-[4px] bg-white z-[3] -right-[4px] size-[10px] rounded-sm"
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

export default SingleLineCell;
