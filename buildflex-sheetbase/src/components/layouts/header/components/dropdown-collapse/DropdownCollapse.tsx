import { Collapse, CollapseProps, Divider } from 'antd';
import { ArrowDown2, ArrowRight2 } from 'iconsax-react';
import ProjectThemeSelector from './appearance/ProjectThemesSelector';
import IconsSelector from './appearance/IconsSelector';
import BaseGuideContent from './base-guide/BaseGuideContent';
import { useState } from 'react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';

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
  // return (
  //   <Collapse
  //     accordion
  //     expandIcon={({ isActive }) => (
  //       <ArrowRight2 size={16} className={isActive ? 'rotate-90' : ''} />
  //     )}
  //     items={collapseItems}
  //     defaultActiveKey={['1']}
  //     className="bg-white"
  //   />
  // );
};

export default DropdownCollapse;

const collapseItems: CollapseProps['items'] = [
  {
    key: 'appearance',
    label: (
      <span className="font-lato text-base font-semibold text-neutral-dark-500">
        Appearance
      </span>
    ),
    children: (
      <div className="mb-2">
        <ProjectThemeSelector />
        <div className="h-[1px]  bg-borderColor w-full my-2" />
        <IconsSelector />
      </div>
    ),
  },
  {
    key: 'base-guide',
    label: (
      <span className="font-lato text-base font-semibold text-neutral-dark-500">
        Base guide
      </span>
    ),

    children: <BaseGuideContent />,
  },
];
