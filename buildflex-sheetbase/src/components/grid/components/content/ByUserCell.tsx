import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { Checkbox, Dropdown } from 'antd';
import React from 'react';
import { SelectAddDropdown } from './MutilpleSelectCell';
import { Add, ArrowDown2 } from 'iconsax-react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
interface ByUserCellProps {
  user: {
    name: string;
    avatar: string;
    email: string;
  };
  subText: string;
}
const ByUserCell = ({ user, subText }: ByUserCellProps) => {
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
            autoFocus
            className={cn(
              '  m-0    border-none',
              isActive
                ? 'absolute flex box-border justify-start flex-col gap-1  w-[181px] min-h-[64px] px-2 py-[7px]  text-wrap  customScrollBar leading-normal  overflow-auto  bg-white z-10 border border-theme-ocean-blue border-solid  -top-[1px] -left-[1px] '
                : ' w-full overflow-y-hidden flex items-center  p-0 ',
            )}
          >
            <div className="flex w-fit gap-1 bg-gray-100 rounded-full items-center box-border min-w-[90px] h-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <Text as="span" variant="sub-title-medium">
                {user.name}
              </Text>
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
          <div className="flex gap-1 bg-gray-100 rounded-full items-center pr-2 box-border min-w-[90px] h-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <Text as="span" variant="sub-title-medium">
              {user.name}
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};
export default ByUserCell;

// const [isFocus, setIsFocus] = React.useState(false);
// const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
// const ref = useOutsideClick(() => {
//   !isDropdownOpen && setIsFocus(false);
// });
// const handleDropdownVisible = (isOpen: boolean) => setIsDropdownOpen(isOpen);
// return (
//   <div
//     onClick={() => setIsFocus(true)}
//     ref={ref}
//     className={cn(
//       'max-w-[164px] flex overflow-x-hidden customScrollBar items-center gap-1 h-full w-full ',
//       isFocus &&
//         'after:content-[""] overflow-x-auto after:pointer-events-none after:absolute after:h-[calc(100%+2px)] after:w-[calc(100%+2px)] after:z-[2] after:-top-[1px] after:-left-[1px] after:border-theme-ocean-blue after:border-solid after:border',
//     )}
//   >
// <div className="flex gap-1 bg-gray-100 rounded-full items-center pr-2 box-border min-w-[90px] h-6">
//   <img
//     src={user.avatar}
//     alt={user.name}
//     className="w-6 h-6 rounded-full object-cover"
//   />
//   <Text as="span" variant="sub-title-medium">
//     {user.name}
//   </Text>
// </div>
//     {isFocus && (
//       <div
//         className={cn(
//           'absolute  bg-white z-[11] size-[10px] rounded-sm',
//           ' -bottom-[4px] -right-[4px] ',
//         )}
//         style={{ border: '1px solid #087AAF' }}
//       />
//     )}
//   </div>
// );
