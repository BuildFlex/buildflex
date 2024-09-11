import { MoreIcon, StarIcon } from '@/components/icons';
import SheetbaseIcon from '@/components/icons/sheetbase-icon';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Checkbox } from 'antd';
import { Add, Star, Star1 } from 'iconsax-react';
import React from 'react';
import CategoryRow from './row';
import CategoryIcon from '@/components/icons/category-icon';
import MobileAppIcon from '@/components/icons/mobile-app-icon';
import WorkflowIcon from '@/components/icons/workflow-icon';
import WebAppIcon from '@/components/icons/web-app-icon';

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
