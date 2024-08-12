import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Input, Switch } from 'antd';
import { Add, Category2, SearchNormal1 } from 'iconsax-react';
import React, { ReactNode, useState } from 'react';
import { Eye, More, Text as TextIcon } from 'iconsax-react';
import ConditionRow from '../../grid-filter/filter/components/ConditionRow';
import ConditionGroupRow from '../../grid-filter/filter/components/ConditionGroupRow';
import SortConditionRow from '../../grid-filter/sort/SortConditionRow';
import AddSortRow from '../../grid-filter/sort/AddSortRow';
import FindField from '../../grid-filter/sort/FindField';
import { fields as initialFields } from './HideFieldDropdownRender';

export type FilterConditionType = 'condition' | 'condition-group';

export interface IField {
  id: string;
  icon: React.ElementType;
  label: string;
}
const GroupDropdownRender = () => {
  const [fields, setFields] = useState<IField[]>([]);
  const handleSelectField = (field: IField) => {
    setFields([...fields, field]);
  };
  return (
    <div className="flex flex-col gap-3 box-border p-3 rounded-lg min-w-[320px] w-auto max-w-[480px]  ">
      <DropdownItem
        style={{ borderBottom: '1px solid #EDEDED' }}
        className="text-neutral-dark-300 h-10 rounded-none"
      >
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-500">
          Group by
        </Text>
        <QuestionCircle className="cursor-pointer" color="currentColor" />
        <DropdownItem className="ml-auto cursor-pointer">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Collapse all
          </Text>
        </DropdownItem>
        <DropdownItem className="cursor-pointer">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Expand all
          </Text>
        </DropdownItem>
      </DropdownItem>
      {/* Conditions Rows */}
      {fields.length === 0 ? (
        <FindField
          fields={initialFields}
          onSelectField={handleSelectField}
          className="max-h-[300px]"
          searchPlaceholder="Find a field"
        />
      ) : (
        <>
          {fields.map((field) => (
            <SortConditionRow
              fields={fields}
              key={field.id}
              field={field}
              setFields={setFields}
              isGroup
            />
          ))}

          {fields.length < 3 && (
            <AddSortRow
              buttonName="Add sub group"
              fields={fields}
              setFields={setFields}
            />
          )}

          <DropdownItem className=" w-fit px-0 text-neutral-dark-300 ">
            <Category2 size={16} />
            <Text as="span" variant="B2-Regular" className="">
              Summarize your records further with the{' '}
              <Text
                as="span"
                variant="B2-Regular"
                className="text-primary-700 cursor-pointer"
              >
                pivot table extension.
              </Text>
            </Text>
          </DropdownItem>
        </>
      )}
    </div>
  );
};

export default GroupDropdownRender;
