import React, { useState } from 'react';
import LinkContent from './link-content';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { Divider, MenuProps, Switch } from 'antd';
import {
  ArrowCircleLeft2,
  ArrowRight2,
  ArrowRotateLeft,
  Code,
  Flash,
  Keyboard,
  Link,
} from 'iconsax-react';
import { CloseIcon, QuestionCircle } from '@/components/icons';
import { ReloadOutlined } from '@ant-design/icons';
import { cn } from '@/utils/cn';
import { ShareAndSyncTab } from '../../components/dropdown-render/ShareAndSyncDropdownRender';
const SettingTab = ({
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
        'share-setting-tab duration-500 transition-transform flex flex-col gap-3 min-w-[480px] p-3 box-border',
        className,
      )}
    >
      {/* Headeer */}
      <DropdownItem
        onClick={handelCreateNewLink}
        className="text-neutral-dark-500 "
      >
        <ArrowCircleLeft2
          onClick={() => setActiveTab(null)}
          color="#0D7FAB"
          size={16}
          className="cursor-pointer"
        />
        <Text as="span" variant="B2-Regular">
          Link settings
        </Text>
      </DropdownItem>

      <Divider className="!m-0 bg-borderColor" />

      {/* Switch action */}
      <div className="flex flex-col gap-1 ">
        <DropdownItem className="text-neutral-dark-500 cursor-pointer">
          <Switch
            id="allow-viewer-to-copy-data-out-of-this-view"
            size="small"
          />
          <label
            className="cursor-pointer"
            htmlFor="allow-viewer-to-copy-data-out-of-this-view"
          >
            <Text as="span" variant="B2-Regular">
              Allow viewer to copy data out of this view
            </Text>
          </label>
        </DropdownItem>
        <DropdownItem className="text-neutral-dark-500 cursor-pointer">
          <Switch id="show-all-fields-in-expanded-records" size="small" />
          <label
            className="cursor-pointer"
            htmlFor="show-all-fields-in-expanded-records"
          >
            <Text as="span" variant="B2-Regular">
              Show all fields in expanded records
            </Text>
          </label>
        </DropdownItem>
        <DropdownItem className="text-neutral-dark-500 cursor-pointer">
          <Switch id="restrict-access-to-an-email-domain" size="small" />
          <label
            className="cursor-pointer"
            htmlFor="restrict-access-to-an-email-domain"
          >
            <Text as="span" variant="B2-Regular">
              Restrict access to an email domain
            </Text>
          </label>
          <QuestionCircle color="#6A758B" />
        </DropdownItem>
        <DropdownItem className="text-neutral-dark-500 cursor-pointer">
          <Switch id="restrict-access-with-a-password" size="small" />
          <label
            className="cursor-pointer"
            htmlFor="restrict-access-with-a-password"
          >
            <Text as="span" variant="B2-Regular">
              Restrict access with a password
            </Text>
          </label>
          <QuestionCircle color="#6A758B" />
        </DropdownItem>
      </div>

      <Divider className="!m-0 bg-borderColor" />

      {/* Footer */}

      <DropdownItem className="text-neutral-dark-500 cursor-pointer">
        <ArrowRotateLeft size={16} />
        <Text as="span" variant="B2-Regular">
          Generate new link
        </Text>
      </DropdownItem>
      <DropdownItem className="text-neutral-dark-500 cursor-pointer">
        <CloseIcon />
        <Text as="span" variant="B2-Regular">
          Disable
        </Text>
      </DropdownItem>
    </div>
  );
};

export default SettingTab;
