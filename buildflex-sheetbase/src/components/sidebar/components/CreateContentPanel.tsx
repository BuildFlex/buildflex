import { PlusIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { useTheme } from '@provider/theme-provider';
import { cn } from '@utils/cn';
import {
  ArrowRight2,
  Clock,
  DocumentText,
  ElementEqual,
  Folder2,
  Grid1,
  Icon as IconType,
} from 'iconsax-react';
import React, { useCallback, useState } from 'react';
import CreateTableDropdown from './dropdown/CreateTableDropdown';

interface MenuItemProps {
  icon: IconType;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleHoverEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const handleHoverLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <button
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      className="flex w-full items-center justify-between px-3  h-9 rounded hover:bg-white/20 transition-colors duration-500 cursor-pointer"
    >
      <div className="flex items-center">
        <Icon size={16} variant="Outline" className="mr-3" />
        <Text as="span" variant="B2-Regular">
          {label}
        </Text>
      </div>
      {isHovered && <PlusIcon className="text-neutral-200 hover:text-white" />}
    </button>
  );
};

const CreateContentPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme } = useTheme();
  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <div
      className={cn(
        'fixed left-0 bottom-0 min-w-[260px]',
        theme.linearBackground,
      )}
    >
      <div className={cn(' text-white')}>
        <button
          className="flex w-full justify-between  bg-gray-500/20 items-center px-4 h-9 cursor-pointer"
          onClick={handleOpen}
        >
          <Text as="span" variant="B2-Medium" className="h-[18px]">
            Create New
          </Text>
          <ArrowRight2
            size={16}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
          />
        </button>
        {isOpen && (
          <div className="transition-all duration-500 ease-in-out p-2">
            <CreateTableDropdown>
              <MenuItem icon={Grid1} label="Table" />
            </CreateTableDropdown>
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
