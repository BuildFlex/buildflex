import React from 'react';
import {Avatar, Button, Breadcrumb} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {MessageQuestion, Notification, Clock, People, ArrowRight2, Share} from 'iconsax-react';
import SheetBaseIcon from '../../components/common/SheetBaseIcon';
import ButtonLink from "../../components/button/ButtonLink";
import HeaderBreadcrumb from "../../components/breadcrumb/HeaderBreadcrumb";

export function SheetBase() {
  return (
    <div className={''}>
      {/*Header*/}
      <header id={'header'}
              className={'flex h-16 bg-gradient-to-br from-gradient-sheet-base-start to-gradient-sheet-base-end text-white'}>
        <div className="nav-left flex justify-center items-center">
          <div className="logo p-3">
            <SheetBaseIcon/>
          </div>
          <div className="workspace flex flex-col justify-center">
            <HeaderBreadcrumb/>
            <div className="workspace__last-modified-status mt-1 text-xs">
              Last modified: <span className={'date-time'}>12:01 AM July 11</span>
            </div>
          </div>
        </div>
        <div className="nav-right ml-auto flex items-center gap-3 mr-3">
          <ButtonLink icon={<Clock size={16}/>} defaultBg={"transparent"} defaultBorderColor={"transparent"}
                      defaultColor={"white"} defaultHoverBg={"#087AAF"} defaultHoverColor={"white"}
                      defaultHoverBorderColor={"transparent"}/>
          <div className="help flex items-center mr-3">
            <ButtonLink title={"Help"} icon={<MessageQuestion size={16}/>} defaultBg={"transparent"}
                        defaultBorderColor={"transparent"} defaultColor={"white"} defaultHoverBg={"#087AAF"}
                        defaultHoverColor={"white"} defaultHoverBorderColor={"transparent"}/>
          </div>
          <ButtonLink title={"Share"} icon={<Share size={16} color={"#087AAF"}/>} styles={{
            height: '3.6rem',
            padding: 'padding: 0.6rem 1.6rem'
          }}/>
          <div className="notification rounded-full bg-white w-9 h-9 flex items-center justify-center">
            <Notification size={16} color={"#087AAF"}/>
          </div>
          <Avatar size={36} icon={<UserOutlined/>} className="border-white border-2"/>
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
