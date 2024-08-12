import React, { ReactNode, useState } from 'react';
import MainTab from '../../grid-filter/share/main-tab';
import SettingTab from '../../grid-filter/share/setting-tab';
import SyncDataTab from '../../grid-filter/share/sync-data-tab';
import { cn } from '@/utils/cn';
export type ShareAndSyncTab =
  | 'share-main-tab'
  | 'share-setting-tab'
  | 'share-sync-data-tab';
const ShareAndSyncDropdownRender = () => {
  const [activeTab, setActiveTab] = useState<ShareAndSyncTab | null>(null);

  return (
    <div
      className={'box-border flex rounded-lg max-w-[480px] overflow-x-hidden  '}
    >
      <MainTab
        className={cn(!activeTab ? 'translate-x-0' : '-translate-x-[100%]')}
        setActiveTab={setActiveTab}
      />
      <SettingTab
        className={cn(
          activeTab === 'share-setting-tab'
            ? '-translate-x-[100%]'
            : 'translate-x-0',
        )}
        setActiveTab={setActiveTab}
      />
      <SyncDataTab
        className={cn(
          activeTab === 'share-sync-data-tab'
            ? '-translate-x-[200%]'
            : 'translate-x-0',
        )}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default ShareAndSyncDropdownRender;
