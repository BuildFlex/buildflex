import Text from '@/components/typography/Text';
import { Checkbox } from 'antd';
import React from 'react';
interface UserCellProps {
  user: {
    name: string;
    avatar: string;
  };
}
const UserCell = ({ user }: UserCellProps) => {
  return (
    <div className="max-w-[164px] w-full flex justify-start items-center  ">
      <div className="flex gap-1 bg-gray-100 rounded-full items-center pr-2 box-border min-w-[90px] h-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-6 h-6 rounded-full"
        />
        <Text as="span" variant="sub-title-medium">
          {user.name}
        </Text>
      </div>
    </div>
  );
};

export default UserCell;
