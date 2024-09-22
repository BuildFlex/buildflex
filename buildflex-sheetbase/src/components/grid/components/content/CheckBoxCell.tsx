import { CheckBoxIcon } from '@/components/icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import React from 'react';
interface CheckBoxCellProps {
  isCheck: boolean;
}
const CheckBoxCell = ({ isCheck }: CheckBoxCellProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [check, setCheck] = React.useState(isCheck);
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
      <button
        onClick={() => setCheck((prev) => !prev)}
        className="size-5 min-w-5 rounded-md flex w-fit mx-auto items-center justify-center box-border bg-neutral-100 "
        style={{
          border: '1.5px solid #EDEDED',
        }}
      >
        {check && (
          <CheckBoxIcon
            className="text-theme-ocean-blue size-4"
            color="currentColor"
          />
        )}
      </button>
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

export default CheckBoxCell;
