import CategoryIcon from '@/components/icons/category-icon';
import MobileAppIcon from '@/components/icons/mobile-app-icon';
import SheetbaseIcon from '@/components/icons/sheetbase-icon';
import WebAppIcon from '@/components/icons/web-app-icon';
import WorkflowIcon from '@/components/icons/workflow-icon';
import CategoryRow from './row';

const CategoryBody = () => {
  return (
    <div className="h-full flex flex-col gap-4 w-full  text-neutral-dark-500 px-1">
      {data.map((item, index) => (
        <CategoryRow key={`${item.name}-${index}`} {...item} />
      ))}
    </div>
  );
};

export default CategoryBody;

const data = [
  {
    name: 'Sheetbase',
    Icon: SheetbaseIcon,
    updated: '5 minutes ago',
    lastEditor: 'Michael',
    isStar: true,
  },
  {
    name: 'Web App',
    Icon: WebAppIcon,
    updated: '5 minutes ago',
    lastEditor: 'Michael',
  },
  {
    name: 'Workflow',
    Icon: WorkflowIcon,
    updated: '5 minutes ago',
    lastEditor: 'Michael',
  },
  {
    name: 'Mobile App',
    Icon: MobileAppIcon,
    updated: '5 minutes ago',
    lastEditor: 'Michael',
  },
  {
    name: 'Category',
    Icon: CategoryIcon,
    updated: '5 minutes ago',
    lastEditor: 'Michael',
  },
];
