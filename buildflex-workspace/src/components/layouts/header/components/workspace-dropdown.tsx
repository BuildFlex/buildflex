import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { Dropdown } from 'antd';
import { ArrowDown2, Setting2, Share, User } from 'iconsax-react';
import { useState } from 'react';

const WorkSpaceItems = [
  { key: 'my-workspace', icon: User, text: 'My Workspace' },
  { key: 'shared-workspace', icon: Share, text: 'Shared Workspace' },
];
const WorkSpaceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <Dropdown
      trigger={['click']}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      placement="bottomRight"
      className="flex items-center relative justify-center"
      dropdownRender={(menu) => (
        <div className="flex gap-1 flex-col boxShadowSecondary p-3 overflow-hidden box-border rounded-lg w-[240px]">
          {WorkSpaceItems.map((item) => (
            <DropdownItem
              key={item.key}
              onClick={handleClose}
              className="flex cursor-pointer group hover:bg-gray-50 gap-2 items-center  text-neutral-dark-500"
            >
              <item.icon size={16} />
              <Text as="span" variant="B2-Regular">
                {item.text}
              </Text>
            </DropdownItem>
          ))}
        </div>
      )}
    >
      <div className="flex items-center gap-1 text-gray-100">
        <Text as="span" variant="B2-Regular">
          My Workspace{' '}
        </Text>
        <ArrowDown2 variant="Bold" size={12} />
      </div>
    </Dropdown>
  );
};

export default WorkSpaceDropdown;
