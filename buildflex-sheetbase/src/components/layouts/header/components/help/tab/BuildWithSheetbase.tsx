import React from 'react';
import HelpTitle from '../HelpTitle';
import { Collapse, CollapseProps } from 'antd';
import { ArrowDown2, ArrowRight2 } from 'iconsax-react';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';

interface BuildWithSheetbaseProps {
  onClose: () => void;
  onBack: () => void;
  className?: string;
}
const BuildWithSheetbase = ({
  onClose,
  onBack,
  className,
}: BuildWithSheetbaseProps) => {
  const [activeTab, setActiveTab] = React.useState<string>('quick-tips');
  const handleSetActive = (tab: string) => {
    if (activeTab === tab) setActiveTab('');
    else setActiveTab(tab);
  };
  return (
    <div
      className={cn(
        ' transition-opacity  w-full duration-300 flex flex-col gap-6',
        className,
      )}
    >
      <HelpTitle
        onBack={onBack}
        title="Help / Building with SheetBase"
        onClose={onClose}
      />
      <div className="flex gap-3 flex-col">
        {HelpList.map((i, index) => {
          return (
            <div className="flex flex-col">
              <div
                className=" flex gap-2 cursor-pointer box-border items-center min-h-10 h-10 "
                style={{
                  borderBottom: '1px solid white',
                }}
                onClick={() => handleSetActive(i.key)}
              >
                <Text as="span" variant="B2-Regular">
                  {i.title}
                </Text>
                <Text variant="B2-SemiBold" as="span">
                  {i.count}
                </Text>
                <ArrowDown2
                  className={cn(
                    activeTab === i.key ? 'rotate-180' : 'rotate-0',
                    'ml-auto transition-all',
                  )}
                  size={16}
                />
              </div>
              <div
                className={cn(
                  'transition-all duration-300',
                  activeTab === i.key ? 'h-full mt-6' : 'h-0',
                )}
              >
                <div
                  className={cn(
                    ' grid-cols-2 w-full transition-all overflow-hidden  grid-flow-row gap-4',
                    activeTab === i.key ? 'grid' : 'hidden',
                  )}
                >
                  {QuickTipsList.map((tip, index) => {
                    return (
                      <div
                        key={`${i.key}-${i.title}-${index}`}
                        className="flex  flex-col  gap-2 items-start"
                      >
                        <img
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            borderRadius: '4px',
                          }}
                          src={tip.imagePath}
                          alt={tip.title}
                        />
                        <Text
                          variant="B2-Regular"
                          className="m-0 h-[18px] text-white"
                        >
                          {tip.title}
                        </Text>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuildWithSheetbase;
const HelpList = [
  { key: 'quick-tips', title: 'Quick tips', count: 12 },
  { key: 'tutorials', title: 'Tutorials', count: 2 },
  { key: 'videos', title: 'Videos', count: 41 },
];
const QuickTipsList = [
  {
    title: 'Text title',
    imagePath: '/help/quick-tip-default-2.png',
  },
  {
    title: 'Text title',
    imagePath: '/help/quick-tip-default-2.png',
  },
  {
    title: 'Text title',
    imagePath: '/help/quick-tip-default-2.png',
  },
  {
    title: 'Text title',
    imagePath: '/help/quick-tip-default-2.png',
  },
  {
    title: 'Text title',
    imagePath: '/help/quick-tip-default-2.png',
  },
];

