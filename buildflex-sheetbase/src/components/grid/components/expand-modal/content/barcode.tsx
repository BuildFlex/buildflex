import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { Barcode } from 'iconsax-react';

const ExpandBarcode = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Barcode  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <Barcode size={16} />
        <Text as="span" variant="B2-Regular">
          Barcode
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <CustomInput defaultValue={'ABC-CDE-123'} className="rounded-lg " />
      </div>
    </div>
  );
};

export default ExpandBarcode;
