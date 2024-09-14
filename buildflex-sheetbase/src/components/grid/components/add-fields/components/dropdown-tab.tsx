import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import React from 'react';

const DropdownTab: React.FC<{
  label: string;
  id: string;
  activeTab: string;
  disabled?: boolean;
  setActiveTab: (tab: string) => void;
}> = ({ disabled = false, id, label, activeTab, setActiveTab }) => (
  <button
    disabled={disabled}
    onClick={() => setActiveTab(id)}
    className={cn(
      'h-[26px] relative z-[1] cursor-pointer border-none outline-none bg-transparent w-fit box-border flex items-start',
      activeTab === id && 'text-neutral-dark-500',
    )}
    style={activeTab === id ? { borderBottom: '2px solid #101828' } : {}}
  >
    <Text as="span" variant="B2-Regular">
      {label}
    </Text>
  </button>
);

export default DropdownTab;
