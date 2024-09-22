import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';

const EditFieldDescriptionModal = ({
  handleCancel,
}: {
  handleCancel: () => void;
}) => {
  return (
    <div className="w-[350px] flex flex-col gap-3 overflow-hidden !p-3 box-border bg-white rounded-lg ant-modal-content">
      {/* Content */}
      <CustomInput placeholder="Describe this field" className="h-9  " />
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
            Save description
          </Text>
        </button>
      </div>
    </div>
  );
};

export default EditFieldDescriptionModal;
