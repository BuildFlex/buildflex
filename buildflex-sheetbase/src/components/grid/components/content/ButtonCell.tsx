import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import React from 'react';
interface ButtonCellProps {
  name: string;
  className?: string;
}
const ButtonCell = ({ name }: ButtonCellProps) => {
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
        'max-w-[164px] flex items-center justify-center gap-1 h-full w-full ',
        isFocus &&
          'after:content-[""] after:pointer-events-none after:absolute after:h-[calc(100%+2px)] after:w-[calc(100%+2px)] after:z-[2] after:-top-[1px] after:-left-[1px] after:border-theme-ocean-blue after:border-solid after:border',
      )}
    >
      <div className="bg-theme-ocean-blue flex items-center justify-center box-border px-3 py-1 rounded-md h-7  ">
        <Text as="span" variant="B2-Medium" className="text-white h-[18px]">
          {name}
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
  // return (
  //   <div className={cn(' w-full flex items-center justify-center', className)}>
  // <div className="bg-theme-ocean-blue flex items-center justify-center box-border px-3 py-1 rounded-md h-7  ">
  //   <Text as="span" variant="B2-Medium" className="text-white h-[18px]">
  //     {name}
  //   </Text>
  // </div>
  //   </div>
  // );
};

export default ButtonCell;
