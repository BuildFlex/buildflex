import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import { Add } from 'iconsax-react';
import React, { useState } from 'react';
import MainDropdown from './dropdown/main';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import LinkToAnotherRecordDropdown from './dropdown/link-to-another-record';
import SingleLineTextDropdown from './dropdown/single-line-text';
import LongTextDropdown from './dropdown/long-text';
import AttachmentDropdown from './dropdown/attachment';
import { CustomInput } from '@/components/input/Input';

const AddFields = () => {
  const [currentDropdown, setCurrentDropdown] = React.useState<null | IField>(
    null,
  );
  const [isAddDescription, setIsAddDescription] = useState<boolean>(false);
  const handleSetCurrentDropdown = (value: IField | null) =>
    setCurrentDropdown(value);
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setIsAddDescription(false);
      setCurrentDropdown(null);
    }
  };
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
      default:
        return <MainDropdown onChangeDropdown={handleSetCurrentDropdown} />;
    }
  };
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomRight"
      onOpenChange={handleOpenChange}
      className="flex items-center relative justify-center"
      overlayClassName={cn(' boxShadowSecondary w-[484px] !rounded-lg')}
      align={{ offset: [-20, 10] }}
      menu={[] as any}
      dropdownRender={(menu) => (
        <div className="p-3 flex flex-col gap-2">
          <CustomInput
            label="Field name"
            placeholder="Field name (optional)"
            className=" flex gap-2 !rounded !border-borderColor font-lato !text-neutral-dark-500 items-center "
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
            <button className="outline-none bg-transparent hover:bg-gray-50 border-none cursor-pointer px-5 py-2 box-border h-9 rounded-lg ml-auto">
              <Text as="span" variant="B2-Regular" className="h-[18px]">
                Cancel
              </Text>
            </button>
          </DropdownItem>
        </div>
      )}
    >
      <button className="w-full h-full border-none outline-none bg-transparent flex items-center justify-center cursor-pointer">
        <Add size={16} />
      </button>
    </Dropdown>
  );
};

export default AddFields;
