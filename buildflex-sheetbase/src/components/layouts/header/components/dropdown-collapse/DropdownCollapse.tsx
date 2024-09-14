import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Divider } from 'antd';
import { ArrowRight2 } from 'iconsax-react';
import { useState } from 'react';
import IconsSelector from './appearance/IconsSelector';
import ProjectThemeSelector from './appearance/ProjectThemesSelector';
import BaseGuideContent from './base-guide/BaseGuideContent';

const DropdownCollapse = () => {
  const [activeTab, setActiveTab] = useState<string>('');
  const handleSetActiveTab = (tab: string) => {
    if (activeTab === tab) {
      setActiveTab('');
      return;
    }
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col gap-3">
      {/* appearance */}
      <DropdownItem
        className="h-[35px] cursor-pointer"
        onClick={() => handleSetActiveTab('appearance')}
      >
        <ArrowRight2
          size={16}
          className={activeTab === 'appearance' ? 'rotate-90' : ''}
        />
        <Text as="span" variant="B1-Semibold">
          Appearance
        </Text>
      </DropdownItem>
      {activeTab === 'appearance' && (
        <div className="flex flex-col gap-2">
          <ProjectThemeSelector />
          <div className="h-[1px]  bg-borderColor w-full" />
          <IconsSelector />
        </div>
      )}

      {/* base */}
      <Divider className="bg-borderColor !my-0" />
      <DropdownItem
        className="h-[35px] cursor-pointer"
        onClick={() => handleSetActiveTab('base-guide')}
      >
        <ArrowRight2
          size={16}
          className={cn(activeTab === 'base-guide' ? 'rotate-90' : '')}
        />

        <Text as="span" variant="B1-Semibold">
          Base guide
        </Text>
      </DropdownItem>
      {activeTab === 'base-guide' && <BaseGuideContent />}
    </div>
  );
};

export default DropdownCollapse;
