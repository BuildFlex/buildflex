import Breadcrumb from './components/Breadcrumb';

import { cn } from '@/utils/cn';
import { Notification } from 'iconsax-react';
import { TextVariant } from '../../typography/Text';
import AccountDropdown from './components/account-dropdown';
import Logo from './components/Logo';
import MoreAppDropdown from './components/more-app-dropdown';
import WorkSpaceDropdown from './components/workspace-dropdown';
const breadcrumbItems = [
  {
    variant: 'B2-Regular' as TextVariant,
    component: <AccountDropdown />,
  },
  {
    isLast: true,
    variant: 'B2-Regular' as TextVariant,
    component: <WorkSpaceDropdown />,
  },
];

const Header = () => {
  return (
    <header
      id={'header'}
      className={
        'flex px-3 items-center box-border h-[60px] bg-main  text-white'
      }
    >
      {/*Base Left Nav*/}
      <div className="nav-left h-10 flex justify-center items-center gap-6">
        <Logo />
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/*Base Right Nav*/}
      <div className="nav-right ml-auto  flex justify-center items-center gap-3">
        <MoreAppDropdown />
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
