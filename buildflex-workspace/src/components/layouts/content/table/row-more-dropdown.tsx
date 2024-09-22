import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { MoreIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import {
  DocumentCopy,
  Edit2,
  Export,
  Eye,
  FolderAdd,
  Trash,
} from 'iconsax-react';
import { useState } from 'react';

const RowMoreItems = [
  { icon: Eye, text: 'View access list', key: 'view-access-list' },
  { icon: Edit2, text: 'Rename', key: 'rename' },
  { icon: DocumentCopy, text: 'Duplicate', key: 'duplicate' },
  { icon: FolderAdd, text: 'Move to category', key: 'move-to-category' },
  { key: 'divider' },
  { icon: Export, text: 'Export to JSON', key: 'export-to-json' },
  {
    icon: Export,
    text: 'Export to Toolscript ZIP',
    key: 'export-to-toolscript-zip',
  },
  { key: 'divider' },
  {
    icon: Trash,
    text: 'Move to Trash',
    key: 'move-to-trash',
    className: 'text-danger-400',
  },
];
const RowMoreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <Dropdown
      trigger={['click']}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      placement="bottomRight"
      className="flex items-center relative justify-center"
      dropdownRender={() => (
        <div className="flex gap-1 flex-col boxShadowSecondary p-3 overflow-hidden box-border rounded-lg w-[240px]">
          {RowMoreItems.map((item) =>
            item.key === 'divider' ? (
              <div
                key={`divider-${item.key}`}
                className="w-full h-[1px] bg-borderColor my-2"
              />
            ) : (
              <DropdownItem
                key={item.key}
                onClick={handleClose}
                className={cn(
                  'flex cursor-pointer group hover:bg-gray-50 gap-2 items-center  text-neutral-dark-500',
                  item.className,
                )}
              >
                {item.icon && <item.icon size={16} />}
                <Text as="span" variant="B2-Regular">
                  {item.text}
                </Text>
              </DropdownItem>
            ),
          )}
        </div>
      )}
    >
      <button className="flex border-none justify-center size-8 bg-transparent gap-2 items-center text-neutral-dark-500">
        <MoreIcon />
      </button>
    </Dropdown>
  );
};

export default RowMoreDropdown;
