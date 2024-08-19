import React, { ElementType, useState } from 'react';
import { ArrowDown2, Call, Element4, Link } from 'iconsax-react';
import Text from '@/components/typography/Text';

import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { CursorDefaultIcon } from '@/components/icons';
import Select from '@/components/select/select';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CustomInput } from '@/components/input/Input';
import ButtonStyleSelect, {
  IButtonStyle,
} from '@/components/select/button-style-select';
import CustomSelect from '@/components/select/custom-select';

interface ButtonDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const ButtonDropdown: React.FC<ButtonDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [action, setAction] = useState<string>('open-url');
  const [buttonStyle, setButtonStyle] = useState<IButtonStyle>(
    ButtonStyleList[0],
  );
  const renderAction = () => {
    switch (action) {
      case 'open-url':
        return (
          <div className="flex flex-col w-full gap-2 mt-1">
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              URL formula
            </Text>
            <CustomInput defaultValue={''} />
          </div>
        );
      case 'open-in-page-designer':
        return (
          <DropdownItem className="justify-center">
            <Text as="span" variant="B2-Regular">
              To use this action,{' '}
              <Text
                as="span"
                className="text-theme-ocean-blue cursor-pointer"
                variant="B2-Regular"
              >
                install a page designer extension.
              </Text>
            </Text>
          </DropdownItem>
        );

      default:
        return null;
    }
  };
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <CursorDefaultIcon size={16} />
        <Text as="span" variant="B2-Regular">
          Button
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Trigger a customized action.
      </Text>

      <div className="flex  gap-3 mt-1">
        <div className="flex flex-col  w-full gap-2">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Label
          </Text>
          <CustomInput defaultValue={'Button'} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Style
          </Text>
          <ButtonStyleSelect
            selected={buttonStyle}
            onSelect={setButtonStyle}
            itemsList={ButtonStyleList}
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-2 mt-1">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Action
        </Text>
        <CustomSelect
          onChange={(value) => setAction(value.value)}
          dropdownClassName="max-h-[130px] overflow-auto customScrollBar"
          initialValue={actionsList[0]}
          itemsList={actionsList}
        />
      </div>
      {renderAction()}
    </>
  );
};

export default ButtonDropdown;

const actionsList = [
  { label: 'Open URL', value: 'open-url', prefix: Link },
  {
    label: 'Open in page designer',
    value: 'open-in-page-designer',
    prefix: Element4,
  },
  { label: 'Run script', value: 'run-script', prefix: Element4 },
  { label: 'Preview URL', value: 'preview-uRL', prefix: Element4 },
  {
    label: 'Send email with SendGrid',
    value: 'send-email-with-sendgrid',
    prefix: Element4,
  },
  {
    label: 'Send SMS with Twilio',
    value: 'send-sms-with-twilio',
    prefix: Element4,
  },
  {
    label: 'Create document with Formstack',
    value: 'create-document-with-formstack',
    prefix: Element4,
  },
  {
    label: 'Attach stock photos with Pexels',
    value: 'attach-stock-photos-with-pexels',
    prefix: Element4,
  },
  {
    label: 'Open custom extension',
    value: 'open-custom-extension',
    prefix: Element4,
  },
];

const ButtonStyleList = [
  {
    id: 'blue-text',
    name: 'Blue text',
    background: 'transparent',
    color: '#166EE1',
  },
  {
    id: 'cyan-text',
    name: 'Cyan text',
    background: 'transparent',
    color: '#3ECBFF',
  },
  {
    id: 'green-text',
    name: 'Green text',
    background: 'transparent',
    color: '#048A0E',
  },
  {
    id: 'yellow-text',
    name: 'Yellow text',
    background: 'transparent',
    color: '#FFBA05',
  },
  {
    id: 'brown-text',
    name: 'Brown text',
    background: 'transparent',
    color: '#D54401',
  },
  {
    id: 'red-text',
    name: 'Red text',
    background: 'transparent',
    color: '#DC043B',
  },
  {
    id: 'pink-text',
    name: 'Pink text',
    background: 'transparent',
    color: '#DD04A8',
  },
  {
    id: 'purple-text',
    name: 'Purple text',
    background: 'transparent',
    color: '#7C37EF',
  },
  {
    id: 'gray-text',
    name: 'Gray text',
    background: 'transparent',
    color: '#616670',
  },
  // ==========
  {
    id: 'light-blue',
    name: 'Light Blue',
    background: '#D1E2FF',
    color: '#000000',
  },
  {
    id: 'light-cyan',
    name: 'Light Cyan',
    background: '#C4ECFF',
    color: '#000000',
  },
  {
    id: 'light-green',
    name: 'Light Green',
    background: '#CFF5D1',
    color: '#000000',
  },
  {
    id: 'light-yellow',
    name: 'Light Yellow',
    background: '#FFEAB6',
    color: '#000000',
  },
  {
    id: 'light-brown',
    name: 'Light Brown',
    background: '#FFE0CC',
    color: '#000000',
  },
  {
    id: 'light-red',
    name: 'Light Red',
    background: '#FFD4E0',
    color: '#000000',
  },
  {
    id: 'light-pink',
    name: 'Light Pink',
    background: '#FAD2FC',
    color: '#000000',
  },
  {
    id: 'light-purple',
    name: 'Light Purple',
    background: '#E0DAFD',
    color: '#000000',
  },
  {
    id: 'light-gray',
    name: 'Light Gray',
    background: '#E5E9F0',
    color: '#000000',
  },
  // ==========
  {
    id: 'solid-blue',
    name: 'Solid Blue',
    background: '#166EE1',
    color: '#ffffff',
  },
  {
    id: 'solid-cyan',
    name: 'Solid Cyan',
    background: '#3ECBFF',
    color: '#ffffff',
  },
  {
    id: 'solid-green',
    name: 'Solid Green',
    background: '#048A0E',
    color: '#ffffff',
  },
  {
    id: 'solid-yellow',
    name: 'Solid Yellow',
    background: '#FFBA05',
    color: '#ffffff',
  },
  {
    id: 'solid-brown',
    name: 'Solid Brown',
    background: '#D54401',
    color: '#ffffff',
  },
  {
    id: 'solid-red',
    name: 'Solid Red',
    background: '#DC043B',
    color: '#ffffff',
  },
  {
    id: 'solid-pink',
    name: 'Solid Pink',
    background: '#DD04A8',
    color: '#ffffff',
  },
  {
    id: 'solid-purple',
    name: 'Solid Purple',
    background: '#7C37EF',
    color: '#ffffff',
  },
  {
    id: 'solid-gray',
    name: 'Solid Gray',
    background: '#616670',
    color: '#ffffff',
  },
];
