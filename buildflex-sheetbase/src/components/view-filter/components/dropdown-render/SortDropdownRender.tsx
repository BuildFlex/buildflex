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
import AddSubGroup from '../../grid-filter/sort/AddSortRow';
import FindField from '../../grid-filter/sort/FindField';
import { fields as initialFields } from './HideFieldDropdownRender';
import Button from '@/components/button/Button';

export type FilterConditionType = 'condition' | 'condition-group';

export interface IField {
  id: string;
  icon: React.ElementType;
  label: string;
}
const SortDropdownRender = () => {
  const [fields, setFields] = useState<IField[]>([]);
  const handleSelectField = (field: IField) => {
    setFields([...fields, field]);
  };
  const handleCancel = () => {
    const btn = document.getElementById('sort');
    btn?.click();
  };
  return (
    <div className="flex flex-col gap-3 box-border p-3 rounded-lg min-w-[320px] w-auto max-w-[480px]  ">
      <DropdownItem
        style={{ borderBottom: '1px solid #EDEDED' }}
        className="text-neutral-dark-300 h-10 rounded-none"
      >
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-500">
          Sort by
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
            />
          ))}

          {fields.length < 3 && (
            <AddSubGroup fields={fields} setFields={setFields} />
          )}
          <div className="flex justify-between items-center ">
            <DropdownItem className=" w-fit px-0 text-neutral-dark-300 ">
              <Switch id="automatically-sort-records" size="small" />
              <label
                htmlFor="automatically-sort-records"
                className="cursor-pointer"
              >
                <Text as="span" variant="B2-Regular" className="">
                  Automatically sort records
                </Text>
              </label>
            </DropdownItem>
            <div className="flex gap-3 items-center">
              <button
                onClick={handleCancel}
                className="px-4 py-[6px] h-9 box-border rounded-lg cursor-pointer text-neutral-dark-300 bg-transparent border-none outline-none"
              >
                <Text as="span" variant="B2-Regular">
                  Cancel
                </Text>
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-[6px] h-9 box-border rounded-lg text-white cursor-pointer bg-theme-ocean-blue border-none outline-none"
              >
                <Text as="span" variant="B2-Medium">
                  Sort
                </Text>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SortDropdownRender;
