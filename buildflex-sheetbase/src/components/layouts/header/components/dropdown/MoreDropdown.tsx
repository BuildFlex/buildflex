import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { MoreVert } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Dropdown } from 'antd';
import { Copy, Slack, Trash } from 'iconsax-react';
import { useCallback, useState } from 'react';

const MoreItems = [
  { key: 'duplicate-base', icon: Copy, text: 'Duplicate base' },
  { key: 'slack-notifications', icon: Slack, text: 'Slack notifications' },
  { key: 'delete-base', icon: Trash, text: 'Delete base' },
];
const MoreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <Dropdown
      trigger={['click']}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      placement="bottomRight"
      className="flex items-center relative justify-center"
      overlayClassName=" boxShadowSecondary rounded-lg "
      dropdownRender={() => (
        <div className="flex gap-1 flex-col p-3 overflow-hidden box-border rounded-lg w-[299px]">
          {MoreItems.map((item) => (
            <DropdownItem
              key={item.key}
              onClick={handleClose}
              className="flex cursor-pointer hover:bg-gray-50 gap-2 items-center  text-neutral-dark-500"
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
      <div onClick={() => setIsOpen(true)}>
        <MoreVert className="size-4 px-2 cursor-pointer text-neutral-dark-500" />
      </div>
    </Dropdown>
  );
};

export default MoreDropdown;
