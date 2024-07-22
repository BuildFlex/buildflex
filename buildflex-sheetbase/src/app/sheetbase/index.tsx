import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MessageQuestion, Notification } from 'iconsax-react';
import SheetBaseIcon from '../../components/common/SheetBaseIcon';

export function SheetBase() {
  return (
    <div className={''}>
      {/*Header*/}
      <header id={'header'} className={'flex h-160 bg-gradient-to-r from-cyan-500 to-blue-500'}>
        <div className="logo">
          <SheetBaseIcon/>
        </div>
        <div className="workspace">
          <div className="workspace__breadcump">
            <p className="wordspace__name">NETKO Solution</p>
            <p className="wordspace__base-name">
              <strong>NETKO’s Project Management</strong>
            </p>
          </div>
          <p className="wordspace__last-modified-status">
            Last modified: <span className={'date-time'}>12:01 Am July 11</span>
          </p>
        </div>
        <div className="nav-right ml-auto">
          <i className="icon">Base Activity</i>
          <div className="help">
            <p>
              <MessageQuestion/> Help
            </p>
          </div>
          <button className="share">Share</button>
          <p className="notification">
            <Notification/>
          </p>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
      </header>
      <main id={'main-content'} className={'flex flex-row h-lvh'}>
        {/*Left menu here*/}
        <aside className={'sidebar flex-1 max-w-64 bg-gray-500'}>
          left menu
          <section className="sidebarListTable"></section>
          <section className="sidebarCreate"></section>
        </aside>
        <section className={'content flex-1 bg-orange-200'}>main content</section>
      </main>
    </div>
  );
}

export default SheetBase;
