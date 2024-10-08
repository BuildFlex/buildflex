import { CustomInput } from '@/components/common/input/Input';
import MobileAppIcon from '@/components/icons/mobile-app-icon';
import SheetbaseIcon from '@/components/icons/sheetbase-icon';
import WebAppIcon from '@/components/icons/web-app-icon';
import WorkflowIcon from '@/components/icons/workflow-icon';
import { SearchNormal1 } from 'iconsax-react';
import React from 'react';
import AddCategoryButton from './add-category-button';
import AddSheetBaseModal from './modal/add-sheet-base/add-sheetbase-modal';
import CreateCategory from './modal/create-category';
import CategoryTab from './tab/category-tab';
import CategoryBody from './table/body';
import CategoryFooter from './table/footer';
import CategoryHeader from './table/header';
import NoContent from './table/no-content';

const AddCategoryList = [
  {
    title: 'Sheetbase',
    icon: <SheetbaseIcon />,
  },
  {
    title: 'Web App',
    icon: <WebAppIcon />,
  },
  {
    title: 'Workflow',
    isComingSoon: true,
    icon: <WorkflowIcon />,
  },
  {
    title: 'Mobile App',
    icon: <MobileAppIcon />,
    isComingSoon: true,
  },
];
const tabs = ['All', 'Recent', 'Category', 'Starred', 'Trash'];
const ContentWrapper = () => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [isShowModal, setIsShowModal] = React.useState(false);
  const handleShowModal = () => setIsShowModal(true);
  const handleCancel = () => setIsShowModal(false);
  return (
    <section className="mx-auto flex-1 p-6 w-full max-w-[1320px]  h-full flex flex-col gap-6 ">
      <h1 className="font-lato leading-[26px] text-xl font-bold">
        My Workspace
      </h1>
      {/* Add Category Button */}
      <div className="flex items-center gap-6">
        {AddCategoryList.map((item, index) => (
          <AddCategoryButton
            onClick={item.title === 'Sheetbase' ? handleShowModal : undefined}
            key={`${item.title}-${index}`}
            {...item}
          />
        ))}
      </div>
      <div className="flex flex-col flex-1 h-full  gap-4">
        {/* Tabs */}
        <div className="relative   border-b border-borderColor border-solid  h-[52px] flex items-start  ">
          {tabs.map((tab, index) => (
            <CategoryTab
              key={tab}
              id={tab}
              label={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
          {/* Search - Add button */}
          <div className="ml-auto flex items-center gap-3">
            <CustomInput
              placeholder="Search"
              className="bg-white max-w-[400px] "
              prefixIcon={
                <SearchNormal1 className="text-neutral-dark-300 " size={16} />
              }
            />
            <CreateCategory />
          </div>
        </div>

        {/* Content */}
        <div className="flex  flex-1  h-full flex-col gap-4">
          <CategoryHeader />
          {activeTab === 'All' ? (
            <>
              <CategoryBody />
              <CategoryFooter />
            </>
          ) : (
            <NoContent />
          )}
        </div>
      </div>
      <AddSheetBaseModal handleCancel={handleCancel} isOpen={isShowModal} />
    </section>
  );
};

export default ContentWrapper;
