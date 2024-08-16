import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Modal, Switch } from 'antd';
import React, { useState } from 'react';

const SettingConfirmModal = ({
  setIsModalOpen,
  id,
  label,
  children,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  label: string;
  children?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAllow, setIsAllow] = useState(false);
  const showModal = () => {
    setIsOpen(true);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
    setIsModalOpen(false);
    setIsAllow((prev) => !prev);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsOpen(false);
  };

  return (
    <>
      <DropdownItem
        onClick={showModal}
        className="text-neutral-dark-500 cursor-pointer"
      >
        <Switch className="w-8" value={isAllow} id={id} size="small" />
        <label className="cursor-pointer" htmlFor={id}>
          <Text as="span" variant="B2-Regular">
            {label}
          </Text>
        </label>
        {children}
      </DropdownItem>
      <Modal
        modalRender={(modal) => (
          <div className="w-[400px] flex flex-col gap-4 p-6 box-border ant-modal-content">
            {' '}
            <div className="w-full items-start justify-between flex">
              <Text as="p" variant="modal-title" className="m-0">
                Are you sure you want to change this setting?
              </Text>
              <button
                onClick={handleCancel}
                className="border-none size-5 flex items-center justify-center p-0 outline-none bg-transparent cursor-pointer"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
            <Text as="span" variant="B2-Regular">
              If you change this setting, the data in this table will stop
              syncing to other bases. Any tables currently syncing data from
              this view will no longer be updated.
            </Text>
            <div className="flex gap-3 items-center justify-end">
              <button
                onClick={handleCancel}
                style={{ border: '1px solid #CACFD8' }}
                className="px-4 hover:bg-gray-50 py-[6px] w-[128px] h-9 p-0 m-0 text-neutral-dark-400 box-border rounded-lg bg-transparent cursor-pointer"
              >
                <Text as="span" variant="B2-Regular" className="h-[18px]">
                  Cancel
                </Text>
              </button>
              <button
                onClick={handleOk}
                className="px-4 py-[6px] w-[128px] h-9 p-0 m-0 text-white hover:opacity-90 bg-theme-ocean-blue box-border rounded-lg border-none  cursor-pointer"
              >
                <Text as="span" variant="B2-Regular" className="h-[18px]">
                  Confirm
                </Text>
              </button>
            </div>
          </div>
        )}
        open={isOpen}
        closeIcon={false}
        onCancel={handleCancel}
      />
    </>
  );
};

export default SettingConfirmModal;
