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
      <Collapse
        items={items}
        //   className="!border-none"
        className="help-collapse"
        bordered={false}
        expandIcon={({ isActive }) => (
          <ArrowDown2 size={16} className={isActive ? 'rotate-180' : ''} />
        )}
        expandIconPosition="right"
        accordion
        defaultActiveKey={['1']}
      />
    </div>
  );
};

export default BuildWithSheetbase;

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

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <div className=" flex gap-2 items-center">
        <Text as="span" variant="B2-Regular">
          Quick tips
        </Text>
        <Text variant="B2-SemiBold" as="span">
          12
        </Text>
      </div>
    ),
    children: (
      <div className="grid grid-cols-2  grid-flow-row gap-4">
        {QuickTipsList.map((i, index) => {
          return (
            <div
              key={`QuickTips-${i.title}-${index}`}
              className="flex  flex-col  gap-2 items-start"
            >
              <img
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '4px',
                }}
                src={i.imagePath}
                alt={i.title}
              />
              <Text variant="B2-Regular" className="m-0 h-[18px] text-white">
                {i.title}
              </Text>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    key: '2',
    label: (
      <div className=" flex gap-2 items-center">
        <Text as="span" variant="B2-Regular">
          Tutorials
        </Text>
        <Text variant="B2-SemiBold" as="span">
          2
        </Text>
      </div>
    ),
    children: (
      <div className="grid grid-cols-2  grid-flow-row gap-4">
        {QuickTipsList.map((i, index) => {
          return (
            <div
              key={`Tutorials-${i.title}-${index}`}
              className="flex  flex-col  gap-2 items-start"
            >
              <img
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
                src={i.imagePath}
                alt={i.title}
              />
              <Text variant="B2-Regular" className="m-0 h-[18px] text-white">
                {i.title}
              </Text>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div className=" flex gap-2 items-center">
        <Text as="span" variant="B2-Regular">
          Videos
        </Text>
        <Text variant="B2-SemiBold" as="span">
          41
        </Text>
      </div>
    ),
    children: (
      <div className="grid grid-cols-2  grid-flow-row gap-4">
        {QuickTipsList.map((i, index) => {
          return (
            <div
              key={`Videos-${i.title}-${index}`}
              className="flex  flex-col  gap-2 items-start"
            >
              <img
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
                src={i.imagePath}
                alt={i.title}
              />
              <Text variant="B2-Regular" className="m-0 h-[18px] text-white">
                {i.title}
              </Text>
            </div>
          );
        })}
      </div>
    ),
  },
];
