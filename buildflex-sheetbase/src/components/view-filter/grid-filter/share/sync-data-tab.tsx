import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Divider, Switch } from 'antd';
import { ArrowCircleLeft2, Flash, Flashy, Link } from 'iconsax-react';
import React, { useState } from 'react';
import { ShareAndSyncTab } from '../../components/dropdown-render/ShareAndSyncDropdownRender';
const SyncDataTab = ({
  className,
  setActiveTab,
}: {
  className?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<ShareAndSyncTab | null>>;
}) => {
  const [link, setLink] = useState<string>('');

  const handelCreateNewLink = () => {
    setLink('https://Sheetbase.com/appiwzBBI7kDUZrQn/shr68UnHOGkKQirEH');
    console.log('link', link);
  };
  return (
    <div
      className={cn(
        'share-sync-data-tab duration-500 transition-all flex flex-col gap-3 min-w-[480px] p-3 box-border',
        className,
      )}
    >
      {/* Headeer */}
      <DropdownItem
        onClick={handelCreateNewLink}
        className="text-neutral-dark-500"
      >
        <ArrowCircleLeft2
          className=" cursor-pointer"
          color="#0D7FAB"
          onClick={() => setActiveTab(null)}
          size={16}
        />
        <Text as="span" variant="B2-Regular">
          Sync data no another base
        </Text>
      </DropdownItem>

      <Divider className="!m-0 bg-borderColor" />

      {/* Switch action */}
      <div className="flex flex-col gap-1 ">
        <DropdownItem className="text-neutral-dark-500 cursor-pointer">
          <Switch
            className="w-8"
            id="allow-data-in-this-view-to-be-synced-to-other-bases"
            size="small"
          />
          <label
            className="cursor-pointer"
            htmlFor="allow-data-in-this-view-to-be-synced-to-other-bases"
          >
            <Text as="span" variant="B2-Regular">
              Allow data in this view to be synced to other bases
            </Text>
          </label>
        </DropdownItem>
        <DropdownItem className="text-neutral-dark-500 cursor-pointer">
          <Switch
            className="w-8"
            id="allow-edits-from-other-bases"
            size="small"
          />
          <label
            className="cursor-pointer"
            htmlFor="allow-edits-from-other-bases"
          >
            <Text as="span" variant="B2-Regular">
              Allow edits from other bases
            </Text>
          </label>
          <Tag className="ml-0 w-auto" name="Business" />
        </DropdownItem>
      </div>

      <Divider className="!m-0 bg-borderColor" />

      {/* Footer */}
      <div className="flex flex-col gap-1">
        <DropdownItem className="text-neutral-dark-500 hover:bg-gray-50 cursor-pointer">
          <Flash size={16} />
          <Text as="span" variant="B2-Regular">
            Sync this view
          </Text>
        </DropdownItem>
        <DropdownItem className="text-neutral-dark-500 hover:bg-gray-50 cursor-pointer">
          <Flashy size={16} />
          <Text as="span" variant="B2-Regular">
            View sync activity
          </Text>
        </DropdownItem>
        <DropdownItem className="text-neutral-dark-500 hover:bg-gray-50 cursor-pointer">
          <Link size={16} />
          <Text as="span" variant="B2-Regular">
            Copy shared view link
          </Text>
        </DropdownItem>
      </div>
    </div>
  );
};

export default SyncDataTab;
