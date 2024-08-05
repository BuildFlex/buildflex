import React from 'react';
import SheetBaseIcon from '../../common/SheetBaseIcon';
import { Avatar } from 'antd';
import {
  Clock,
  Folder2,
  MessageQuestion,
  Notification,
  People,
} from 'iconsax-react';
import { UserOutlined } from '@ant-design/icons';
import Text, { TextVariant } from '../../typography/Text';
import Breadcrumb from './components/Breadcrumb';
import { useTheme } from '../../../provider/theme-provider';
import { cn } from '@utils/cn';

const breadcrumbItems = [
  {
    text: 'NETKO Solution',
    variant: 'B2-Regular' as TextVariant,
    className: 'text-gray-100',
  },
  {
    text: 'Michael Nguyen',
    variant: 'B2-Regular' as TextVariant,
    className: 'text-gray-100',
  },
  {
    text: 'NETKO’s Project Management',
    variant: 'B2-Bold' as TextVariant,
    isLast: true,
    className: 'text-white',
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header
      id={'header'}
      className={cn(
        `flex p-3 box-border h-[6rem] bg-red-200  text-white`,
        theme.linearBackground,
      )}
    >
      {/*Base Left Nav*/}
      <div className="nav-left flex justify-center items-center gap-2">
        <div className="logo p-1 rounded-[8px] w-8 h-8">
          <SheetBaseIcon />
        </div>
        {/*Base Breadcrumb*/}
        <div className="workspace flex flex-col justify-between h-full">
          <div className="workspace__breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          {/*Base Status*/}
          <div className="workspace__base-status flex items-center  gap-1">
            <div className="workspace__drive text-xs flex items-center gap-1 cursor-pointer">
              <Folder2 size={16} variant="Bold" color="#F2F4F7" />
              <Text as={'span'} variant={'sub-title'} className="text-gray-100">
                Drive
              </Text>
            </div>
            <Text as={'span'} variant={'sub-title'} className="text-gray-100">
              |
            </Text>
            <div className="workspace__last-modified-status text-xs">
              <Text as={'span'} variant={'sub-title'} className="text-gray-100">
                Lasted modifield: 12:01 Am Jul 11
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/*Base Right Nav*/}
      <div className="nav-right ml-auto flex items-center gap-3 ">
        <div className="clock flex justify-center items-center cursor-pointer ">
          <Clock size={16} color={'#FFFFFF'} />
        </div>

        <div className="help flex gap-2 items-center cursor-pointer">
          <MessageQuestion size={16} color={'#FFFFFF'} />
          <Text variant={'B2-Medium'} as="span" className="text-white">
            Help
          </Text>
        </div>
        <div className="share  box-border	 py-1.5 px-4 rounded-lg cursor-pointer  gap-2 bg-white max-h-9 h-9  flex items-center justify-center">
          <People color="#087AAF" size={16} />
          <Text variant={'B2-Medium'} as="span" className="text-primary-600">
            Share
          </Text>
        </div>
        <div className="notification rounded-full bg-white cursor-pointer size-9 flex items-center justify-center">
          <Notification size={16} color={'#087AAF'} />
        </div>
        <Avatar
          size={36}
          icon={<UserOutlined />}
          style={{ border: '1px solid white' }}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
