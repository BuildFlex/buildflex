import React, { ComponentType, ReactNode } from 'react';
import FieldSelect from '../filter/components/FieldSelect';
import SortSelect from './SortSelect';
import Text from '@/components/typography/Text';
import { ArrowRight, Hashtag } from 'iconsax-react';
import { cn } from '@/utils/cn';
import { CloseIcon, MoreVert } from '@/components/icons';
import MoreButton from '../group/MoreButton';
import { fields as initialFields } from '../../components/dropdown-render/HideFieldDropdownRender';
import { IField } from '../../components/dropdown-render/GroupDropdownRender';
import FindField from './FindField';

const SortByList = ['Name', 'Phone', 'Email'];
interface SortConditionRowProps {
  setFields: React.Dispatch<React.SetStateAction<IField[]>>;
  field: IField;
  fields: IField[];
  isGroup?: boolean;
}
const SortConditionRow = ({
  setFields,
  field,
  fields,
  isGroup = false,
}: SortConditionRowProps) => {
  const handleRemoveField = () => {
    setFields((fields) => fields.filter((f) => f.id !== field.id));
  };
  const handleSelectField = (selectedfield: IField) => {
    setFields((prev) => {
      return prev.map((f) => {
        if (f.id === field.id) {
          return selectedfield;
        }
        return f;
      });
    });
  };
  const filterFields = initialFields.filter((field) => {
    return !fields.some((f) => f.id === field.id);
  });
  return (
    <div className="flex justify-between items-end h-9">
      <div className="flex gap-3 h-full">
        <SortSelect
          dropdownRender={(menu) => (
            <FindField
              fields={filterFields}
              onSelectField={handleSelectField}
              className="max-h-[300px]"
              searchPlaceholder="Find a field"
              isCollapsed
            />
          )}
          itemsList={fields.map((item) => ({
            label: <SortByLabel label={item.label} Icon={item.icon} />,
            value: item.label,
          }))}
          initialValue={{
            label: <SortByLabel label={field.label} Icon={field.icon} />,
            value: field.label,
          }}
          searchPlaceholder="Find a field"
          popupClassName="!p-3"
          className="!h-9 min-w-[226px]"
        />
        <SortSelect
          itemsList={[
            { label: <SortLabel isFirstToLast />, value: 'FirstToLast' },
            { label: <SortLabel />, value: 'LastToFirst' },
          ]}
          initialValue={{
            label: <SortLabel isFirstToLast />,
            value: 'FirstToLast',
          }}
          searchPlaceholder="Find a field"
          popupClassName="sort-select-dropdown !p-3"
          className="!h-9 min-w-[146px]"
        />
      </div>
      {isGroup && <MoreButton />}
      <div
        onClick={handleRemoveField}
        className="cursor-pointer text-neutral-dark-300 hover:text-neutral-dark-500 size-9 flex items-center justify-center"
      >
        <CloseIcon color="currentColor" />
      </div>
    </div>
  );
};

export default SortConditionRow;
export const SortByLabel = ({
  label,
  Icon,
}: {
  label: string;
  Icon: React.ElementType;
}) => {
  return (
    <div className={cn('flex gap-2 box-border items-center ')}>
      {<Icon size={16} /> ?? <Hashtag size={16} />}
      <Text as="span" variant="B2-Regular">
        {label}
      </Text>
    </div>
  );
};
const SortLabel = ({ isFirstToLast = false }: { isFirstToLast?: boolean }) => {
  return (
    <div
      className={cn(
        'flex gap-2 box-border my-auto items-center ',
        isFirstToLast
          ? 'flex-row justify-start'
          : 'flex-row-reverse justify-end',
      )}
    >
      <Text as="span" variant="B2-Regular">
        First
      </Text>
      <ArrowRight size={16} />
      <Text as="span" variant="B2-Regular">
        Last
      </Text>
    </div>
  );
};
