import React from 'react';
import { ArrowDown2, Link, Sms } from 'iconsax-react';
import Text from '@/components/typography/Text';

import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';

interface EmailDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const EmailDropdown: React.FC<EmailDropdownProps> = ({ onChangeDropdown }) => {
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer mr-1"
      >
        <Sms size={16} />
        <Text as="span" variant="B2-Regular">
          Email
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Enter an email address (e.g. andrew@example.com).
      </Text>
    </>
  );
};

export default EmailDropdown;
