import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import MainTab from '../../grid-filter/share/main-tab';
import SettingTab from '../../grid-filter/share/setting-tab';
import SyncDataTab from '../../grid-filter/share/sync-data-tab';
export type ShareAndSyncTab =
  | 'share-main-tab'
  | 'share-setting-tab'
  | 'share-sync-data-tab';
const ShareAndSyncDropdownRender = ({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeTab, setActiveTab] = useState<ShareAndSyncTab | null>(null);

  return (
    <div
      className={'box-border  flex rounded-lg max-w-[480px] overflow-hidden  '}
    >
      <MainTab
        className={cn(
          !activeTab ? 'translate-x-0 h-auto' : '-translate-x-[100%] h-0',
        )}
        setActiveTab={setActiveTab}
      />
      <SettingTab
        className={cn(
          activeTab === 'share-setting-tab'
            ? '-translate-x-[100%] h-auto'
            : 'translate-x-0 h-0',
        )}
        setActiveTab={setActiveTab}
        setIsModalOpen={setIsModalOpen}
      />
      <SyncDataTab
        className={cn(
          activeTab === 'share-sync-data-tab'
            ? '-translate-x-[200%] h-auto'
            : 'translate-x-0 h-0',
        )}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default ShareAndSyncDropdownRender;
