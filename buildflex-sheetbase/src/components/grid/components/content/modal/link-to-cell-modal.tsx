import { CloseIcon, MoveToIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import {
  Add,
  CloseCircle,
  Maximize4,
  Task,
  TextalignJustifycenter,
} from 'iconsax-react';
import React from 'react';
import Draggable from 'react-draggable';

const LinkToCellModal = () => {
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
              'w-[490px] cursor-grab flex right-[100px] flex-col gap-3 rounded-lg p-4 fixed  z-[100] min-h-[140px] boxShadowSecondary',
              isDragging ? 'cursor-grabbing' : 'cursor-grab',
            )}
          >
            <div
              className="flex flex-col gap-1 h-full cursor-default"
              draggable={false}
            >
              <div className="flex items-center h-9 px-2 gap-2 text-neutral-dark-300">
                <MoveToIcon color="currentColor" size={16} />
                <Text as="span" variant="B2-Regular">
                  Link to new table
                </Text>
              </div>
            </div>
            <div className="flex rounded flex-col gap-1 h-full cursor-default">
              <Text as="span" variant="B2-Regular">
                No linked records{' '}
              </Text>
              <button className="flex rounded w-fit min-w-[112px] items-center bg-[#E0F2FE] text-theme-ocean-blue h-10 px-2 gap-2  border-none cursor-pointer">
                <Add size={16} />
                <Text as="span" variant="B2-Regular">
                  Link to a person from People{' '}
                </Text>
              </button>
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

export default LinkToCellModal;
