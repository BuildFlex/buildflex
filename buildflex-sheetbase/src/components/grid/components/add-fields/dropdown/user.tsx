import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Select from '@/components/select/select';
import TagSelect from '@/components/select/tag-select';
import UserSelect from '@/components/select/user-select';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { Switch } from 'antd';
import { ArrowDown2, People } from 'iconsax-react';
import React, { useId, useState } from 'react';

interface UserDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}
interface IOption {
  id: string;
  label: string;
}
const optionList = [
  {
    id: 'user-1',
    name: 'User 1',
    avatar: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
  },
  {
    id: 'user-2',
    name: 'User 2',
    avatar: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
  },
  {
    id: 'user-3',
    name: 'User 3',
    avatar: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
  },
];
const UserDropdown: React.FC<UserDropdownProps> = ({ onChangeDropdown }) => {
  const [isMulti, setIsMulti] = useState(true);

  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <People size={16} />
        <Text as="span" variant="B2-Regular">
          User
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Add a sheetbase user to a record.
      </Text>

      <div className="flex flex-col">
        <div className="flex h-8 items-center gap-2">
          <Switch
            checked={isMulti}
            onChange={setIsMulti}
            className="w-8"
            size="small"
          />
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Allow adding multiple users
          </Text>
        </div>
        <div className="flex h-8 items-center gap-2">
          <Switch className="w-8" size="small" />
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Notify users with base access when they're added
          </Text>
        </div>
      </div>
      <div className="h-[1px] min-h-[1px] w-full bg-borderColor " />

      <div className="flex flex-col gap-2 mt-1 text-neutral-dark-300">
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          Default options
        </Text>
        {isMulti ? (
          <TagSelect />
        ) : (
          <UserSelect
            position="top"
            dropdownRender={
              <DropdownItem onClick={(e) => e.stopPropagation()}>
                <Text
                  as="span"
                  variant="B2-Regular"
                  className="text-neutral-dark-300"
                >
                  Find...
                </Text>
              </DropdownItem>
            }
            itemsList={optionList}
          />
        )}
      </div>
    </>
  );
};

export default UserDropdown;
