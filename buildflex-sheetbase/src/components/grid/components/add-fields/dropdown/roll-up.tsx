import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { MoveToIcon, QuestionCircle, SparklesIcon } from '@/components/icons';
import CustomSelect from '@/components/select/custom-select';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { fields } from '@/components/view-filter/components/dropdown-render/HideFieldDropdownRender';
import ConditionRow from '@/components/view-filter/grid-filter/filter/components/ConditionRow';
import { cn } from '@/utils/cn';
import { Switch } from 'antd';
import { Add, ArrowDown2, ChartCircle, Danger } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownTab from '../components/dropdown-tab';
import HighlightedTextarea from '../components/highlight-textarea';

interface RollUpDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

export const RollUpDropdown: React.FC<RollUpDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [activeTab, setActiveTab] = useState('roll-up');
  const [isAvailableSource, setIsAvailableSource] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <ChartCircle size={16} />
        <Text as="span" variant="B2-Regular">
          Roll Up
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>

      <div className="flex gap-1 items-center">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Summarize data from linked records.
        </Text>
        <a
          href="#"
          className="w-fit h-[18px] flex items-center box-border"
          style={{ borderBottom: '1px solid #101828 ' }}
        >
          <Text as="span" variant="B2-Medium" className="text-neutral-dark-500">
            Learn more
          </Text>
        </a>
      </div>

      {/* Tab */}
      <div className="relative flex mt-1 gap-4 text-neutral-dark-300 after:z-[0] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-borderColor after:bottom-0 ">
        <DropdownTab
          label="Roll up"
          id="roll-up"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DropdownTab
          label="Formatting"
          id="formatting"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {/* Tab Content */}
      <div className="flex flex-col gap-2 mt-1">
        {activeTab === 'roll-up' ? (
          isAvailableSource ? (
            <NoSourceRollUp />
          ) : (
            <RollUpContent />
          )
        ) : (
          <FormatingContent />
        )}
      </div>
    </>
  );
};

const NoSourceRollUp = () => {
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

const FormatingContent = () => {
  return (
    <DropdownItem className="flex h-auto flex-col gap-2">
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Invalid configuration. Finish configuring your field in the formula tab,
        then try to format your formula again.
      </Text>
    </DropdownItem>
  );
};

const RollUpContent = () => {
  const [table, setTable] = useState<string | null>(null);
  const [tableField, setTableField] = useState<string | null>(null);
  const [conditions, setConditions] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col w-full gap-2 ">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Select rollup you want to roll up
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
      {tableField && (
        <>
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Aggregation formula which rolls up the values in each linked record
          </Text>
          <HighlightedTextarea
            initialValue={`ARRAYUNIQUE(values)`}
            keywords={[`ARRAYUNIQUE`, `DATETIME_DIFF`, `'days'`, `'d'`]}
          />
          <DropdownItem className="cursor-pointer w-fit">
            <SparklesIcon size={16} />
            <Text as="span" variant="B2-Regular">
              Generate formula
            </Text>
          </DropdownItem>
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
