import React, { useEffect, useState } from 'react';
import { SearchNormal1 } from 'iconsax-react';
import { Input, Tooltip } from 'antd';
import CreateContentPanel from './components/CreateContentPanel';
import ListContentItemsPanel from './components/ListContentItemsPanel';
import './sidebar.css';
import { CollapseIcon } from '../icons';
import { cn } from '@utils/cn';
import SearchDropdown from './components/dropdown/SearchDropdown';
export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === '\\') {
      setIsCollapsed((prevState) => !prevState);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <aside
      className={cn(
        'sidebar max-w-[260px]  flex flex-col box-border ',
        isCollapsed
          ? 'w-10 p-0 relative top-0 left-0 pr-10'
          : 'p-3 min-w-[260px] w-[260px] ',
      )}
      style={{ border: '1px solid #EDEDED' }}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className={cn('relative  ', isCollapsed ? 'hidden' : '')}>
          <Input
            placeholder="Search"
            prefix={<SearchNormal1 size={16} color={'#6A758B'} />}
            style={{
              padding: '0 8px',
              boxShadow: 'none',
              borderRadius: '4px',
            }}
            className="h-9 flex !text-neutral-dark-500 !cursor-default gap-2 items-center sidebar__search"
          />
        </div>
        <Tooltip
          placement="right"
          title={`${isCollapsed ? 'Show' : 'Close'} sidebar (Ctrl + \\)`}
        >
          <button
            className={cn(
              'flex border-none  items-center justify-center gap-1 text-white text-sm  bg-transparent cursor-pointer ',
              isCollapsed
                ? 'absolute top-0 right-1 size-9 boxShadowSecondary !rounded-l-none !rounded-r-xl'
                : 'p-0',
            )}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <CollapseIcon
              className={cn(isCollapsed ? 'rotate-180' : 'rotate-0')}
            />
          </button>
        </Tooltip>
      </div>

      <div className="flex flex-col overflow-hidden">
        <ListContentItemsPanel />

        {!isCollapsed && <CreateContentPanel />}
      </div>
    </aside>
  );
}
