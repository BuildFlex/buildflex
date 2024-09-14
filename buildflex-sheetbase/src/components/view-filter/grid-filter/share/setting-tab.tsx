import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CloseIcon, QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Divider } from 'antd';
import { ArrowCircleLeft2, ArrowRotateLeft } from 'iconsax-react';
import React from 'react';
import { ShareAndSyncTab } from '../../components/dropdown-render/ShareAndSyncDropdownRender';
import SettingConfirmModal from './setting-confirm-modal';
const SettingTab = ({
  className,
  setActiveTab,
  setIsModalOpen,
}: {
  className?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<ShareAndSyncTab | null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={cn(
        'share-setting-tab duration-500 transition-all flex flex-col gap-3 min-w-[480px] p-3 box-border',
        className,
      )}
    >
      {/* Headeer */}
      <DropdownItem className="text-neutral-dark-500 ">
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
        <SettingConfirmModal
          label="Allow viewer to copy data out of this view"
          id="allow-viewer-to-copy-data-out-of-this-view"
          setIsModalOpen={setIsModalOpen}
        />
        <SettingConfirmModal
          label="Show all fields in expanded records"
          id="show-all-fields-in-expanded-records"
          setIsModalOpen={setIsModalOpen}
        />

        <SettingConfirmModal
          label="Restrict access to an email domain"
          id="restrict-access-to-an-email-domain"
          setIsModalOpen={setIsModalOpen}
        />
        <SettingConfirmModal
          label="Restrict access with a password"
          id="restrict-access-with-a-password"
          setIsModalOpen={setIsModalOpen}
        >
          <QuestionCircle color="#6A758B" />
        </SettingConfirmModal>
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
