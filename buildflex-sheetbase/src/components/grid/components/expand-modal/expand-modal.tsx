import { Modal } from 'antd';
import { useState } from 'react';
import ExpandContent from './expand-content';
import ExpandSideBar from './expand-sidebar';
import ExpandHeader from './header';
interface ExpandModalProps {
  isModalShow: boolean;
  handleCancel: () => void;
}
const ExpandModal = ({ isModalShow, handleCancel }: ExpandModalProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <Modal
      style={{ top: '5svh' }}
      width={'100svw'}
      modalRender={() => (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-fit mx-auto h-[90svh]  flex flex-col !p-0 box-border bg-white rounded-lg ant-modal-content"
        >
          <ExpandHeader
            handleShowSidebar={setIsSideBarOpen}
            handleClose={handleCancel}
          />
          <div className="flex h-full box-border w-full">
            <ExpandContent />
            {isSideBarOpen && <ExpandSideBar />}
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
