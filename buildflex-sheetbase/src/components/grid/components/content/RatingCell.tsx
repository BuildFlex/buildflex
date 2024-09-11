import { RateStarFilledIcon, RateStarIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import { ArrowDown2, Star } from 'iconsax-react';
import React, { useId } from 'react';
interface RatingCellProps {
  rating: number;
  className?: string;
}
const RatingCell = ({ rating, className }: RatingCellProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const ref = useOutsideClick(() => {
    !isDropdownOpen && setIsFocus(false);
  });
  const id = useId();
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
      {Array.from({ length: 5 }).map((_, index) =>
        index < rating ? (
          <RateStarFilledIcon className="size-5" key={`${id}-${index}`} />
        ) : (
          <RateStarIcon className="size-5" key={`${id}-${index}`} />
        ),
      )}
      {isFocus && (
        <>
          <RattingDropdown
            setOpen={handleDropdownVisible}
            open={isDropdownOpen}
          />
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

export default RatingCell;

const RattingDropdown = ({
  setOpen,
  open,
  children,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  children?: React.ReactNode;
}) => {
  const [value, setValue] = React.useState(-1);
  const id = useId();
  return (
    <Dropdown
      trigger={['click']}
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
      dropdownRender={(menu) => (
        <div className="flex gap-2 h-9 box-border p-2 rounded-lg w-[180px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`${id}-${index}`}
              className="size-5 "
              onMouseEnter={() => setValue(index)}
            >
              <RateStarIcon
                color={value >= index ? '#FCBF25' : '#F2F4F7'}
                className="size-5"
              />
            </div>
          ))}
        </div>
      )}
      className=""
      overlayClassName="project-name-dropdown rounded-lg boxShadowSecondary"
    >
      <ArrowDown2 size={20} className="text-neutral-dark-500 ml-auto  " />
    </Dropdown>
  );
};
