import React, { useState } from 'react';
import { Grid1, Calendar, Gallery, Add, More } from 'iconsax-react';
import GridFilter from '../grid-filter/GridFilter';

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
    <div>Admin Management Content</div>
  </>
);
const CalendarView: React.FC = () => <div>Calendar View Content</div>;
const GalleryView: React.FC = () => <div>Gallery View Content</div>;

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

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const handleAddView = () => {
    console.log('Add new view');
    // Implement logic to add a new view
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2 p-2 bg-gray-100 overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`flex items-center px-3 py-2 rounded-md text-sm ${
                isActive
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={20} className="mr-2" />
              <span className="whitespace-nowrap">
                {truncateText(tab.title, 20)}
              </span>
              {isActive && (
                <More size={20} className="ml-2 text-gray-400 cursor-pointer" />
              )}
            </button>
          );
        })}
        <button
          className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-200"
          onClick={handleAddView}
        >
          <Add size={20} className="mr-2" />
          <span>Add view</span>
        </button>
      </div>
      <div className="p-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabComponent;
