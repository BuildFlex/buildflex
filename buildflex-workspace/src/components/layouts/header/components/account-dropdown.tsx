import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { Dropdown } from 'antd';
import { Add, ArrowDown2, Building, Setting2, User } from 'iconsax-react';
import { useState } from 'react';
import CreateOrganization from './create-organization-modal';

const AccountItems = [
  { key: 'personal-account', icon: User, text: 'Personal Account' },
  { key: 'netko-solution', icon: Building, text: 'Netko Solution' },
];
const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Dropdown
        trigger={['click']}
        open={isOpen}
        onOpenChange={(open) => !isModalOpen && setIsOpen(open)}
        placement="bottomRight"
        className="flex items-center relative justify-center"
        dropdownRender={() => (
          <div className="flex gap-1 flex-col boxShadowSecondary p-3 overflow-hidden box-border rounded-lg w-[240px]">
            {AccountItems.map((item) => (
              <DropdownItem
                key={item.key}
                onClick={handleClose}
                className="flex cursor-pointer group hover:bg-gray-50 gap-2 items-center  text-neutral-dark-500"
              >
                <item.icon size={16} />
                <Text as="span" variant="B2-Regular">
                  {item.text}
                </Text>
                <Setting2
                  size={16}
                  className="hidden group-hover:block ml-auto"
                />
              </DropdownItem>
            ))}
            {/* <DropdownItem className="flex cursor-pointer group hover:bg-gray-50 gap-2 items-center  text-brand-PRIMARY">
            <Add size={16} />
            <Text as="span" variant="B2-Regular">
              Create organization
            </Text>
          </DropdownItem> */}
            <DropdownItem
              onClick={handleModalOpen}
              className="flex cursor-pointer group hover:bg-gray-50 gap-2 items-center  text-brand-PRIMARY"
            >
              <Add size={16} />
              <Text as="span" variant="B2-Regular">
                Create organization
              </Text>
            </DropdownItem>
          </div>
        )}
      >
        <div className="flex items-center gap-1 text-gray-100">
          <User size={12} />
          <Text as="span" variant="B2-Regular">
            Personal Account
          </Text>
          <ArrowDown2 variant="Bold" size={12} />
        </div>
      </Dropdown>
      <CreateOrganization
        handleCancel={handleModalClose}
        isOpen={isModalOpen}
      />
    </>
  );
};

export default AccountDropdown;
