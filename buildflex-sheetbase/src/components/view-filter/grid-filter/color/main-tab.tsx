import React, { useState } from 'react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { Divider, MenuProps } from 'antd';
import {
  ArrowCircleDown,
  ArrowRight2,
  Code,
  Flash,
  Keyboard,
  Link,
  Setting5,
} from 'iconsax-react';
import { cn } from '@/utils/cn';
import { ShareAndSyncTab } from '../../components/dropdown-render/ShareAndSyncDropdownRender';
import { ColorTab } from '../../components/dropdown-render/ColorDropdownRender';
const MainTab = ({
  className,
  setActiveTab,
}: {
  className?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<ColorTab | null>>;
}) => {
  return (
    <div
      className={cn(
        'share-main-tab duration-500 transition-transform flex flex-col gap-3 min-w-[280px] p-3 box-border',
        className,
      )}
    >
      {/*   Select field */}
      <div
        className="flex flex-col gap-1"
        onClick={() => setActiveTab('color-select-field-tab')}
      >
        <DropdownItem className="text-neutral-dark-500 cursor-pointer">
          <ArrowCircleDown size={16} />
          <Text as="span" variant="B2-Regular">
            Select field
          </Text>
        </DropdownItem>
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Color records the same as a single select field
        </Text>
      </div>
      {/* Conditions */}
      <div
        className="flex flex-col gap-1"
        onClick={() => setActiveTab('color-conditions-tab')}
      >
        <DropdownItem className="text-neutral-dark-500 cursor-pointer">
          <Setting5 size={16} />
          <Text as="span" variant="B2-Regular">
            Conditions
          </Text>
        </DropdownItem>
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Color records based on conditions
        </Text>
      </div>
    </div>
  );
};

export default MainTab;
