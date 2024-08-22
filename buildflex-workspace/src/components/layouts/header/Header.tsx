import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Breadcrumb from './components/Breadcrumb';
import ProjectNameDropdown from './components/dropdown/ProjectNameDropdown';
import './header.css';
import ProjectStatus from './components/ProjectStatus';
import HistoryDropdown from './components/dropdown/history/HistoryDropdown';
import HelpButton from './components/help/HelpButton';
import NotiButton from './components/notification/NotiButton';
import ShareButton from './components/share/share-button';
import Text, { TextVariant } from '../../typography/Text';
import Logo from './components/Logo';
import { cn } from '@/utils/cn';
import {
  ArrowDown2,
  ArrowDown3,
  Notification,
  People,
  User,
} from 'iconsax-react';
import { GroupIcon } from '@/components/icons';

const Header = () => {
  return (
    <header
      id={'header'}
      className={cn(
        `flex px-3 items-center box-border h-[60px] bg-main  text-white`,
      )}
    >
      {/*Base Left Nav*/}
      <div className="nav-left h-10 flex justify-center items-center gap-6">
        <Logo />
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/*Base Right Nav*/}
      <div className="nav-right ml-auto  flex justify-center items-center gap-3">
        <GroupIcon />
        <div className="size-9 bg-white rounded-full flex items-center justify-center">
          <Notification size={16} className="text-brand-PRIMARY" />
        </div>
        <div className="size-9 bg-white border border-white rounded-full flex items-center justify-center">
          <img
            src="/avatar.png"
            alt="avatar"
            className="object-cover h-full w-full rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

const breadcrumbItems = [
  {
    variant: 'B2-Regular' as TextVariant,
    component: (
      <div className="flex items-center gap-1 text-gray-100">
        <User size={12} />
        <Text as="span" variant="B2-Regular">
          Personal Account
        </Text>
        <ArrowDown2 variant="Bold" size={12} />
      </div>
    ),
  },
  {
    isLast: true,
    variant: 'B2-Regular' as TextVariant,
    component: (
      <div className="flex items-center gap-1 text-gray-100">
        <Text as="span" variant="B2-Regular">
          My Workspace{' '}
        </Text>
        <ArrowDown2 variant="Bold" size={12} />
      </div>
    ),
  },
];
