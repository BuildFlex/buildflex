import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import { ColorTab } from '../../components/dropdown-render/ColorDropdownRender';
import { IField } from '../../components/dropdown-render/GroupDropdownRender';
import { fields as initialFields } from '../../components/dropdown-render/HideFieldDropdownRender';
import { SortByLabel } from '../sort/SortConditionRow';
import SortSelect from '../sort/SortSelect';
import ColorSelector from './color-selector';
import FindColorField from './find-color-field';
const ColorSelectFieldTab = ({
  className,
  setActiveTab,
}: {
  className?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<ColorTab | null>>;
}) => {
  const [field, setField] = useState<IField>(initialFields[0]);
  const handleSelect = (f: IField) => {
    setField(f);
  };

  return (
    <div
      className={cn(
        'share-main-tab duration-500 transition-transform flex flex-col gap-3 min-w-[280px] p-3 box-border',
        className,
      )}
    >
      {/*   Header */}
      <div className="flex flex-col gap-1">
        <DropdownItem className="px-0 text-neutral-dark-500">
          <div className="flex items-center gap-2 w-[217px]">
            <button
              className="border-none cursor-pointer p-0 size-4 bg-transparent shadow-none outline-none"
              onClick={() => setActiveTab(null)}
            >
              <CloseIcon color="currentColor" />
            </button>
            <Text as="span" variant="B2-Regular" className="h-[18px]">
              Coloring records the same as
            </Text>
          </div>
          <SortSelect
            dropdownRender={() => (
              <FindColorField
                field={initialFields}
                onSelectField={handleSelect}
                className="max-h-[300px]"
                searchPlaceholder="Find a field"
              />
            )}
            itemsList={initialFields.map((item) => ({
              label: <SortByLabel label={item.label} Icon={item.icon} />,
              value: item.label,
            }))}
            initialValue={{
              label: <SortByLabel label={field.label} Icon={field.icon} />,
              value: field.label,
            }}
            className="color-field-select h-8 w-auto"
          />
        </DropdownItem>
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Color records the same as a single select field
        </Text>
      </div>
      {/* Conditions */}
      <div className="flex flex-col gap-1">
        <DropdownItem className="text-neutral-dark-500 px-0 cursor-pointer">
          <ColorSelector
            initialValue={{ background: '#FB8C00', color: 'white' }}
            name="Name"
          />
          <Text as="span" variant="B2-Regular">
            Name
          </Text>
        </DropdownItem>
        <DropdownItem className="text-neutral-dark-500 px-0 cursor-pointer">
          <ColorSelector
            initialValue={{ background: '#00897B', color: 'white' }}
            name="Name"
          />
          <Text as="span" variant="B2-Regular">
            Name
          </Text>
        </DropdownItem>
        <DropdownItem className="text-neutral-dark-500 px-0 cursor-pointer">
          <ColorSelector
            initialValue={{ background: '#8E24AA', color: 'white' }}
            name="Name"
          />
          <Text as="span" variant="B2-Regular">
            Name
          </Text>
        </DropdownItem>
      </div>
    </div>
  );
};

export default ColorSelectFieldTab;
