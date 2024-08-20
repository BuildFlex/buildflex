import { CloseIcon, MoreVert } from '@/components/icons';
import Text from '@/components/typography/Text';
import { ArrowDown2, Link21, MessageText } from 'iconsax-react';
import React from 'react';

interface ExpandHeaderProps {
  handleClose: () => void;
  handleShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}
const ExpandHeader = ({
  handleClose,
  handleShowSidebar,
}: ExpandHeaderProps) => {
  return (
    <div
      style={{ borderBottom: '1px solid #EDEDED' }}
      className="px-4  h-[43px] box-border flex gap-2 items-center "
    >
      <div className="flex items-center gap-4">
        <ArrowDown2 size={16} />
        <ArrowDown2 size={16} className="rotate-180 text-neutral-dark-300" />
        <Text as="span" variant="B1-Regular">
          Unnamed record
        </Text>
      </div>

      <div className="flex ml-auto items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="size-8 flex items-center justify-center">
            <MoreVert className="rotate-90" size={16} />
          </div>
          <div className="size-8 flex items-center justify-center">
            <Link21 size={16} />
          </div>
          <button
            onClick={() => handleShowSidebar((prev) => !prev)}
            className="size-8 rounded-3xl hover:bg-gray-100 bg-transparent border-none flex items-center justify-center"
          >
            <MessageText size={16} />
          </button>
        </div>
        <div className="h-6 w-[1px] bg-borderColor" />
        <button
          onClick={handleClose}
          className="size-4 bg-transparent border-none"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default ExpandHeader;
