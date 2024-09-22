import { CustomInput } from '@/components/common/input/Input';
import { CloseIcon, SparklesIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Modal } from 'antd';
import { SearchNormal1 } from 'iconsax-react';
import React from 'react';
import QuicklyUploadContent from './quickly-upload-content';
import RecommendContent from './recommend-content';
const sidebarTabs = [
  { title: 'My Templates', key: 'my-templates' },
  { title: 'Share With Me', key: 'share-with-me' },
  {
    title: 'Quickly Upload',
    key: 'quickly-upload',
    subTitle:
      'You can import data into Sheetbase by uploading a file or coppy and pasting data directly from a spreadsheet, Choose one of the below sources to get started.',
  },
  { key: 'divider' },
  { title: 'Recommend', key: 'recommend' },
  { title: 'AI Assistant', key: 'ai-assistant', isSparkles: true },
  { title: 'Mini Apps', key: 'mini-apps', isSparkles: true },
  { title: 'Project Management', key: 'project-management' },
  { title: 'Meetings', key: 'meetings' },
  { title: 'Team Collabration', key: 'team-collabration' },
  { title: 'Sales', key: 'sales' },
  { title: 'Content Creation', key: 'content-creation' },
  { title: 'Marketing', key: 'marketing' },
  { title: 'Work Planning', key: 'work-planning' },
  { title: 'Product', key: 'product' },
  { title: 'Human Resources', key: 'human-resources' },
  { title: 'Education', key: 'education' },
  { title: 'Personal', key: 'personal' },
];

interface CreateCategoryProps {
  className?: string;
  handleCancel: () => void;
  isOpen: boolean;
}
const renderContent = (key: string) => {
  switch (key) {
    case 'recommend':
      return <RecommendContent />;
    case 'quickly-upload':
      return <QuicklyUploadContent />;
    default:
      return null;
  }
};
const AddSheetBaseModal = ({ handleCancel, isOpen }: CreateCategoryProps) => {
  const [activeTab, setActiveTab] = React.useState(sidebarTabs[4]);
  return (
    <Modal
      width={1324}
      style={{ top: '5svh' }}
      modalRender={() => (
        <div className="w-full !p-0 h-[90svh] flex flex-col box-border ant-modal-content">
          {/* Header */}
          <div className="w-full items-center border-b border-borderColor h-[60px] px-3 justify-between flex">
            <CustomInput
              placeholder="Search"
              prefixIcon={<SearchNormal1 size={16} />}
              className="max-w-[400px]"
            />
            <button
              onClick={handleCancel}
              className="border-none size-5 flex items-center justify-center p-0 outline-none bg-transparent cursor-pointer"
            >
              <CloseIcon className="size-5" color="#3E4D65" />
            </button>
          </div>
          {/* Content */}
          <AddSheetBaseModalContent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      open={isOpen}
      closeIcon={false}
      onCancel={handleCancel}
    />
  );
};
export default AddSheetBaseModal;
const AddSheetBaseModalContent = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: any;
  setActiveTab: any;
}) => {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <div className=" flex flex-col overflow-auto customScrollBar p-3 gap-1 w-[220px] border-r border-borderColor">
        {sidebarTabs.map((tab) =>
          tab.key === 'divider' ? (
            <div
              key={`divider-${tab.key}`}
              className="h-[1px] w-full bg-borderColor min-h-[1px] my-2"
            />
          ) : (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'min-h-9 w-full rounded px-2 flex items-center gap-2',
                activeTab.key === tab.key
                  ? 'bg-neutral-dark-500 text-white'
                  : 'text-neutral-dark-500',
              )}
            >
              {tab.isSparkles && <SparklesIcon />}
              <Text as="span" variant="B2-Medium">
                {tab.title}
              </Text>
            </button>
          ),
        )}
      </div>
      {/* Section */}

      <div className=" flex flex-col p-4 gap-4 flex-1 overflow-auto customScrollBar">
        <div className="flex flex-col gap-1">
          <Text as="p" variant="B1-Semibold">
            {activeTab.title}
          </Text>
          {activeTab.subTitle && (
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-400"
            >
              {activeTab.subTitle}
            </Text>
          )}
        </div>
        {renderContent(activeTab.key)}
      </div>
    </div>
  );
};
