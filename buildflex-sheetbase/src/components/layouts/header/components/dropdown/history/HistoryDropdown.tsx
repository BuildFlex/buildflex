import {
  MoreVert,
  RedoIcon,
  UndoIcon,
  UnorderedListIcon,
} from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { UnorderedListOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import {
  ArrowCircleLeft,
  ArrowRight2,
  Clock,
  Copy,
  InfoCircle,
  Slack,
  Trash,
} from 'iconsax-react';
import { useState } from 'react';
import SnapshotSubmenu from './SnapshotSubmenu';
import RecordRevisionHistorySubmenu from './RecordRevisionHistorySubmenu';
import DropdownItem from '@/components/common/dropdown/DropdownItem';

const HistoryDropdown = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleOpenSubMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: string,
  ) => {
    e.stopPropagation();
    setActiveItem(item);
  };
  const handleBackClick = () => setActiveItem(null);

  const historyItems: MenuProps['items'] = [
    {
      key: 'History',
      type: 'group',
      label: (
        <div className="items-center  font-lato px-2 py-[7px]   text-neutral-dark-500">
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            History
          </Text>
        </div>
      ),
    },
    {
      key: 'division',
      type: 'divider',
      className: '!bg-borderColor !my-2',
    },
    {
      key: 'undo',
      label: (
        <div className="flex gap-2  items-center text-neutral-dark-500">
          <UndoIcon />
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Undo
          </Text>
          <Text
            className="ml-auto text-neutral-dark-300"
            as="span"
            variant="sub-title"
          >
            CTRL + Z
          </Text>
        </div>
      ),
    },
    {
      key: 'redo',
      label: (
        <div className="flex gap-2 items-center text-neutral-dark-500">
          <RedoIcon />
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Redo
          </Text>
          <Text
            className="ml-auto text-neutral-dark-300"
            as="span"
            variant="sub-title"
          >
            CTRL + SHIFT + Z{' '}
          </Text>
        </div>
      ),
    },
    {
      key: 'snapshots',
      type: 'group',

      label: (
        <DropdownItem
          onClick={(e) => handleOpenSubMenu(e, 'snapshots')}
          className="flex gap-2 hover:bg-gray-50 items-center cursor-pointer h-10  text-neutral-dark-500"
        >
          <Clock size={16} />
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Snapshots
          </Text>
          <ArrowRight2 className="ml-auto" size={16} />
        </DropdownItem>
      ),
    },
    {
      key: 'record-revision-history',
      type: 'group',
      label: (
        <DropdownItem
          onClick={(e) => handleOpenSubMenu(e, 'record-revision-history')}
          className="flex gap-2 hover:bg-gray-50 items-center cursor-pointer h-10  text-neutral-dark-500"
        >
          <UnorderedListIcon />
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Record revision history{' '}
          </Text>
          <ArrowRight2 className="ml-auto" size={16} />
        </DropdownItem>
      ),
    },
    {
      key: 'trash',
      label: (
        <div className="flex gap-2 items-center text-neutral-dark-500">
          <Trash size={16} />
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Trash{' '}
          </Text>
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items: historyItems }}
      trigger={['click']}
      placement="bottomRight"
      className="flex items-center relative justify-center"
      overlayClassName=" boxShadowSecondary history-dropdown "
      align={{ offset: [0, 10] }}
      dropdownRender={(menu) => (
        <div
          className={cn(
            'dropdown-container flex',
            activeItem ? 'inside' : 'outside',
          )}
        >
          {menu}
          {/*====== SUB MENU ======== */}

          <div className={`submenu-content relative   text-neutral-dark-500 `}>
            <SnapshotSubmenu
              className={
                activeItem === 'snapshots'
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              }
              handleBackClick={handleBackClick}
            />
            <RecordRevisionHistorySubmenu
              className={
                activeItem === 'record-revision-history'
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              }
              handleBackClick={handleBackClick}
            />
          </div>
        </div>
      )}
    >
      <div className="clock size-9 flex justify-center items-center cursor-pointer ">
        <Clock size={16} color={'#FFFFFF'} />
      </div>
    </Dropdown>
  );
};

export default HistoryDropdown;
