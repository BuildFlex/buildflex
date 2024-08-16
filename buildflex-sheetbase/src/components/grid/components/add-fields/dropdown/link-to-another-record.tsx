import React from 'react';
import { Input, Switch } from 'antd';
import { Add, ArrowDown2, ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { MoveToIcon, QuestionCircle, SparklesIcon } from '@/components/icons';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import { cn } from '@/utils/cn';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { CustomInput } from '@/components/input/Input';

const tableList = ['table-1', 'table-2', 'table-3', 'table-4', 'table-5'];

interface LinkToAnotherRecordDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const SwitchWithLabel: React.FC<{
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  icon?: React.ReactNode;
  isTeam?: boolean;
}> = ({ id, label, checked, isTeam, onChange, icon }) => (
  <div className="flex gap-2 h-8 box-border w-full items-center">
    <Switch id={id} className="!w-8" size="small" onChange={onChange} />
    <label
      htmlFor={id}
      className={cn(
        'cursor-pointer',
        checked ? 'text-neutral-dark-500' : 'text-neutral-dark-300',
      )}
    >
      <Text as="span" variant="B2-Regular">
        {label}
      </Text>
    </label>
    {icon}
    {isTeam && <Tag name="Team" className="ml-0" />}
  </div>
);

const TableSelection: React.FC<{
  onChangeDropdown: (value: IField | null) => void;
  onSelectTable: (table: string) => void;
  onCreateNewTable: () => void;
}> = ({ onSelectTable, onCreateNewTable, onChangeDropdown }) => (
  <div
    className={cn(
      'flex flex-col gap-1 overflow-hidden max-h-[190px] p-[3px] pr-[8px] ring-[1px] ring-[#EDEDED] rounded',
    )}
  >
    <DropdownItem className={cn('text-neutral-dark-500 min-h-9 mr-1')}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => onChangeDropdown(null)}
      >
        <ArrowLeft2 size={16} />
        <Text as="span" variant="B2-Regular">
          Back
        </Text>
      </div>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Find a table to link records from
      </Text>
    </DropdownItem>
    <div
      className={cn(
        'flex flex-col gap-1 h-full flex-1 overflow-auto customScrollBarMedium',
      )}
    >
      {tableList.map((table) => (
        <DropdownItem
          key={table}
          onClick={() => onSelectTable(table)}
          className={cn(
            'text-neutral-dark-500 min-h-9 hover:bg-gray-50 cursor-pointer mr-1',
          )}
        >
          <Text as="span" variant="B2-Regular">
            {table}
          </Text>
        </DropdownItem>
      ))}
      <button
        onClick={onCreateNewTable}
        className={cn(
          'text-neutral-dark-500 flex gap-2 items-center px-2 bg-transparent border-none min-h-9 box-border hover:bg-gray-50 cursor-pointer mr-1',
        )}
      >
        <Add size={16} />
        <Text as="span" variant="B2-Regular">
          Create a new table
        </Text>
      </button>
    </div>
  </div>
);

const switchList = [
  {
    label: 'Allow linking to multiple records',
    id: 'allow-linking-to-multiple-records',
    icon: null,
  },
  {
    label: 'Limit record selection to a view',
    id: 'limit-record-selection-to-a-view',
    icon: null,
  },
  {
    label: 'Filter record selection by a condition',
    id: 'filter-record-selection-by-a-condition',
    icon: <QuestionCircle color="#6A758B" className="cursor-pointer" />,
    isTeam: true,
  },
  {
    label: 'Use AI to show top matches when selecting a record',
    id: 'use-ai-to-show-top-matches-when-selecting-a-record',
    icon: <SparklesIcon className="cursor-pointer" />,
    isTeam: true,
  },
];
const LinkToAnotherRecordDropdown: React.FC<
  LinkToAnotherRecordDropdownProps
> = ({ onChangeDropdown }) => {
  const [table, setTable] = React.useState<string | null>(null);
  const [isNewTable, setIsNewTable] = React.useState<boolean>(false);
  const [allowList, setAllowList] = React.useState<string[]>([]);

  const handleSetNewTable = () => {
    setIsNewTable(true);
    setTable('New Table');
  };

  const handleSetAllowList = (value: string) => {
    setAllowList((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  if (!table) {
    return (
      <TableSelection
        onSelectTable={setTable}
        onCreateNewTable={handleSetNewTable}
        onChangeDropdown={onChangeDropdown}
      />
    );
  }

  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer mr-1"
      >
        <MoveToIcon />
        <Text as="span" variant="B2-Regular">
          {` Link to ${table}`}
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        {` Link to records in the ${table} table.`}
      </Text>
      {isNewTable && (
        <DropdownItem className="h-fit flex-col gap-1 mt-1 p-0 text-neutral-dark-300 items-start">
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Name for the new table
          </Text>
          <CustomInput
            defaultValue={'New Table'}
            placeholder="Describe this field (optional)"
            className="h-"
          />
        </DropdownItem>
      )}

      <div className="flex flex-col h-full w-full box-border text-neutral-dark-300">
        {switchList.map((item) => (
          <SwitchWithLabel
            id={item.id}
            label={item.label}
            checked={allowList.includes(item.id)}
            onChange={() => handleSetAllowList(item.id)}
            icon={item.icon}
            isTeam={item.isTeam}
          />
        ))}
      </div>
    </>
  );
};

export default LinkToAnotherRecordDropdown;
