import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Input } from 'antd';
import React from 'react';

const DuplicateFieldModal = ({
  handleCancel,
}: {
  handleCancel: () => void;
}) => {
  return (
    <div className="w-[350px] flex flex-col gap-3 overflow-hidden !p-3 box-border bg-white rounded-lg ant-modal-content">
      {/* Header */}

      <div className="w-full items-start justify-between flex">
        <Text as="p" variant="modal-title" className="m-0">
          Duplicate “Field Name”
        </Text>
        <button
          onClick={handleCancel}
          className="border-none size-5 flex items-center justify-center p-0 outline-none bg-transparent cursor-pointer"
        >
          <CloseIcon className="size-5" />
        </button>
      </div>
      {/* Content */}
      <div className="px-2 py-[7px] ">
        <Text as="span" variant="B2-Regular">
          Duplicate cells
        </Text>
      </div>
      {/* Footer */}
      <div className="flex gap-3 items-center justify-end">
        <button
          onClick={handleCancel}
          className="px-4 border-none w-fit hover:bg-gray-50 py-[6px] h-9 p-0 m-0 text-neutral-dark-400 box-border rounded-lg bg-transparent cursor-pointer"
        >
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Cancel
          </Text>
        </button>
        <button
          onClick={handleCancel}
          className="px-4 py-[6px]  h-9 p-0 m-0 text-white hover:opacity-90 bg-theme-ocean-blue box-border rounded-lg border-none  cursor-pointer"
        >
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Add 27 fields
          </Text>
        </button>
      </div>
    </div>
  );
};

export default DuplicateFieldModal;
