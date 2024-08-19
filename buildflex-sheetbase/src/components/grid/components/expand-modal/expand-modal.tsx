import { CloseIcon, MoreVert } from '@/components/icons';
import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { Modal } from 'antd';
import {
  ArrowDown2,
  Link,
  Link2,
  Link21,
  MessageText,
  More,
  More2,
  SearchNormal1,
} from 'iconsax-react';
import ExpandHeader from './header';
import ExpandContent from './expand-content';
import ExpandSideBar from './expand-sidebar';
import { useState } from 'react';
interface ExpandModalProps {
  isModalShow: boolean;
  handleCancel: () => void;
}
const ExpandModal = ({ isModalShow, handleCancel }: ExpandModalProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const handleSideBarOpen = (isOpen: boolean) => {
    setIsSideBarOpen(isOpen);
  };
  return (
    <Modal
      style={{ top: '5svh' }}
      width={'100svw'}
      modalRender={(modal) => (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-fit mx-auto h-[90svh] overflow-hidden flex flex-col !p-0 box-border bg-white rounded-lg ant-modal-content"
        >
          <ExpandHeader
            handleShowSidebar={setIsSideBarOpen}
            handleClose={handleCancel}
          />
          <div className="flex h-full box-border w-full">
            <ExpandContent />
            {isSideBarOpen && <ExpandSideBar onClose={handleSideBarOpen} />}
          </div>
        </div>
      )}
      open={isModalShow}
      closeIcon={false}
      onCancel={handleCancel}
    />
  );
};

export default ExpandModal;
