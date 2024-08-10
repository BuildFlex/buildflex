import DropdownItem from '@/components/common/dropdown/DropdownItem';
import {
  ArrowRotate,
  CloseIcon,
  LaptopIcon,
  MoreVert,
  QuestionCircle,
} from '@/components/icons';
import Text from '@/components/typography/Text';
import { useTheme } from '@/provider/theme-provider';
import { cn } from '@/utils/cn';
import { Dropdown, Input, MenuProps } from 'antd';
import {
  ArrowRight2,
  CodeCircle,
  Document,
  Edit2,
  Element3,
  Folder2,
  Gift,
  Global,
  Home2,
  Message,
  MessageQuestion,
  SearchNormal1,
  Share,
  Sms,
  Trash,
  Video,
} from 'iconsax-react';
import React, { useState } from 'react';
import HelpSidebar from './HelpSidebar';

const HelpButton = ({ className }: { className?: string }) => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const handleClose = () => setIsHelpOpen(false);
  const handleOpen = () => setIsHelpOpen((prev) => !prev);
  return (
    <>
      <div
        id="text"
        onClick={handleOpen}
        className="help flex gap-2  items-center text-white cursor-pointer"
      >
        <MessageQuestion size={16} color={'#FFFFFF'} />
        <Text variant={'B2-Medium'} as="span" className="text-white">
          Help
        </Text>
      </div>
      {isHelpOpen && <HelpSidebar onClose={handleClose} />}
    </>
  );
};

export default HelpButton;
