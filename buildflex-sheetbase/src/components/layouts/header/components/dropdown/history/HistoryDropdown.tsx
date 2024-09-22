import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { RedoIcon, UndoIcon, UnorderedListIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Divider, Dropdown } from 'antd';
import { ArrowRight2, Clock, Trash } from 'iconsax-react';
import { useState } from 'react';
import RecordRevisionHistorySubmenu from './RecordRevisionHistorySubmenu';
import SnapshotSubmenu from './SnapshotSubmenu';

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

  return (
    <Dropdown
      trigger={['click']}
      placement="bottomRight"
      className="flex items-center relative justify-center"
      overlayClassName=" boxShadowSecondary rounded-lg "
      align={{ offset: [0, 10] }}
      dropdownRender={() => (
        <div
          className={cn(
            'history-dropdown-container overflow-hidden max-w-[289px] w-[289px] box-border flex  p-3',
            activeItem ? 'inside' : 'outside',
          )}
        >
          <div className="flex-col min-w-[265px] box-border main-menu-content gap-3 flex">
            <DropdownItem className="items-center h-8 rounded  px-2 py-[7px]   text-neutral-dark-500">
              <Text as="span" variant="B2-Regular" className="h-[18px]">
                History
              </Text>
            </DropdownItem>
            <Divider className="bg-borderColor !my-0" />
            <div className="flex flex-col gap-1">
              <DropdownItem className="h-10 rounded cursor-pointer hover:bg-gray-50">
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
              </DropdownItem>
              <DropdownItem className="h-10 cursor-pointer rounded hover:bg-gray-50">
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
              </DropdownItem>
              <DropdownItem
                onClick={(e) => handleOpenSubMenu(e, 'snapshots')}
                className="h-10 rounded cursor-pointer hover:bg-gray-50"
              >
                <Clock size={16} />
                <Text as="span" variant="B2-Regular" className="h-[18px]">
                  Snapshots
                </Text>
                <ArrowRight2 className="ml-auto" size={16} />
              </DropdownItem>

              <DropdownItem
                onClick={(e) => handleOpenSubMenu(e, 'record-revision-history')}
                className="h-10 cursor-pointer rounded hover:bg-gray-50"
              >
                <UnorderedListIcon />
                <Text as="span" variant="B2-Regular" className="h-[18px]">
                  Record revision history{' '}
                </Text>
                <ArrowRight2 className="ml-auto" size={16} />
              </DropdownItem>
              <DropdownItem className="h-10 cursor-pointer rounded hover:bg-gray-50">
                <Trash size={16} />
                <Text as="span" variant="B2-Regular" className="h-[18px]">
                  Trash{' '}
                </Text>
              </DropdownItem>
            </div>
          </div>
          {/*====== SUB MENU ======== */}

          <div
            className={
              'submenu-content  relative   min-w-[265px] w-full box-border text-neutral-dark-500 '
            }
          >
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
