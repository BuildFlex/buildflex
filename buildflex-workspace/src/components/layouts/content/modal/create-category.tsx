import { CustomInput } from '@/components/common/input/Input';
import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Modal } from 'antd';
import { Add } from 'iconsax-react';
import { useState } from 'react';

const CreateCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => setIsOpen(true);
  const handleCancel = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={showModal}
        className="rounded-lg py-[6px] h-9 whitespace-nowrap px-4 gap-2 flex items-center bg-brand-PRIMARY text-white"
      >
        <Add size={16} />
        <Text as="span" variant="B2-Medium">
          Create category
        </Text>
      </button>
      <Modal
        modalRender={() => (
          <div className="w-[400px] flex flex-col gap-4 p-6 box-border ant-modal-content">
            {' '}
            <div className="w-full items-start justify-between flex">
              <Text as="p" variant="modal-title" className="m-0">
                Create Category{' '}
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
                Name
              </Text>
              <CustomInput
                className="h-10"
                inputClassName="placeholder:text-neutral-dark-400"
                placeholder="Name of Category"
              />
            </div>
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
                onClick={handleCancel}
                className="px-4 py-[6px] w-[128px] h-9 p-0 m-0 text-white hover:opacity-90 bg-brand-PRIMARY box-border rounded-lg border-none  cursor-pointer"
              >
                <Text as="span" variant="B2-Medium" className="h-[18px]">
                  Create Now
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

export default CreateCategory;
