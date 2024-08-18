import React from 'react';
import { ArrowDown, ArrowDown2, SearchNormal1 } from 'iconsax-react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { IField } from '../../components/dropdown-render/GroupDropdownRender';
import { QuestionCircle } from '@/components/icons';
import { CustomInput } from '@/components/input/Input';
import { Switch } from 'antd';

interface FindFieldrops {
  searchPlaceholder: string;
  className?: string;
  fieldsClassName?: string;
  fieldClassName?: string;
  onSelectField: (field: IField) => void;
  fields: IField[];
  isCollapsed?: boolean;
  isShowQuestion?: boolean;
  isSwitch?: boolean;
}
const FindField = ({
  searchPlaceholder,
  fieldsClassName,
  className,
  onSelectField,
  fieldClassName,
  fields,
  isCollapsed,
  isShowQuestion,
  isSwitch = false,
}: FindFieldrops) => {
  const [isShowAll, setIsShowAll] = React.useState(!isCollapsed);
  const [search, setSearch] = React.useState('');

  const renderFields = () => {
    const filterDropdown = [...fields].filter((f) =>
      f.label.toLowerCase().includes(search.toLowerCase()),
    );
    if (filterDropdown.length === 0) {
      return (
        <div className="p-6 gap-2  justify-center items-center flex flex-col ">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300 text-center"
          >
            No file types or table names matching{' '}
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-500"
            >
              {search}
            </Text>
          </Text>
          <button
            className="h-[18px] border-none bg-transparent cursor-pointer w-fit px-0 "
            style={{ borderBottom: '1px solid #000000' }}
            onClick={() => setSearch('')}
          >
            <Text
              as="span"
              variant="B2-Medium"
              className="box-border text-[#000000]"
            >
              Clear
            </Text>
          </button>
        </div>
      );
    }
    return filterDropdown.slice(0, isShowAll ? fields.length : 5).map((f) => (
      <DropdownItem
        key={f.id}
        onClick={() => onSelectField(f)}
        className={cn(
          'text-neutral-dark-500 hover:bg-gray-50 cursor-pointer',
          fieldClassName,
        )}
      >
        {isSwitch && <Switch className="w-8 " size="small" />}
        <f.icon size={16} />
        <Text as="span" variant="B2-Regular">
          {f.label}
        </Text>
      </DropdownItem>
    ));
  };
  return (
    <div
      className={cn(
        'flex flex-col gap-1 box-border rounded-lg w-full ',
        className,
      )}
    >
      <CustomInput
        placeholder={searchPlaceholder}
        value={search}
        maxLength={40}
        onChange={(e) => setSearch(e.target.value)}
        prefixIcon={<SearchNormal1 size={16} color={'#6A758B'} />}
        suffixIcon={
          isShowQuestion && (
            <QuestionCircle
              color="currentColor"
              className="text-neutral-dark-300 ml-auto"
            />
          )
        }
        className="min-h-[36px] flex border-borderColor text-neutral-dark-500 !h-9 cursor-default gap-2 items-center"
      />
      <div
        className={cn('flex flex-col gap-1 overflow-hidden', fieldsClassName)}
      >
        <div
          className={cn(
            'flex flex-col gap-1 h-full flex-1 overflow-auto customScrollBarMedium',
          )}
        >
          {renderFields()}
        </div>
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
