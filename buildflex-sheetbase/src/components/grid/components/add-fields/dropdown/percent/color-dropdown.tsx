import { QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { FilterConditionType } from '@/components/view-filter/components/dropdown-render/FilterDropdownRender';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import { Add, ArrowDown2 } from 'iconsax-react';
import ColorPercentConditionCollapse from './color-percent-condition-collapse';
export interface IColorCondition {
  key: string;
  label?: string;
  conditions: {
    id: string;
    type: FilterConditionType;
  }[];
  backgroudColor: string;
  color: string;
  isLast: boolean;
}
const filterConditions = [
  {
    id: '1',
    type: 'condition' as FilterConditionType,
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

const ColorDropdown = () => {
  const colorConditions = [
    {
      key: '1',
      label: 'Where = 123%',
      conditions: filterConditions,
      backgroudColor: '#FB8C00',
      color: 'white',
      isLast: false,
    },
    {
      key: '2',
      conditions: filterConditions2,
      backgroudColor: '#00897B',
      color: 'white',
      isLast: false,
    },
    {
      key: '3',
      conditions: filterConditions3,
      backgroudColor: '#8E24AA',
      color: 'white',
      isLast: true,
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Color
      </Text>
      <Dropdown
        trigger={['click']}
        placement="topRight"
        className="flex items-center relative justify-center"
        overlayClassName="   "
        dropdownRender={() => (
          <div className="rounded-lg w-[573px] box-border max-h-[300px] customScrollBar overflow-auto boxShadowSecondary flex flex-col gap-1 bg-white ">
            {/* Header */}
            <div className="p-3 gap-3 box-border h-[56px] text-neutral-dark-300 flex items-center justify-start">
              <Text as="span" variant="B2-Regular">
                Progress bars are assigned the first color that they match.
              </Text>
              <QuestionCircle
                size={16}
                className="size-5"
                color="currentColor"
              />
            </div>
            {/* Conditions Rows */}
            <ColorPercentConditionCollapse items={colorConditions} />
            {/* Footer */}
            <div className="p-3 gap-3 cursor-pointer box-border h-[56px] text-neutral-dark-300 flex items-center justify-start">
              <div className="items-center flex gap-2">
                <Add size={16} />
                <Text as="span" variant="B2-Regular">
                  Add color
                </Text>
              </div>
              <div className="items-center cursor-pointer flex gap-2">
                <Add size={16} />
                <Text as="span" variant="B2-Regular">
                  Set default color
                </Text>
              </div>
            </div>
          </div>
        )}
      >
        <div
          className={cn(
            'h-9 px-2 relative cursor-pointer  w-full box-border rounded flex items-center gap-2',
          )}
          style={{ border: '1px solid #EDEDED' }}
        >
          <Text as="span" variant="B2-Regular">
            {colorConditions.length === 0
              ? 'None'
              : `${colorConditions.length} condition`}
          </Text>
          <ArrowDown2 className="ml-auto" size={16} />
        </div>
      </Dropdown>
    </div>
  );
};
export default ColorDropdown;
