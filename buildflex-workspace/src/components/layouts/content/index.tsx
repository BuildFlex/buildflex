import MobileAppIcon from '@/components/icons/mobile-app-icon';
import SheetbaseIcon from '@/components/icons/sheetbase-icon';
import WebAppIcon from '@/components/icons/web-app-icon';
import WorkflowIcon from '@/components/icons/workflow-icon';
import Title from '@/components/typography/Title';
import React from 'react';
import AddCategoryButton from './add-category-button';

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
const ContentWrapper = () => {
  return (
    <section className="mx-auto w-fit py-10 ] flex flex-col gap-6 ">
      <h1 className="font-lato leading-[26px] text-xl font-bold">
        My Workspace
      </h1>

      <div className="flex items-center gap-6">
        {AddCategoryList.map((item, index) => (
          <AddCategoryButton key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ContentWrapper;
