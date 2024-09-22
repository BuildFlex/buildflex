import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import { Add } from 'iconsax-react';
import React from 'react';
import LinkToCellModal from './modal/link-to-cell-modal';
interface LinkToCellProps {
  linkList: {
    name: string;
    color: string;
  }[];
}
const LinkToDropdown = ({
  selects,
  setOpen,
  open,
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
        <div className="flex flex-col max-h-[200px] overflow-y-auto customScrollBar p-2 boxShadowSecondary box-border rounded-lg w-fit">
          <DropdownItem className=" pr-0">
            <Text
              variant="B2-Regular"
              as="span"
              className="text-neutral-dark-300"
            >
              Search
            </Text>
            <button
              className="size-7 rounded ml-auto bg-transparent cursor-pointer flex justify-center items-center "
              style={{ border: '1px solid #EDEDED' }}
            >
              <Add size={16} className="text-neutral-dark-500  " />
            </button>
          </DropdownItem>
          {selects.map((select, index) => (
            <div
              key={select.name}
              onClick={() => setOpen(false)}
              className="hover:bg-gray-100 w-[423px] box-border flex flex-col gap-1 rounded p-2 cursor-pointer"
            >
              <Text as="span" variant="B2-Regular">
                {`Text-title ${select.name}-${index + 1}`}
              </Text>
              <div className="flex items-center gap-12">
                {Array.from({ length: 5 }).map((number) => (
                  <div
                    key={`link-to-cell-${number as number}`}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-[10px] text-neutral-dark-300 font-lato">
                      Sub-title
                    </span>
                    <Text as="span" variant="sub-title">
                      Content
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      className=""
    >
      <button className="bg-gray-100 h-5 w-5 justify-center  flex items-center rounded border-none cursor-pointer">
        <Add size={20} className="text-neutral-dark-500  " />
      </button>
    </Dropdown>
  );
};

const LinkToCell = ({ linkList }: LinkToCellProps) => {
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
        'max-w-[200px] box-border flex overflow-x-hidden customScrollBar items-center gap-1 h-full w-full ',
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
              'absolute flex flex-col items-start gap-1 w-[calc(100%+2px)] min-h-[64px] p-2 pr-8 text-wrap   leading-normal  bg-white z-10 border border-theme-ocean-blue border-solid  -top-[1px] -left-[1px] ',
            )}
          >
            <div className="flex  flex-col gap-1 items-start overflow-y-auto h-fit w-full  max-h-[100px] customScrollBar ">
              {linkList.map((select) => (
                <div
                  key={select.name}
                  className={cn(
                    'rounded w-fit whitespace-nowrap gap-1 min-h-6 h-6 flex items-center box-border  px-2  bg-semantic-50 ',
                  )}
                  style={{ backgroundColor: select.color }}
                >
                  <Text as="span" variant="sub-title">
                    {select.name}
                  </Text>
                  <CloseIcon className="size-3" color="#101828" />
                </div>
              ))}
            </div>
            <LinkToDropdown
              setOpen={handleDropdownVisible}
              open={isDropdownOpen}
              selects={linkList}
            />
            <div
              className={cn(
                'absolute  bg-white z-[11] size-[10px] rounded-sm',
                ' -bottom-[4px] -right-[4px] ',
              )}
              style={{ border: '1px solid #087AAF' }}
            />
          </div>

          <LinkToCellModal />
        </>
      ) : (
        linkList.map((select) => (
          <div
            key={select.name}
            className={cn(
              'rounded h-6 whitespace-nowrap gap-1 flex items-center box-border  px-2  bg-semantic-50 ',
            )}
            style={{ backgroundColor: select.color }}
          >
            <Text as="span" variant="sub-title">
              {select.name}
            </Text>
            <CloseIcon className="size-3" color="#101828" />
          </div>
        ))
      )}
    </div>
  );
};
export default LinkToCell;
