import { GroupIcon } from '@/components/icons';
import MobileAppIcon from '@/components/icons/mobile-app-icon';
import SheetbaseIcon from '@/components/icons/sheetbase-icon';
import WebAppIcon from '@/components/icons/web-app-icon';
import WorkflowIcon from '@/components/icons/workflow-icon';
import Text from '@/components/typography/Text';
import { Dropdown } from 'antd';
import { I24Support, MessageQuestion } from 'iconsax-react';
import { useState } from 'react';
const moreAppItems = [
  { key: 'sheetbase', icon: SheetbaseIcon, text: 'Sheetbase' },
  { key: 'web-app', icon: WebAppIcon, text: 'Web App' },
  { key: 'workflow', icon: WorkflowIcon, text: 'Workflow' },
  { key: 'mobile-app', icon: MobileAppIcon, text: 'Mbile App' },
  { key: 'help-center', icon: MessageQuestion, text: 'Help Center' },
  { key: 'support', icon: I24Support, text: 'support' },
];
const MoreAppDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <Dropdown
      trigger={['click']}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      placement="bottomRight"
      className="flex items-center relative justify-center"
      dropdownRender={() => (
        <div className="flex gap-x-4 gap-y-6 flex-wrap boxShadowSecondary px-4 py-6 overflow-hidden box-border rounded-lg w-[360px]">
          {moreAppItems.map((item) => (
            <button
              className="flex flex-col text-neutral-dark-500 h-[65px] justify-center items-center gap-2 w-[98px]"
              key={item.key}
              onClick={handleClose}
            >
              <item.icon size={36} />
              <Text
                as="span"
                variant="B1-Semibold"
                className="text-neutral-dark-500 "
              >
                {item.text}
              </Text>
            </button>
          ))}
        </div>
      )}
    >
      <button className="w-fit h-fit p-0 m-0 border-none">
        <GroupIcon />
      </button>
    </Dropdown>
  );
};

export default MoreAppDropdown;
