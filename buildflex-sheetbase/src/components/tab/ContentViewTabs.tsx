import React, { useState } from 'react';
import { Grid1, Calendar, Gallery, Add, More, Magicpen } from 'iconsax-react';
import GridFilter from '../view-filter/grid-filter/GridFilter';
import { MoreOutlined } from '@ant-design/icons';
import AIChatDrawer from '../extensions/ai-chat';
import FindAField from '../view-filter/grid-filter/filter/components/FindAField';

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
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const handleAddView = () => {
    console.log('Add new view');
    // Implement logic to add a new view
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center bg-gray-50 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`flex items-center p-2 text-sm border-none cursor-pointer ${
                isActive
                  ? 'bg-white text-blue-600'
                  : 'text-gray-600 bg-gray-50 hover:bg-white'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={16} className="mr-2" />
              <span className="whitespace-nowrap">
                {truncateText(tab.title, 20)}
              </span>
              {isActive && (
                <MoreOutlined
                  style={{ fontSize: '1.6rem', fontWeight: 600 }}
                  className="ml-2 text-gray-400 cursor-pointer"
                  rotate={180}
                />
              )}
            </button>
          );
        })}
        <button
          className="flex items-center px-3 py-2 text-neutral-dark-300 hover:bg-gray-200 border-none cursor-pointer"
          onClick={handleAddView}
        >
          <Add size={20} className="mr-2" />
          <span>Add view</span>
        </button>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={
            'flex items-center font-semibold px-5 py-2 bg-gradient-to-br from-gradient-sheet-base-start to-gradient-sheet-base-end text-white border-none cursor-pointer ml-auto rounded-tl-sm'
          }
        >
          <Magicpen size={16} className={'mr-2'} />
          Copilot
        </button>
        <AIChatDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </div>
      <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default TabComponent;
