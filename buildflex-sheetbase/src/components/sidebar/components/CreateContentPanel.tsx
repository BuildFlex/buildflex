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

interface MenuItemProps {
  icon: IconType;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, label }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="flex items-center justify-between p-3 hover:bg-blue-700 transition-colors duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <Icon size={24} variant="Outline" className="mr-3" />
        <span>{label}</span>
      </div>
      {isHovered && <Add size={24} variant="Outline" />}
    </div>
  );
};

const CreateContentPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed left-0 bottom-0 min-w-[25rem]">
      <div className="bg-blue-600 text-white">
        <div
          className="flex justify-between items-center p-3 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold">Create New</span>
          <ArrowRight2
            size={24}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="bg-gradient-to-b from-blue-500 to-blue-700 transition-all duration-500 ease-in-out">
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
