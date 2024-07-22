import React from 'react';
import { MessageQuestion, Notification } from 'iconsax-react';
export function SheetBase() {
  return (
    <div className={''}>
      {/*Header*/}
      <header id={'header'} className={'flex h-160 bg-gradient-to-r from-cyan-500 to-blue-500'}>
        <div className="logo">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4216 4.14738L3.56405 8.64017C2.96021 8.89001 2.9664 9.74771 3.57425 9.98844L14.4773 14.3122C15.4356 14.6921 16.5023 14.6921 17.4602 14.3122L28.3633 9.98844C28.9707 9.74771 28.9769 8.89001 28.3731 8.64017L17.5155 4.14738C16.5249 3.73766 15.4123 3.73766 14.4216 4.14738Z"
              fill="white"
            />
            <path
              d="M16.9355 16.6734V27.4745C16.9355 27.9884 17.4534 28.3399 17.9313 28.1509L30.0807 23.4352C30.3582 23.3252 30.5399 23.0571 30.5399 22.7589V11.9574C30.5399 11.4435 30.022 11.092 29.5442 11.2811L17.3948 15.9967C17.1176 16.1067 16.9355 16.3748 16.9355 16.6731"
              fill="white"
            />
            <path
              d="M14.0985 17.2305L10.4929 18.9714L10.1269 19.1484L2.51542 22.7955C2.03286 23.0282 1.41699 22.6768 1.41699 22.1407V12.0027C1.41699 11.809 1.51642 11.6415 1.64972 11.5154C1.70544 11.4597 1.76845 11.4138 1.834 11.3774C2.01574 11.2682 2.27541 11.239 2.49576 11.3264L14.0377 15.8993C14.6244 16.1321 14.6703 16.9541 14.0981 17.2305"
              fill="white"
            />
          </svg>
        </div>
        <div className="base-infor flex flex-row">
          <p className="wordspace-name">NETKO Solution</p>
          <p className="base-name">
            <strong>NETKO’s Project Management</strong>
          </p>
        </div>
        <p className="last-modified-status">
          Last modified: <span className={'date-time'}>12:01 Am July 11</span>
        </p>
        <div className="header-right flex items-center">
          <i className="icon">Base Activity</i>
          <div className="help">
            <p>
              <MessageQuestion /> Help
            </p>
          </div>
          <button className="share">Share</button>
          <button className="notification">
            <Notification />
          </button>
          <span className="avatar">Avatar</span>
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
