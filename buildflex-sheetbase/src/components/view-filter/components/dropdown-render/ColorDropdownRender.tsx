import React, { ReactNode, useState } from 'react';
import { cn } from '@/utils/cn';
import MainTab from '../../grid-filter/color/main-tab';
import ColorSelectFieldTab from '../../grid-filter/color/color-select-field-tab';
import ColorConditionsTab from '../../grid-filter/color/color-conditions-tab';
export type ColorTab = 'color-select-field-tab' | 'color-conditions-tab';
const ColorDropdownRender = () => {
  const [activeTab, setActiveTab] = useState<ColorTab | null>(null);

  const renderTab = () => {
    switch (activeTab) {
      case 'color-select-field-tab':
        return <ColorSelectFieldTab setActiveTab={setActiveTab} />;
      case 'color-conditions-tab':
        return <ColorConditionsTab setActiveTab={setActiveTab} />;
      default:
        return <MainTab setActiveTab={setActiveTab} />;
    }
  };
  return (
    <div className={'box-border flex rounded-lg w-auto overflow-x-hidden  '}>
      {renderTab()}
    </div>
  );
};

export default ColorDropdownRender;
