import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import { Add } from 'iconsax-react';
import React from 'react';
import MultipleSelectCellModal from './modal/multiple-select-cell-modal';
interface MutilpleSelectCellProps {
  selects: {
    name: string;
    color: string;
  }[];
}

export const SelectAddDropdown = ({
  selects,
  setOpen,
  open,
  children,
}: {
  selects: {
    name: string;
    color: string;
  }[];
  open: boolean;
  setOpen: (value: boolean) => void;
  children?: React.ReactNode;
}) => {
  return (
    <Dropdown
      trigger={['click']}
      open={open}
      onOpenChange={setOpen}
      placement="bottomLeft"
      dropdownRender={() => (
        <div className="flex flex-col p-2 box-border rounded-lg w-[180px]">
          <DropdownItem>
            <Text
              variant="B2-Regular"
              as="span"
              className="text-neutral-dark-300"
            >
              Find an operation
            </Text>
          </DropdownItem>
          {selects.map((select) => (
            <DropdownItem
              key={select.name}
              onClick={() => setOpen(false)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <div
                className={cn(
                  'rounded-[100px]  w-fit h-6 whitespace-nowrap flex items-center box-border  px-2  bg-semantic-50 ',
                )}
                style={{ backgroundColor: select.color }}
              >
                <Text as="span" variant="sub-title">
                  {select.name}
                </Text>
              </div>
            </DropdownItem>
          ))}
        </div>
      )}
      className=""
      overlayClassName="project-name-dropdown rounded-lg boxShadowSecondary"
    >
      {children ?? (
        <button className="bg-gray-100 h-5 w-5 justify-center  flex items-center rounded border-none cursor-pointer">
          <Add size={20} className="text-neutral-dark-500  " />
        </button>
      )}
    </Dropdown>
  );
};

const MutilpleSelectCell = ({ selects }: MutilpleSelectCellProps) => {
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
      {isFocus ? (
        <>
          <div
            style={{ boxShadow: 'none' }}
            className={cn(
              '  m-0   font-lato text-sm  resize-none  border-none',
              'absolute flex flex-col gap-1 w-[182px] min-h-[64px] p-2  text-wrap  customScrollBar leading-normal overflow-auto  bg-white z-10 border border-theme-ocean-blue border-solid  -top-[1px] -left-[1px] ',
            )}
          >
            <div className="flex gap-1 items-center pb-1 max-w-[140px] overflow-x-auto customScrollBar">
              {selects.map((select) => (
                <div
                  key={select.name}
                  className={cn(
                    'rounded-[100px] whitespace-nowrap h-6 flex items-center box-border  px-2  bg-semantic-50 ',
                  )}
                  style={{ backgroundColor: select.color }}
                >
                  <Text as="span" variant="sub-title">
                    {select.name}
                  </Text>
                </div>
              ))}
            </div>
            <SelectAddDropdown
              setOpen={handleDropdownVisible}
              open={isDropdownOpen}
              selects={selects}
            />
          </div>

          <MultipleSelectCellModal />
          <div
            className={cn(
              'absolute  bg-white z-[11] size-[10px] rounded-sm',
              ' -bottom-[39px] -right-[5px] ',
            )}
            style={{ border: '1px solid #087AAF' }}
          />
        </>
      ) : (
        selects.map((select) => (
          <div
            key={select.name}
            className={cn(
              'rounded-[100px] h-6 whitespace-nowrap flex items-center box-border  px-2  bg-semantic-50 ',
            )}
            style={{ backgroundColor: select.color }}
          >
            <Text as="span" variant="sub-title">
              {select.name}
            </Text>
          </div>
        ))
      )}
    </div>
  );
};

export default MutilpleSelectCell;
