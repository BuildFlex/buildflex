import { Input } from 'antd';
import React from 'react';
import { ArrowDown, ArrowDown2, SearchNormal1 } from 'iconsax-react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { IField } from '../../components/dropdown-render/GroupDropdownRender';

interface FindFieldrops {
  searchPlaceholder: string;
  className?: string;
  onSelectField: (field: IField) => void;
  fields: IField[];
  isCollapsed?: boolean;
}
const FindField = ({
  searchPlaceholder,
  className,
  onSelectField,
  fields,
  isCollapsed,
}: FindFieldrops) => {
  const [isShowAll, setIsShowAll] = React.useState(!isCollapsed);
  return (
    <div
      className={cn(
        'flex flex-col gap-1 box-border rounded-lg w-full ',
        className,
      )}
    >
      <Input
        placeholder={searchPlaceholder}
        prefix={<SearchNormal1 size={16} color={'#6A758B'} />}
        style={{
          padding: '0 8px',
          boxShadow: 'none',
          borderRadius: '4px',
        }}
        className="min-h-[36px] flex !text-neutral-dark-500 !h-9 !cursor-default gap-2 items-center sidebar__search"
      />
      <div className="flex flex-col gap-1 h-full flex-1 overflow-auto customScrollBarMedium">
        {fields.slice(0, isShowAll ? fields.length : 5).map((f) => (
          <DropdownItem
            key={f.id}
            onClick={() => onSelectField(f)}
            className="text-neutral-dark-500 hover:bg-gray-50 cursor-pointer"
          >
            <f.icon size={16} />
            <Text as="span" variant="B2-Regular">
              {f.label}
            </Text>
          </DropdownItem>
        ))}
      </div>
      {isCollapsed && (
        <div style={{ borderTop: '1px solid #EDEDED ' }}>
          <DropdownItem
            className="cursor-pointer w-fit"
            onClick={() => setIsShowAll((prev) => !prev)}
          >
            <ArrowDown2
              className={isShowAll ? 'rotate-180' : 'rotate-0'}
              size={16}
            />
            <Text as="span" variant="B2-Regular">
              {isShowAll ? 'Collapse' : 'See all fields'}
            </Text>
          </DropdownItem>
        </div>
      )}
    </div>
  );
};

export default FindField;
