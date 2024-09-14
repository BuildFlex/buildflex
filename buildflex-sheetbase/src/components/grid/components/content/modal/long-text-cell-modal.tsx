import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { CloseCircle, Maximize4, TextalignJustifycenter } from 'iconsax-react';
import React from 'react';
import Draggable from 'react-draggable';

const LongTextCellModal = () => {
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
              'w-[528px] cursor-grab !bg-gray-100 rounded-lg p-4 fixed  z-[100] h-[423px] boxShadowSecondary',
              isDragging ? 'cursor-grabbing' : 'cursor-grab',
            )}
          >
            <div
              className="bg-gray-100 flex flex-col gap-1 h-full cursor-default"
              draggable={false}
            >
              <div className="flex items-center h-9 px-2 gap-2 text-neutral-dark-300">
                <TextalignJustifycenter size={16} />
                <Text as="span" variant="B2-Regular">
                  Notes
                </Text>
              </div>
              <label className="rounded-lg h-full bg-white relative flex gap-2 w-full p-2">
                <textarea
                  className="p-0 m-0 w-full placeholder:text-neutral-dark-300 font-lato text-sm border-none resize-none "
                  style={{ boxShadow: 'none' }}
                  defaultValue={
                    "Summary of the current user's work that is in progress or upcoming."
                  }
                />
                <button className="size-4 bg-transparent text-neutral-dark-300 border-none absolute bottom-3 right-2">
                  <Text as="span" variant="B2-Regular">
                    @
                  </Text>
                </button>
              </label>
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

export default LongTextCellModal;
