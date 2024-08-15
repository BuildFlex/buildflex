import React, { useEffect, useState } from 'react';
import { SearchNormal1 } from 'iconsax-react';
import { Input, Tooltip } from 'antd';
import CreateContentPanel from './components/CreateContentPanel';
import ListContentItemsPanel from './components/ListContentItemsPanel';
import './sidebar.css';
import { CollapseIcon } from '../icons';
import { cn } from '@utils/cn';
import SearchDropdown from './components/dropdown/SearchDropdown';
import { useSidebar } from '@/provider/sidebar-provider';
import { CustomInput } from '../input/Input';
export default function SideBar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === '\\') {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSidebarOpen]);
  return (
    <aside
      className={cn(
        'sidebar max-w-[260px]  flex flex-col box-border ',
        isSidebarOpen
          ? 'p-3 min-w-[260px] w-[260px] '
          : 'w-10 p-0 relative top-0 left-0 pr-10',
      )}
      style={{ border: '1px solid #EDEDED' }}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className={cn('relative  ', isSidebarOpen ? '' : 'hidden')}>
          <CustomInput
            placeholder="Search"
            prefixIcon={
              <SearchNormal1 className="min-w-4" size={16} color={'#6A758B'} />
            }
            className="h-9 flex "
          />
        </div>
        <Tooltip
          placement="right"
          title={`${isSidebarOpen ? 'Close' : 'Show'} sidebar (Ctrl + \\)`}
        >
          <button
            className={cn(
              'flex border-none  items-center justify-center gap-1 text-white text-sm  bg-transparent cursor-pointer ',
              isSidebarOpen
                ? 'p-0'
                : 'absolute top-0 right-1 size-9 boxShadowSecondary !rounded-l-none !rounded-r-xl',
            )}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <CollapseIcon
              className={cn(isSidebarOpen ? 'rotate-0' : 'rotate-180')}
            />
          </button>
        </Tooltip>
      </div>

      <div className="flex flex-col overflow-hidden">
        <ListContentItemsPanel />

        {isSidebarOpen && <CreateContentPanel />}
      </div>
    </aside>
  );
}
