import Text from '@/components/typography/Text';
import {
  Add,
  DocumentText,
  Paperclip2,
  TextalignJustifycenter,
  Text as TextIcon,
} from 'iconsax-react';
import React from 'react';
import ExpandName from './content/name';
import ExpandNote from './content/note';
import ExpandAttachment from './content/attachment';
import ExpandCheckbox from './content/checkbox';
import ExpandMultipleSelect from './content/multiple-select';
import ExpandSingleSelect from './content/single-select';
import ExpandUser from './content/user';
import ExpandPhoneNumber from './content/phone-number';
import ExpandEmail from './content/email';
import ExpandURL from './content/url';
import ExpandNumber from './content/number';
import ExpandCurrency from './content/currency';
import ExpandPercent from './content/percent';
import ExpandRating from './content/rating';
import ExpandFormula from './content/formula';
import ExpandCreated from './content/created';
import ExpandLastModified from './content/last-modified';
import ExpandCreatedBy from './content/created-by';
import ExpandLastModifiedBy from './content/last-modified-by';
import ExpandAutoNumber from './content/auto-number';
import ExpandBarcode from './content/barcode';
import ExpandButton from './content/button';
import ExpandLinkToAnotherRecord from './content/link-to-another-record';
import ExpandDate from './content/date';

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
