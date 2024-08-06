import React from 'react';
import Text, { TextVariant } from '../../../typography/Text';
import { ArrowRight2 } from 'iconsax-react';
import { cn } from '@utils/cn';

interface BreadcrumbItem {
  text?: string;
  variant: TextVariant;
  isLast?: boolean;
  className?: string;
  component?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-sm ">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'workspace__nav-item flex items-center gap-2 cursor-pointer',
            item.isLast && 'truncate w-max',
            item.className,
          )}
        >
          {item.component || (
              <Text variant={item.variant} as={'span'}>
                {item.text}
              </Text>
            ) ||
            'Breadcumb Item'}
          {!item.isLast && <ArrowRight2 className="text-white" size="12" />}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
