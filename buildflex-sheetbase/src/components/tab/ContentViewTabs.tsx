import React, { useState } from 'react';
import { Grid1, Calendar, Gallery, Add, More, Magicpen } from 'iconsax-react';
import GridFilter from '../view-filter/grid-filter/GridFilter';
import AIChatDrawer from '../extensions/ai-chat';
import Grid from '../grid/Grid';
import { cn } from '@/utils/cn';
import { MoreVert, SparklesIcon } from '../icons';
import Text from '../typography/Text';
import { useTheme } from '@/provider/theme-provider';
import './grid-filter.css';
import GridUI from '../grid/GridUI';
interface Tab {
  id: string;
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

// Giả lập các component content
const AdminManagement: React.FC = () => (
  <>
    <GridFilter />
    <GridUI />
    {/* <Grid /> */}
  </>
);
const CalendarView: React.FC = () => (
  <>
    <GridFilter />
  </>
);
const GalleryView: React.FC = () => (
  <>
    <GridFilter />
  </>
);

const tabs: Tab[] = [
  {
    id: '1',
    icon: Grid1,
    title: 'Admin managements',
    content: <AdminManagement />,
  },
  {
    id: '2',
    icon: Calendar,
    title: 'Calendar view',
    content: <CalendarView />,
  },
  { id: '3', icon: Gallery, title: 'Gallery view', content: <GalleryView /> },
];

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme } = useTheme();
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const handleAddView = () => {
    console.log('Add new view');
    // Implement logic to add a new view
  };

  return (
    <div className="flex flex-col  flex-1 h-full ">
      <div className=" flex items-center box-border bg-gray-50 overflow-x-auto min-h-[32px]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={cn(
                `flex items-center h-8  gap-2 p-2 text-sm border-none cursor-pointer`,
                isActive
                  ? 'bg-white text-blue-600'
                  : 'text-gray-600 bg-gray-50 hover:bg-white',
              )}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={16} className="mr-2" />
              <Text
                as="span"
                variant="B2-Regular"
                className="whitespace-nowrap"
              >
                {truncateText(tab.title, 20)}
              </Text>
              {isActive ? (
                <MoreVert className="ml-auto cursor-pointer" />
              ) : (
                <div className="h-[14px] bg-neutral-dark-300 w-[1px] mx-[7.5px] " />
              )}
            </button>
          );
        })}
        <button
          className="flex items-center px-2 h-8 bg-transparent text-neutral-dark-300 hover:bg-gray-100 border-none cursor-pointer"
          onClick={handleAddView}
        >
          <Add size={16} className="mr-2" />
          <Text as="span" variant="B2-Regular" className="whitespace-nowrap">
            Add view
          </Text>
        </button>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={cn(
            'flex gap-2 items-center px-2 py-[7px] box-border  text-white border-none cursor-pointer ml-auto rounded-tl',
            theme.linearBackground,
          )}
        >
          <SparklesIcon />
          <Text as="span" variant="B2-Regular" className="h-[18px] w-[72px]">
            AI chat tool
          </Text>
        </button>
        <AIChatDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </div>
      <div className="flex-1 flex flex-col">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabComponent;
