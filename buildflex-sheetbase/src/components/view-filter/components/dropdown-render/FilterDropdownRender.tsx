import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Add } from 'iconsax-react';
import { useState } from 'react';
import ConditionGroupRow from '../../grid-filter/filter/components/ConditionGroupRow';
import ConditionRow from '../../grid-filter/filter/components/ConditionRow';
export interface FilterConditionProps {
  id: string;
  type: FilterConditionType;
  conditions?: FilterConditionProps[];
  className?: string;
}
export type FilterConditionType = 'condition' | 'condition-group';
const FilterCondition = [
  {
    id: '1',
    type: 'condition' as FilterConditionType,
  },
  {
    id: '2',
    type: 'condition-group' as FilterConditionType,
    className: 'bg-neutral-50',
    conditions: [
      {
        id: '21',
        type: 'condition' as FilterConditionType,
      },
      {
        id: '22',
        type: 'condition-group' as FilterConditionType,
        className: 'bg-neutral-100',
        conditions: [
          {
            id: '221',
            type: 'condition' as FilterConditionType,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    type: 'condition-group' as FilterConditionType,
    className: 'bg-neutral-50',
    conditions: [],
  },
  {
    id: '4',
    type: 'condition' as FilterConditionType,
  },
];
const FilterDropdownRender = () => {
  const [filterConditions] = useState<FilterConditionProps[]>(FilterCondition);
  return (
    <div className="flex flex-col gap-3 box-border p-3 rounded-lg min-w-[331px]  ">
      <DropdownItem className="text-neutral-dark-300 h-10">
        <Text as="span" variant="B2-Regular" className="">
          No filter conditions are applied
        </Text>
        <QuestionCircle className="cursor-pointer" color="currentColor" />
      </DropdownItem>
      {/* Conditions Rows */}
      {filterConditions.map((i, index) => {
        if (i.type === 'condition') {
          return <ConditionRow isFirstRow={index === 0} key={i.id} />;
        }
        return (
          <ConditionGroupRow
            className={i.className}
            key={i.id}
            condition={i.conditions || []}
          />
        );
      })}
      <div className="flex items-center whitespace-nowrap gap-3 mt-1">
        <button className="flex gap-2 items-center max-w-[117px] bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
          <Add size={16} />
          <Text as="span" variant="B2-Medium">
            Add conditions
          </Text>
        </button>
        <button className="flex gap-2 items-center max-w-[178px] w-full bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
          <Add size={16} />

          <Text as="span" variant="B2-Medium">
            Add condition group
          </Text>
          <QuestionCircle className="cursor-pointer" color="#6A758B" />
        </button>
      </div>
    </div>
  );
};

export default FilterDropdownRender;
