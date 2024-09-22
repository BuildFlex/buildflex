import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Add } from 'iconsax-react';
import React from 'react';
import { ColorTab } from '../../components/dropdown-render/ColorDropdownRender';
import { FilterConditionType } from '../../components/dropdown-render/FilterDropdownRender';
import ColorConditionCollapse from './color-condition-collapse';
const filterConditions = [
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
const filterConditions2 = [
  {
    id: '1',
    type: 'condition' as FilterConditionType,
  },
  {
    id: '4',
    type: 'condition' as FilterConditionType,
  },
];
const filterConditions3 = [
  {
    id: '1',
    type: 'condition' as FilterConditionType,
  },
];
const ColorConditionsTab = ({
  className,
}: {
  className?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<ColorTab | null>>;
}) => {
  const colorConditions = [
    {
      key: '1',
      label: 'Define a condition',
      conditions: filterConditions,
      backgroudColor: '#FB8C00',
      color: 'white',
      isLast: false,
    },
    {
      key: '2',
      label: 'Define a condition',
      conditions: filterConditions2,
      backgroudColor: '#00897B',
      color: 'white',
      isLast: false,
    },
    {
      key: '3',
      label: 'Define a condition',
      conditions: filterConditions3,
      backgroudColor: '#8E24AA',
      color: 'white',
      isLast: true,
    },
  ];

  return (
    <div
      className={cn(
        'share-main-tab duration-500 transition-transform flex flex-col min-w-[280px] p-0 box-border',
        className,
      )}
    >
      {/*   Header */}
      <DropdownItem className="p-3 h-[56px] box-border text-neutral-dark-300">
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          Records are assigned the first color that they match.
        </Text>
        <QuestionCircle className="cursor-pointer" color="currentColor" />
      </DropdownItem>

      {/* Conditions Rows */}
      <ColorConditionCollapse items={colorConditions} />
      {/* Footer */}
      <div className="flex items-center p-3 h-[56px] box-border whitespace-nowrap gap-3 mt-1">
        <button className="flex px-0 gap-2 items-center max-w-[117px] bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
          <Add size={16} />
          <Text as="span" variant="B2-Medium">
            Add color
          </Text>
        </button>
        <button className="flex  px-0 gap-2 items-center max-w-[178px] w-full bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
          <Add size={16} />

          <Text as="span" variant="B2-Medium">
            Add default color
          </Text>
        </button>
      </div>
    </div>
  );
};

export default ColorConditionsTab;
