import React, { useState } from 'react';
import LinkContent from './link-content';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { Divider, MenuProps } from 'antd';
import { ArrowRight2, Code, Flash, Keyboard, Link } from 'iconsax-react';
import { cn } from '@/utils/cn';
import { ShareAndSyncTab } from '../../components/dropdown-render/ShareAndSyncDropdownRender';
const MainTab = ({
  className,
  setActiveTab,
}: {
  className?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<ShareAndSyncTab | null>>;
}) => {
  const [link, setLink] = useState<string>('');

  const handelCreateNewLink = () => {
    setLink('https://Sheetbase.com/appiwzBBI7kDUZrQn/shr68UnHOGkKQirEH');
  };
  return (
    <div
      className={cn(
        'share-main-tab duration-500 transition-transform flex flex-col gap-3 min-w-[480px] p-3 box-border',
        className,
      )}
    >
      {/* Create New Link */}
      {link ? (
        <LinkContent setActiveTab={setActiveTab} link={link} />
      ) : (
        <DropdownItem
          onClick={handelCreateNewLink}
          className="text-neutral-dark-500 cursor-pointer"
        >
          <Link size={16} />
          <Text as="span" variant="B2-Regular">
            Create new link
          </Text>
        </DropdownItem>
      )}

      <Divider className="!m-0 bg-borderColor" />

      {/* Embed this view */}
      <DropdownItem
        onClick={() => setActiveTab('share-sync-data-tab')}
        className="text-neutral-dark-500 cursor-pointer"
      >
        <Flash size={16} />
        <Text as="span" variant="B2-Regular">
          Sync data to another base
        </Text>
        <div className="flex gap-1 items-center ml-auto text-neutral-dark-300">
          <Text as="span" variant="B2-Regular">
            Active
          </Text>
          <ArrowRight2 size={16} />
        </div>
      </DropdownItem>
      <DropdownItem className="text-neutral-dark-500 cursor-pointer">
        <Code size={16} />
        <Text as="span" variant="B2-Regular">
          Embed this view
        </Text>
      </DropdownItem>
      <Divider className="!m-0 bg-borderColor" />

      {/* Create a form view */}

      <DropdownItem className="text-neutral-dark-500 cursor-pointer">
        <Keyboard size={16} />
        <Text as="span" variant="B2-Regular">
          Create a form view
        </Text>
      </DropdownItem>
    </div>
  );
};

export default MainTab;
