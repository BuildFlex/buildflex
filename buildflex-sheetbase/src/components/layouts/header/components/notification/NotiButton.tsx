import { useTheme } from '@/provider/theme-provider';
import { Dropdown } from 'antd';
import { Notification } from 'iconsax-react';
import NotiModal from './NotiModal';

const NotiButton = () => {
  const { theme } = useTheme();
  return (
    <Dropdown
      placement="bottomRight"
      className="flex items-center relative justify-center"
      dropdownRender={() => <NotiModal />}
      overlayClassName=" boxShadowSecondary noti-dropdown !rounded-lg"
    >
      <div className="notification rounded-full bg-white cursor-pointer size-9 flex items-center justify-center">
        <Notification size={16} color={theme.hexCode} />
      </div>
    </Dropdown>
  );
};

export default NotiButton;
