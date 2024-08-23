import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CustomInput } from '@/components/common/input/Input';
import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Modal } from 'antd';
import { Add, Image } from 'iconsax-react';
import React, { useState } from 'react';
interface CreateOrganizationProps {
  className?: string;
  handleCancel: () => void;
  isOpen: boolean;
}
const CreateOrganization = ({
  className,
  handleCancel,
  isOpen,
}: CreateOrganizationProps) => {
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleImageChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (!file) return;
      setAttachment(file);
    }
    e.target.value = '';
    e.target.files = null;
  };
  return (
    <Modal
      zIndex={10000}
      modalRender={(modal) => (
        <div className="w-[400px] flex flex-col gap-4 p-6 box-border ant-modal-content">
          {' '}
          <div className="w-full items-start justify-between flex">
            <Text as="p" variant="modal-title" className="m-0">
              Create organization
            </Text>
            <button
              onClick={handleCancel}
              className="border-none size-5 flex items-center justify-center p-0 outline-none bg-transparent cursor-pointer"
            >
              <CloseIcon className="size-5" color="#3E4D65" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <Text
              as="span"
              variant="B1-Medium"
              className="text-neutral-dark-400"
            >
              Logo
            </Text>
            <div className="flex gap-3 items-center">
              <div className="rounded-lg size-[60px] flex items-center justify-center border border-borderColor">
                {attachment ? (
                  <img
                    src={URL.createObjectURL(attachment)}
                    alt="logo"
                    className="object-cover"
                  />
                ) : (
                  <Image size={24} />
                )}
              </div>
              <div className="flex flex-col justify-between gap-1">
                <label className="px-4 border flex justify-center items-center border-borderColor hover:bg-gray-50 py-[6px] w-[128px] h-9 p-0 m-0 text-neutral-dark-400 box-border rounded-lg bg-transparent cursor-pointer">
                  <Text as="span" variant="B2-Regular" className="h-[18px]">
                    Upload
                  </Text>
                  <input
                    onChange={(e) => handleImageChoose(e)}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>

                <Text
                  as="span"
                  variant="B2-Regular"
                  className="text-neutral-dark-400 h-[18px]"
                >
                  Recommenđe size 1:1, up to 10MB
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Text
              as="span"
              variant="B1-Medium"
              className="text-neutral-dark-400"
            >
              Name
            </Text>
            <CustomInput
              className="h-10"
              inputClassName="placeholder:text-neutral-dark-400"
              placeholder="Name of organization"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Text
              as="span"
              variant="B1-Medium"
              className="text-neutral-dark-400"
            >
              Slug
            </Text>
            <CustomInput
              className="h-10"
              inputClassName="placeholder:text-neutral-dark-400"
              placeholder="my-org"
            />
          </div>
          <div className="flex gap-3 mt-2 items-center justify-end">
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
              onClick={handleCancel}
              className="px-4 py-[6px] min-w-[141px] h-9 p-0 m-0 text-white hover:opacity-90 bg-brand-PRIMARY box-border rounded-lg border-none  cursor-pointer"
            >
              <Text as="span" variant="B2-Medium" className="h-[18px]">
                Use selected field
              </Text>
            </button>
          </div>
        </div>
      )}
      open={isOpen}
      closeIcon={false}
      onCancel={handleCancel}
    />
  );
};

export default CreateOrganization;
