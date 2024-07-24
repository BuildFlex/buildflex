import React from 'react';
import SheetBaseIcon from '../../common/SheetBaseIcon';
import { Avatar, Divider } from 'antd';
import { ArrowRight2, Folder2, Notification } from 'iconsax-react';
import { FolderAddFilled, UserOutlined } from '@ant-design/icons';
import Text from '../../typography/Text';
import Button from '../../button/Button';
import { Tooltip } from 'antd';

const Header = () => {
  return (
    <header
      id={'header'}
      className={
        'flex px-3 py-[1rem] bg-gradient-to-br from-gradient-sheet-base-start to-gradient-sheet-base-end text-white'
      }
    >
      <div className="nav-left flex justify-center items-center gap-2">
        <div className="logo p-1 w-8 h-8">
          <SheetBaseIcon />
        </div>
        {/*Base Breadcrumb*/}
        <div className="workspace flex flex-col justify-center">
          <div className="workspace__breadcrumb">
            <nav className="flex items-center gap-2 text-sm text-white">
              <div className="workspace__nav-item flex items-center gap-2 cursor-pointer truncate w-max">
                <Text variant={'B2-Regular'} as={'span'}>
                  NETKO Solution
                </Text>
                <ArrowRight2 size="12" />
              </div>
              <div className="workspace__nav-item flex items-center gap-2 cursor-pointer">
                <Text variant={'B2-Regular'} as={'span'}>
                  Michael Nguyen
                </Text>
                <ArrowRight2 size="12" />
              </div>
              <div className="workspace__nav-item items-center gap-2 cursor-pointer">
                <Text variant={'B2-Bold'} as={'span'}>
                  NETKO’s Project Management
                </Text>
              </div>
            </nav>
          </div>
          {/*Base Status*/}
          <div className="workspace__base-status flex items-center mt-1">
            <div className="workspace__last-modified-status text-xs">
              <Text as={'span'} variant={'sub-title'}>
                Last modified: 12:01 AM July 11
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-right ml-auto flex items-center gap-3 mr-2">
        <div className="notification rounded-full bg-white w-9 h-9 flex items-center justify-center">
          <Notification size={16} color={'#087AAF'} />
        </div>
        <Avatar
          size={36}
          icon={<UserOutlined />}
          className="border-white border-2"
        />
      </div>
    </header>
  );
};

export default Header;
