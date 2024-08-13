import Text from '@/components/typography/Text';
import { Checkbox, Input, Select } from 'antd';
import { ArrowDown2 } from 'iconsax-react';
import React from 'react';

const EmailInvited = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Input className="h-9 !rounded-lg" placeholder="Invited Email" />
        <Select
          defaultValue="Creater"
          popupClassName="!z-[10000] email-invited-select"
          style={{ width: 160, minWidth: 160, height: 36, borderRadius: 8 }}
          suffixIcon={<ArrowDown2 size={16} />}
          labelRender={(value) => (
            <Text as="span" variant="B2-Regular">
              {value.label}
            </Text>
          )}
          options={[
            { value: 'Creater', label: 'Creater' },
            { value: 'Admin', label: 'Admin' },
            { value: 'User1', label: 'User1' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
      <div className="flex gap-2 items-center">
        {' '}
        <Input
          className="h-9 !rounded-lg"
          placeholder="Add a message...(recommended)"
        />
        <button className="rounded-lg hover:text-neutral-dark-500 border-none  cursor-pointer px-4 py-[6px] h-9 min-w-[160px] w-[160px] box-border bg-gray-100 text-neutral-dark-300">
          <Text as="span" variant="B2-Regular">
            Invited
          </Text>
        </button>
      </div>
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <Checkbox id="invite-to-my-workspace" />
        <label
          htmlFor="invite-to-my-workspace"
          className="text-neutral-dark-500 cursor-pointer"
        >
          <Text as="span" variant="B2-Regular">
            Invite to My First Workspace workspace{' '}
          </Text>
        </label>
      </div>
    </div>
  );
};

export default EmailInvited;
