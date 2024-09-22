import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { CloseCircle, Maximize4, Task } from 'iconsax-react';
import React from 'react';
import Draggable from 'react-draggable';

const MultipleSelectCellModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="size-5 p-0 m-0  bg-transparent border-none cursor-pointer"
      >
        <Maximize4
          className="absolute top-2 right-2 z-[11]"
          size={20}
          color="#087AAF"
        />
      </button>
      {isOpen && (
        <Draggable
          onStart={() => setIsDragging(true)}
          onStop={() => setIsDragging(false)}
        >
          <div
            className={cn(
              'w-[490px] cursor-grab flex flex-col gap-3 rounded-lg p-4 fixed  z-[100] min-h-[140px] boxShadowSecondary',
              isDragging ? 'cursor-grabbing' : 'cursor-grab',
            )}
          >
            <div
              className="flex flex-col gap-1 h-full cursor-default"
              draggable={false}
            >
              <div className="flex items-center h-9 px-2 gap-2 text-neutral-dark-300">
                <Task size={16} />
                <Text as="span" variant="B2-Regular">
                  Multiple Select
                </Text>
              </div>
              <button className="flex rounded w-fit min-w-[112px] items-center bg-[#E0F2FE] text-theme-ocean-blue h-10 px-2 gap-2  border-none cursor-pointer">
                <Text as="span" variant="B2-Regular">
                  Select an option
                </Text>
              </button>
            </div>
            {/* No Select */}
            {/* <div className="h-10 px-2 flex text-neutral-dark-300 items-center">
              <Text as="span" variant="B2-Regular">
                No options selected{' '}
              </Text>
            </div> */}
            {/* Select item */}
            <div
              className={cn(
                'rounded-[100px] w-fit h-6 gap-0.5 whitespace-nowrap flex items-center box-border  px-2  bg-semantic-50 ',
              )}
              style={{ backgroundColor: '#F2F4F7' }}
            >
              <Text as="span" variant="sub-title">
                Hello 1
              </Text>
              <CloseIcon className="cursor-pointer size-3" />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="size-5 p-0 m-0 after:size-3  after:absolute after:rounded-full after:-z-[1]  after:bg-[#6A758B] flex items-center justify-center absolute -top-2 -right-2 rounded-full  border-none cursor-pointer"
            >
              <CloseCircle
                size={24}
                className="text-[#101828] z-1"
                variant="Bold"
              />
            </button>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default MultipleSelectCellModal;
