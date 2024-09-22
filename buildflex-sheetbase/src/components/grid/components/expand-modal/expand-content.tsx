import Text from '@/components/typography/Text';
import { Add } from 'iconsax-react';
import ExpandAttachment from './content/attachment';
import ExpandAutoNumber from './content/auto-number';
import ExpandBarcode from './content/barcode';
import ExpandButton from './content/button';
import ExpandCheckbox from './content/checkbox';
import ExpandCreated from './content/created';
import ExpandCreatedBy from './content/created-by';
import ExpandCurrency from './content/currency';
import ExpandDate from './content/date';
import ExpandEmail from './content/email';
import ExpandFormula from './content/formula';
import ExpandLastModified from './content/last-modified';
import ExpandLastModifiedBy from './content/last-modified-by';
import ExpandLinkToAnotherRecord from './content/link-to-another-record';
import ExpandMultipleSelect from './content/multiple-select';
import ExpandName from './content/name';
import ExpandNote from './content/note';
import ExpandNumber from './content/number';
import ExpandPercent from './content/percent';
import ExpandPhoneNumber from './content/phone-number';
import ExpandRating from './content/rating';
import ExpandSingleSelect from './content/single-select';
import ExpandURL from './content/url';
import ExpandUser from './content/user';

const ExpandContent = () => {
  return (
    <div className="py-6 px-20 max-h-[calc(90svh-43px)] overflow-auto customScrollBar  text-neutral-dark-500 flex flex-col gap-4 box-border w-[800px] min-w-[800px]">
      {/* Name */}
      <ExpandName />
      {/* Info */}
      <div className="flex flex-col gap-4 ">
        <ExpandNote />
        <ExpandAttachment />
        <ExpandCheckbox />
        <ExpandMultipleSelect />
        <ExpandSingleSelect />
        <ExpandDate />
        <ExpandUser />
        <ExpandPhoneNumber />
        <ExpandEmail />
        <ExpandURL />
        <ExpandNumber />
        <ExpandCurrency />
        <ExpandPercent />
        <ExpandRating />
        <ExpandFormula />
        <ExpandCreated />
        <ExpandLastModified />
        <ExpandCreatedBy />
        <ExpandLastModifiedBy />
        <ExpandAutoNumber />
        <ExpandBarcode />
        <ExpandButton />
        <ExpandLinkToAnotherRecord />
        <button className="h-9 px-0 gap-2 cursor-pointer text-neutral-dark-500 flex items-center bg-transparent border-none  box-border ">
          <Add size={16} />
          <Text as="span" variant="B2-Regular">
            Add new field to this table
          </Text>
        </button>
      </div>
    </div>
  );
};

export default ExpandContent;
