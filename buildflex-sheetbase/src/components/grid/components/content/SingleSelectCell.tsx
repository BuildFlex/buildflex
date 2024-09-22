import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { ArrowDown2 } from 'iconsax-react';
import React from 'react';
import { SelectAddDropdown } from './MutilpleSelectCell';
interface SingleSelectCellProps {
  selects: {
    name: string;
    color: string;
  }[];
  select: {
    name: string;
    color: string;
  };
}
const SingleSelectCell = ({ selects, select }: SingleSelectCellProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const ref = useOutsideClick(() => {
    !isDropdownOpen && setIsFocus(false);
  });
  const handleDropdownVisible = (isOpen: boolean) => setIsDropdownOpen(isOpen);
  return (
    <div
      onClick={() => setIsFocus(true)}
      ref={ref}
      className={cn(
        'max-w-[164px] flex overflow-x-hidden customScrollBar items-center gap-1 h-full w-full ',
        isFocus &&
          'after:content-[""] overflow-x-auto after:pointer-events-none after:absolute after:h-[calc(100%+2px)] after:w-[calc(100%+2px)] after:z-[2] after:-top-[1px] after:-left-[1px] after:border-theme-ocean-blue after:border-solid after:border',
      )}
    >
      <div
        className={cn(
          'rounded-[100px] h-6 whitespace-nowrap flex items-center box-border  px-2  bg-semantic-50 ',
        )}
        style={{ backgroundColor: select.color }}
      >
        <Text as="span" variant="sub-title">
          {select.name}
        </Text>
      </div>
      {isFocus && (
        <>
          <SelectAddDropdown
            setOpen={handleDropdownVisible}
            open={isDropdownOpen}
            selects={selects}
          >
            <ArrowDown2 size={20} className="text-neutral-dark-500 ml-auto  " />
          </SelectAddDropdown>
          <div
            className={cn(
              'absolute  bg-white z-[11] size-[10px] rounded-sm',
              ' -bottom-[4px] -right-[4px] ',
            )}
            style={{ border: '1px solid #087AAF' }}
          />
        </>
      )}
    </div>
  );
};

export default SingleSelectCell;
