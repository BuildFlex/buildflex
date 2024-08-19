import React, { useState } from 'react';
import { Add, ArrowDown2, Danger, Math, SearchStatus } from 'iconsax-react';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CheckBoxIcon, MoveToIcon, QuestionCircle } from '@/components/icons';
import CustomSelect from '@/components/select/custom-select';
import { Switch } from 'antd';
import ConditionRow from '@/components/view-filter/grid-filter/filter/components/ConditionRow';
import { cn } from '@/utils/cn';
import DropdownTab from '../components/dropdown-tab';
import { fields } from '@/components/view-filter/components/dropdown-render/HideFieldDropdownRender';
import Select from '@/components/select/select';

interface LookUpDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

export const LookUpDropdown: React.FC<LookUpDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [isAvailableSource, setIsAvailableSource] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState('roll-up');
  const [isLimit, setIsLimit] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(1);
  const [limitTo, setLimitTo] = useState<string>('First');
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <SearchStatus size={16} />
        <Text as="span" variant="B2-Regular">
          See values from a field in a linked record.
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>

      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Count the number of linked records.
      </Text>
      {/* Tab */}
      <div className="relative flex mt-1 gap-4 text-neutral-dark-300 after:z-[0] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-borderColor after:bottom-0 ">
        <DropdownTab
          label="Configuration"
          id="configuration"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DropdownTab
          label="Formatting"
          id="formatting"
          disabled
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {/*  Content */}
      <div className="flex flex-col gap-2 mt-1">
        {isAvailableSource ? <NoSourceLookUp /> : <LookUpContent />}
      </div>
      {/* Limit number */}
      <div className={cn('flex max-w-[476px] items-center gap-2 mt-1')}>
        <Switch onChange={setLimit} className="w-8" size="small" />
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-500 ">
          Limit the number of items shown
        </Text>
      </div>
      {limit && (
        <div className="flex gap-2 items-center ml-8">
          <DropdownItem className="w-[129px]">
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-500 "
            >
              Limit to the
            </Text>
          </DropdownItem>
          <div className="flex items-center">
            <Select
              position="top"
              onChange={(value) => setLimitTo(value)}
              className="h-8 rounded-r-none w-[129px]"
              dropdownClassName="max-h-[180px] w-[226px]"
              initialValue="First"
              itemsList={['First', 'Last']}
              dropdownItemRender={(item) => (
                <>
                  {item}
                  {item === limitTo && (
                    <CheckBoxIcon color="#101828" className="ml-auto" />
                  )}
                </>
              )}
            />
            <DropdownItem
              className="h-8 rounded-l-none min-w-[60px] w-[60px] flex items-center justify-center"
              style={{ border: '1px solid #EDEDED ', borderLeft: 'none' }}
            >
              {limit}
            </DropdownItem>
          </div>
        </div>
      )}
    </>
  );
};

const NoSourceLookUp = () => {
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

const LookUpContent = () => {
  const [table, setTable] = useState<string | null>(null);
  const [tableField, setTableField] = useState<string | null>(null);
  const [conditions, setConditions] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col w-full gap-2 ">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Select lookup source
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
        <>
          <div className="flex flex-col w-full gap-2 ">
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              <Text
                as="span"
                variant="B2-Regular"
                className="text-neutral-dark-500"
              >
                {table}
              </Text>{' '}
              field you want to roll up
            </Text>
            <CustomSelect
              placeholder="Choose a field in this table"
              position="top"
              onChange={(value) => setTableField(value.value)}
              dropdownClassName="max-h-[130px] overflow-auto customScrollBar"
              itemsList={fields.map((field) => {
                return {
                  ...field,
                  value: field.id,
                  prefix: field.icon,
                };
              })}
            />
          </div>
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
        </>
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

const TableList = [
  { label: 'Table 1', value: 'table-1', prefix: MoveToIcon },
  { label: 'Table 2', value: 'table-2', prefix: MoveToIcon },
  { label: 'Table 3', value: 'table-3', prefix: MoveToIcon },
  { label: 'Table 4', value: 'table-4', prefix: MoveToIcon },
];
