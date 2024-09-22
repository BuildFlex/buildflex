import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Select } from 'antd';
import { ArrowDown2 } from 'iconsax-react';

const ChangeThePrimaryFieldModal = ({
  handleCancel,
}: {
  handleCancel: () => void;
}) => {
  return (
    <div className="w-[456px] flex flex-col gap-3 overflow-hidden !p-3 box-border bg-white rounded-lg ant-modal-content">
      {/* Header */}

      <div className="w-full items-start justify-between flex">
        <Text as="p" variant="modal-title" className="m-0">
          Change the primary field
        </Text>
        <button
          onClick={handleCancel}
          className="border-none size-5 flex items-center justify-center p-0 outline-none bg-transparent cursor-pointer"
        >
          <CloseIcon className="size-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Primary field
        </Text>
        <Select
          defaultValue="Field 1"
          popupClassName="!z-[10000] flex flex-col gap-3 primary-field-select"
          style={{ height: 36, borderRadius: 8 }}
          suffixIcon={<ArrowDown2 size={16} />}
          labelRender={(value) => (
            <Text as="span" variant="B2-Regular">
              {value.label}
            </Text>
          )}
          options={[
            { value: 'Field 1', label: 'Field 1' },
            { value: 'Field 2', label: 'Field 2' },
            { value: 'Field 3', label: 'Field 3' },
            { value: 'Field 4', label: 'Field 4', disabled: true },
          ]}
        />
      </div>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        {'Single select" is currently the primary field.'}
      </Text>
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
            Change primary field
          </Text>
        </button>
      </div>
    </div>
  );
};

export default ChangeThePrimaryFieldModal;
