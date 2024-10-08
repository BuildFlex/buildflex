import { cn } from '@utils/cn';
import { ArrowRight2 } from 'iconsax-react';
import React, { useId } from 'react';
import Text, { TextVariant } from '../../../typography/Text';

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
  const id = useId();
  return (
    <nav className="flex items-center gap-3 ">
      {items.map((item, index) => (
        <div
          key={`${id}-${index}`}
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
          {!item.isLast && <ArrowRight2 className="text-white" size="16" />}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
