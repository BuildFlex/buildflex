import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { AddSquare } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownItem from '../common/dropdown/DropdownItem';
import Text from '../typography/Text';

interface IUser {
  id: string;
  name: string;
  avatar: string;
}
const UserMultipleSelect = ({
  users,
  dropdownClassName,
  position = 'bottom',
  dropdownRender,
}: {
  users: IUser[];
  dropdownClassName?: string;
  position?: 'top' | 'bottom';
  dropdownRender?: React.ReactNode;
}) => {
  const [isShow, setIsShow] = React.useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser[]>([]);
  const onOpen = () => setIsShow(true);
  const onClose = () => setIsShow(false);
  const ref = useOutsideClick(onClose, true);

  const handleSelect = (user: IUser) => {
    setSelectedUser((prev) => {
      if (prev.find((item) => item.id === user.id)) {
        return prev.filter((item) => item.id !== user.id);
      }
      return [...prev, user];
    });
  };
  return (
    <div
      className="min-h-9 px-2 py-[5px] flex-wrap relative w-full box-border rounded flex items-center gap-2"
      style={{ border: '1px solid #EDEDED' }}
      ref={ref}
    >
      {selectedUser.map((user) => (
        <div
          className={cn(
            'flex gap-1 relative bg-gray-100 rounded-full  items-center  min-w-[90px] box-border h-[24px]',
            'bg-[#E0F2FE] text-theme-ocean-blue',
          )}
          style={{ border: '0.5px solid #087AAF' }}
        >
          <img
            style={{ border: '0.5px solid #087AAF', left: -1 }}
            src={user.avatar}
            alt={user.name}
            className=" relative h-[24px] w-auto aspect-square object-cover rounded-full"
          />
          <Text as="span" variant="sub-title-medium">
            {user.name}
          </Text>
        </div>
      ))}
      <button
        onClick={onOpen}
        className="border-none p-0 size-5 outline-none shadow-none bg-transparent rounded relative cursor-pointer"
      >
        <AddSquare
          className="relative z-[1]"
          size={20}
          color="#F2F4F7"
          variant="Bold"
        />
        <div className="absolute top-1/2 z-[0] left-1/2 -translate-x-1/2 -translate-y-1/2 transform size-3 bg-[#6A758B] " />
      </button>
      {isShow && (
        <div
          className={cn(
            'w-full p-3 box-border absolute flex flex-col gap-3 rounded-lg bottom-[120%] left-0 bg-white boxShadowSecondary',

            position === 'top' ? 'bottom-[120%]' : 'bottom-auto top-[120%]',
            dropdownClassName,
          )}
        >
          {dropdownRender}
          <div className="flex w-full flex-col gap-1">
            {users.map((item, index) => {
              const isSelected = selectedUser.find(
                (user) => user.id === item.id,
              );
              return (
                <DropdownItem
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={cn(' hover:bg-gray-50 cursor-pointer', {
                    'bg-gray-100 hover:bg-gray-100': isSelected,
                  })}
                >
                  <div
                    className={cn(
                      'flex gap-1 relative bg-gray-100 box-border rounded-full h-[24px]  items-center  min-w-[90px] ',
                      isSelected && 'bg-[#E0F2FE] text-theme-ocean-blue',
                    )}
                    style={isSelected ? { border: '0.5px solid #087AAF' } : {}}
                  >
                    <img
                      style={
                        isSelected
                          ? { border: '0.5px solid #087AAF', left: -1 }
                          : {}
                      }
                      src={item.avatar}
                      alt={item.name}
                      className=" relative h-[24px] w-auto max-h-[24px] max-w-[24px] aspect-square object-cover rounded-full"
                    />
                    <Text as="span" variant="sub-title-medium">
                      {item.name}
                    </Text>
                  </div>
                </DropdownItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMultipleSelect;
