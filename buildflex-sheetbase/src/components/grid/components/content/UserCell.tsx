import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import { Add, ArrowDown2 } from 'iconsax-react';
import React from 'react';
const UserAddDropdown = ({
  users,
  setOpen,
  open,
}: {
  users: {
    name: string;
    avatar: string;
    email: string;
  }[];
  open: boolean;
  setOpen: (value: boolean) => void;
  children?: React.ReactNode;
}) => {
  return (
    <Dropdown
      trigger={['click']}
      open={open}
      onOpenChange={setOpen}
      placement="bottomRight"
      dropdownRender={() => (
        <div className="flex gap-1 flex-col p-2 box-border rounded-lg w-[240px]">
          <DropdownItem>
            <Text
              variant="B2-Regular"
              as="span"
              className="text-neutral-dark-300"
            >
              Find a user by name or email
            </Text>
          </DropdownItem>
          {users.map((user) => (
            <DropdownItem
              key={user.email}
              onClick={() => setOpen(false)}
              className="hover:bg-gray-50 cursor-pointer h-auto"
            >
              <div className="flex gap-2 rounded-full items-center pr-2 box-border min-w-[90px] h-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex flex-col gap-0.5 h-[31px] justify-between ">
                  <Text as="span" variant="sub-title-medium">
                    {user.name}
                  </Text>
                  <span className="leading-[13px] text-[10px] font-lato text-neutral-dark-400">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownItem>
          ))}

          <DropdownItem className="text-neutral-dark-500 cursor-pointer">
            <Add size={16} />
            <Text variant="B2-Regular" as="span">
              Add users by email
            </Text>
          </DropdownItem>
        </div>
      )}
      className=""
      overlayClassName="project-name-dropdown rounded-lg boxShadowSecondary"
    >
      <ArrowDown2 size={20} className="text-neutral-dark-500 ml-auto  " />
    </Dropdown>
  );
};

interface UserCellProps {
  user: {
    name: string;
    avatar: string;
    email: string;
  };
}
const UserCell = ({ user }: UserCellProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const ref = useOutsideClick(() => {
    !isDropdownOpen && setIsFocus(false);
  });
  const handleDropdownVisible = (isOpen: boolean) => setIsDropdownOpen(isOpen);
  return (
    <div
      onClick={() => setIsFocus(true)}
      ref={ref}
      className={cn(
        'max-w-[164px] flex overflow-x-hidden customScrollBar items-center gap-1 h-full w-full ',
        isFocus &&
          'after:content-[""] overflow-x-auto after:pointer-events-none after:absolute after:h-[calc(100%+2px)] after:w-[calc(100%+2px)] after:z-[2] after:-top-[1px] after:-left-[1px] after:border-theme-ocean-blue after:border-solid after:border',
      )}
    >
      <div className="flex gap-1 bg-gray-100 rounded-full items-center pr-2 box-border min-w-[90px] h-6">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <Text as="span" variant="sub-title-medium">
          {user.name}
        </Text>
      </div>
      {isFocus && (
        <>
          <UserAddDropdown
            setOpen={handleDropdownVisible}
            open={isDropdownOpen}
            users={[user]}
          />
          <div
            className={cn(
              'absolute  bg-white z-[11] size-[10px] rounded-sm',
              ' -bottom-[4px] -right-[4px] ',
            )}
            style={{ border: '1px solid #087AAF' }}
          />
        </>
      )}
    </div>
  );
};

export default UserCell;
