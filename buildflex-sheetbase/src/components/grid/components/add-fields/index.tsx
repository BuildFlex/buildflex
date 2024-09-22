import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import { Add } from 'iconsax-react';
import React, { useState } from 'react';
import AttachmentDropdown from './dropdown/attachment';
import AutoNumberDropdown from './dropdown/autonumber';
import BarCodeDropdown from './dropdown/barcode';
import ButtonDropdown from './dropdown/button';
import CheckboxDropdown from './dropdown/checkbox';
import { CountDropdown } from './dropdown/count';
import CreatedByDropdown from './dropdown/created-by';
import CreatedTimeDropdown from './dropdown/created-time';
import CurrencyDropdown from './dropdown/currency';
import DateDropdown from './dropdown/date';
import DurationDropdown from './dropdown/duration';
import EmailDropdown from './dropdown/email';
import { FormulaDropdown } from './dropdown/formula';
import { LastModiFiedByDropdown } from './dropdown/last-modified-by';
import { LastModiFiedTimeDropdown } from './dropdown/last-modified-time';
import LinkToAnotherRecordDropdown from './dropdown/link-to-another-record';
import LongTextDropdown from './dropdown/long-text';
import { LookUpDropdown } from './dropdown/look-up';
import MainDropdown from './dropdown/main';
import MultipleSelectDropdown from './dropdown/multiple-select';
import NumberDropdown from './dropdown/number';
import PercentDropdown from './dropdown/percent/percent';
import PhoneDropdown from './dropdown/phone';
import RatingDropdown from './dropdown/rating';
import { RollUpDropdown } from './dropdown/roll-up';
import SingleLineTextDropdown from './dropdown/single-line-text';
import SingleSelectDropdown from './dropdown/single-select';
import URLDropdown from './dropdown/url';
import UserDropdown from './dropdown/user';

const AddFields = () => {
  const [currentDropdown, setCurrentDropdown] = React.useState<null | IField>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const [isAddDescription, setIsAddDescription] = useState<boolean>(false);
  const handleSetCurrentDropdown = (value: IField | null) => {
    setCurrentDropdown(value);
  };
  const handleModalOpen = (isOpen: boolean) => setIsModalOpen(isOpen);
  const handleOpenChange = (open: boolean) => {
    if (!open && !isModalOpen) {
      setIsAddDescription(false);
      setCurrentDropdown(null);
      setDropdownOpen(false);
    }
  };
  const notScrollDropdown = ['checkbox', 'rating', 'button'];
  const renderDropdown = () => {
    if (!currentDropdown)
      return <MainDropdown onChangeDropdown={handleSetCurrentDropdown} />;
    switch (currentDropdown.id) {
      case 'link-to-another-record':
        return (
          <LinkToAnotherRecordDropdown
            onChangeDropdown={handleSetCurrentDropdown}
          />
        );
      case 'single-line':
        return (
          <SingleLineTextDropdown onChangeDropdown={handleSetCurrentDropdown} />
        );
      case 'long-text':
        return <LongTextDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'attachment':
        return (
          <AttachmentDropdown onChangeDropdown={handleSetCurrentDropdown} />
        );
      case 'checkbox':
        return <CheckboxDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'multiple-select':
        return (
          <MultipleSelectDropdown onChangeDropdown={handleSetCurrentDropdown} />
        );
      case 'single-select':
        return (
          <SingleSelectDropdown onChangeDropdown={handleSetCurrentDropdown} />
        );
      case 'url':
        return <URLDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'email':
        return <EmailDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'phone':
        return <PhoneDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'date':
        return <DateDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'user':
        return <UserDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'number':
        return <NumberDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'currency':
        return <CurrencyDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'duration':
        return <DurationDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'rating':
        return <RatingDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'created-time':
        return (
          <CreatedTimeDropdown onChangeDropdown={handleSetCurrentDropdown} />
        );
      case 'created-by':
        return (
          <CreatedByDropdown onChangeDropdown={handleSetCurrentDropdown} />
        );
      case 'autonumber':
        return (
          <AutoNumberDropdown onChangeDropdown={handleSetCurrentDropdown} />
        );
      case 'barcode':
        return <BarCodeDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'button':
        return <ButtonDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'modified-by':
        return (
          <LastModiFiedByDropdown
            handleModalOpen={handleModalOpen}
            onChangeDropdown={handleSetCurrentDropdown}
          />
        );
      case 'modified-time':
        return (
          <LastModiFiedTimeDropdown
            handleModalOpen={handleModalOpen}
            onChangeDropdown={handleSetCurrentDropdown}
          />
        );
      case 'formula':
        return <FormulaDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'rollup':
        return <RollUpDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'count':
        return <CountDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'lookup':
        return <LookUpDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      case 'percent':
        return <PercentDropdown onChangeDropdown={handleSetCurrentDropdown} />;
      default:
        return <MainDropdown onChangeDropdown={handleSetCurrentDropdown} />;
    }
  };
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomRight"
      open={isDropdownOpen}
      onOpenChange={handleOpenChange}
      className="flex items-center relative justify-center"
      overlayClassName={cn(
        ' boxShadowSecondary w-auto  !min-w-[484px] !rounded-lg',
      )}
      align={{ offset: [-20, 10] }}
      dropdownRender={() => (
        <div
          className={cn(
            'p-3 flex flex-col gap-2',
            !notScrollDropdown.includes(currentDropdown?.id ?? '') &&
              'customScrollBar max-h-[370px] overflow-y-auto',
          )}
        >
          <CustomInput
            label="Field name"
            placeholder="Field name (optional)"
            className=" flex gap-2  h-9 min-h-9 !rounded !border-borderColor font-lato !text-neutral-dark-500 items-center "
          />
          {renderDropdown()}
          {isAddDescription && (
            <DropdownItem className="h-fit flex-col gap-1 mt-1 p-0 text-neutral-dark-300 items-start">
              <Text as="span" variant="B2-Regular" className="h-[18px]">
                Name for the new table
              </Text>
              <CustomInput
                placeholder="Describe this field (optional)"
                className="h-9  rounded border-borderColor font-lato  text-neutral-dark-500  "
              />
            </DropdownItem>
          )}
          <DropdownItem className="h-9 px-0 mt-1">
            {!isAddDescription && (
              <button
                onClick={() => setIsAddDescription(true)}
                className="flex items-center gap-2  outline-none bg-transparent  border-none cursor-pointer px-0 m-0 py-2 box-border h-9 rounded-lg"
              >
                <Add size={16} />
                <Text as="span" variant="B2-Regular" className="h-[18px]">
                  Add description
                </Text>
              </button>
            )}
            <button
              onClick={() => setDropdownOpen(false)}
              className="outline-none bg-transparent hover:bg-gray-50 border-none cursor-pointer px-5 py-2 box-border h-9 rounded-lg ml-auto"
            >
              <Text as="span" variant="B2-Regular" className="h-[18px]">
                Cancel
              </Text>
            </button>
            {currentDropdown && (
              <button
                onClick={() => setDropdownOpen(false)}
                className="h-9 px-4 py-[6px] text-white bg-theme-ocean-blue w-fit outline-none  cursor-pointer border-none shadow-none box-border rounded-lg"
              >
                <Text as="span" variant="B2-Medium">
                  Create field
                </Text>
              </button>
            )}
          </DropdownItem>
        </div>
      )}
    >
      <button
        onClick={() => setDropdownOpen(true)}
        className="w-full h-full border-none outline-none bg-transparent flex items-center justify-center cursor-pointer"
      >
        <Add size={16} />
      </button>
    </Dropdown>
  );
};

export default AddFields;
