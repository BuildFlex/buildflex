import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { MoveToIcon, QuestionCircle } from '@/components/icons';
import CustomSelect from '@/components/select/custom-select';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import ConditionRow from '@/components/view-filter/grid-filter/filter/components/ConditionRow';
import { cn } from '@/utils/cn';
import { Switch } from 'antd';
import { Add, ArrowDown2, Danger, Math } from 'iconsax-react';
import React, { useState } from 'react';

const TableList = [
  { label: 'Table 1', value: 'table-1', prefix: MoveToIcon },
  { label: 'Table 2', value: 'table-2', prefix: MoveToIcon },
  { label: 'Table 3', value: 'table-3', prefix: MoveToIcon },
  { label: 'Table 4', value: 'table-4', prefix: MoveToIcon },
];

interface CountDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const NoSourceCount = () => {
  return (
    <DropdownItem className="h-auto text-neutral-dark-300">
      <Danger size={16} color="#FCBF25" />
      <Text as="span" variant="B2-Regular">
        No available sources to roll up. Add a rollup source, then try to
        configure your rollup again.
      </Text>
    </DropdownItem>
  );
};

const CountContent = () => {
  const [table, setTable] = useState<string | null>(null);
  const [conditions, setConditions] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col w-full gap-2 ">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Select count source
        </Text>
        <CustomSelect
          placeholder="Choose a field in this table"
          position="top"
          onChange={(value) => setTable(value.value)}
          dropdownClassName="max-h-[130px] overflow-auto customScrollBar"
          itemsList={TableList}
        />
      </div>
      {table && (
        <div
          className={cn(
            'flex max-w-[476px] items-center gap-2',
            !conditions && 'max-w-[476px',
          )}
        >
          <Switch onChange={setConditions} className="w-8" size="small" />
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300 text-wrap"
          >
            Only include linked records from the{' '}
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-500"
            >
              {table}
            </Text>{' '}
            table that meet certain conditions
          </Text>
        </div>
      )}

      {conditions && (
        <>
          <ConditionRow isFirstRow className="no-border-select" />
          <div className="flex items-center whitespace-nowrap gap-3 ml-20">
            <button className="flex gap-2 items-center  bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
              <Add size={16} />
              <Text as="span" variant="B2-Medium">
                Add conditions
              </Text>
            </button>
            <button className="flex gap-2 items-center  w-full bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
              <Add size={16} />

              <Text as="span" variant="B2-Medium">
                Add condition group
              </Text>
              <QuestionCircle className="cursor-pointer" color="#6A758B" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export const CountDropdown: React.FC<CountDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [isAvailableSource] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <Math size={16} />
        <Text as="span" variant="B2-Regular">
          Count
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>

      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Count the number of linked records.
      </Text>

      {/*  Content */}
      <div className="flex flex-col gap-2 mt-1">
        {isAvailableSource ? <NoSourceCount /> : <CountContent />}
      </div>
    </>
  );
};
