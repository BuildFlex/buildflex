import { ArrowRotate, CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { useTheme } from '@/provider/theme-provider';
import { cn } from '@/utils/cn';
import React, { useState } from 'react';
import { Input } from 'antd';
import { ArrowRight2, SearchNormal1 } from 'iconsax-react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import AdditionalResources from './AdditionalResources';
import HelpTitle from './HelpTitle';
import BuildWithSheetbase from './tab/BuildWithSheetbase';
import ManagingYourWork from './tab/ManagingYourWork';
import SharingYourBase from './tab/SharingYourBase';
interface HelpSidebarProps {
  onClose: () => void;
}

const dropdownItems = [
  {
    id: 'getting-started',
    text: 'Getting started',
    isTab: false,
    icon: <ArrowRotate className="min-h-[18px]" />,
  },
  {
    id: 'building-with-sheetBase',
    text: 'Building with SheetBase',
    isTab: true,
  },
  {
    id: 'managing-your-work',
    text: 'Managing your work',
    isTab: true,
  },
  {
    id: 'sharing-your-base',
    text: 'Sharing your base',
    isTab: true,
  },
];

const HelpSidebar = ({ onClose }: HelpSidebarProps) => {
  const { theme } = useTheme();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleBack = () => setActiveItem(null);
  const renderSubMenu = (activeItem: string | null, handleBack: () => void) => {
    // switch (activeItem) {
    //   case 'building-with-sheetBase':
    //     return <BuildWithSheetbase onClose={onClose} onBack={handleBack} />;
    //   case 'managing-your-work':
    //     return <ManagingYourWork onClose={onClose} onBack={handleBack} />;
    //   case 'sharing-your-base':
    //     return <SharingYourBase onClose={onClose} onBack={handleBack} />;
    //   default:
    //     return (
    //       <div className="  flex flex-col gap-6">
    //         <HelpTitle onBack={handleBack} title="Help" onClose={onClose} />
    //       </div>
    //     );
    // }

    // the above code , the component will unmount as soon as the activeTab changes
    // the below code, To keep component stil mounted when switching between tabs

    return (
      <>
        <BuildWithSheetbase
          className={
            activeItem === 'building-with-sheetBase'
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }
          onClose={onClose}
          onBack={handleBack}
        />
        <ManagingYourWork
          className={
            activeItem === 'managing-your-work'
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }
          onClose={onClose}
          onBack={handleBack}
        />
        <SharingYourBase
          className={
            activeItem === 'sharing-your-base'
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }
          onClose={onClose}
          onBack={handleBack}
        />
      </>
    );
  };
  return (
    <div
      className={cn(
        'fixed right-0 top-[60px] bottom-0 w-[380px] flex flex-col z-10 dropdown-container   p-4 box-border max-h-[calc(100svh-60px)] h-full overflow-y-auto overflow-x-hidden text-white',

        theme.linearBackground,
        activeItem ? 'inside' : 'outside',
      )}
    >
      <div className={cn('flex flex-col gap-12 help-sidebar ')}>
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-3">
            <HelpTitle title="Help" onClose={onClose} />
            <Input
              className="h-9 !border-none !px-4 !rounded"
              placeholder="Find guides and resources"
              prefix={
                <SearchNormal1 className="mr-1" size={16} color={'#6A758B'} />
              }
            />
          </div>
          <div className="flex gap-3 flex-col">
            {dropdownItems.map((item, index) => (
              <DropdownItem
                key={item.id}
                onClick={item.isTab ? () => setActiveItem(item.id) : undefined}
                className={cn(
                  'bg-[#E0F2FE] p-3 h-[42px] cursor-pointer',
                  theme.color,
                )}
              >
                {item.icon}
                <Text as="span" variant="B2-SemiBold" className="h-[18px]">
                  {item.text}
                </Text>
                {item.isTab && <ArrowRight2 className="ml-auto" size={16} />}
              </DropdownItem>
            ))}
          </div>
        </div>
        <AdditionalResources />
      </div>
      {/*====== SUB MENU ======== */}
      <div
        className={`submenu-content absolute w-full flex flex-col p-4 top-0 left-0 box-border h-full`}
      >
        {renderSubMenu(activeItem, handleBack)}
      </div>
    </div>
  );
};

export default HelpSidebar;