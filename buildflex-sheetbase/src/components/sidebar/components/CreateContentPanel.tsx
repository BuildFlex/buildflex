import React, { useState } from 'react';
import {
  Add,
  Grid1,
  DocumentText,
  Clock,
  Icon as IconType,
  ElementEqual,
  Folder2,
  ArrowRight2,
} from 'iconsax-react';
import { useTheme } from '@provider/theme-provider';
import { cn } from '@utils/cn';
import Text from '@/components/typography/Text';
import { PlusIcon } from '@/components/icons';

interface MenuItemProps {
  icon: IconType;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="flex items-center justify-between px-3  h-9 rounded hover:bg-white/20 transition-colors duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <Icon size={16} variant="Outline" className="mr-3" />
        <Text as="span" variant="B2-Regular">
          {label}
        </Text>
      </div>
      {isHovered && <PlusIcon className="text-neutral-200 hover:text-white" />}
      {/* {isHovered && <CreateTableDropdown />} */}
    </div>
  );
};

const CreateContentPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={cn(
        'fixed left-0 bottom-0 min-w-[260px]',
        theme.linearBackground,
      )}
    >
      <div className={cn(' text-white')}>
        <div
          className="flex justify-between  bg-gray-500/20 items-center px-4 h-9 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text as="span" variant="B2-Medium" className="h-[18px]">
            Create New
          </Text>
          <ArrowRight2
            size={16}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="transition-all duration-500 ease-in-out p-2">
            <MenuItem icon={Grid1} label="Table" />
            <MenuItem icon={ElementEqual} label="Form" />
            <MenuItem icon={Clock} label="Dashboard" />
            <MenuItem icon={DocumentText} label="Document" />
            <MenuItem icon={Folder2} label="Section" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateContentPanel;
