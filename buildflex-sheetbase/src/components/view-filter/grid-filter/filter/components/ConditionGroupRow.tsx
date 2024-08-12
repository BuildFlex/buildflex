import { MoveIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Input, Select } from 'antd';
import { Add, Trash } from 'iconsax-react';
import React from 'react';
import FieldSelect from './FieldSelect';
import ConditionRow from './ConditionRow';
import { cn } from '@/utils/cn';
import AddConditionDropdown from './AddConditionDropdown';
import { FilterConditionProps } from '@/components/view-filter/components/dropdown-render/FilterDropdownRender';
interface ConditionGroupRowProps {
  isFirstRow?: boolean;
  condition: FilterConditionProps[];
  className?: string;
}
const ConditionGroupRow = ({
  isFirstRow = false,
  condition,
  className,
}: ConditionGroupRowProps) => {
  return (
    <div className=" min-h-8 flex gap-3 w-full ">
      <FieldSelect
        style={{
          border: '1px solid #EDEDED',
          borderRadius: '4px',
          width: '80px',
          height: '32px',
        }}
        popupClassName="!w-[200px] filter-select"
        initialValue="and"
        itemsList={['or', 'and']}
        searchPlaceholder="Find a field"
      />
      <div
        style={{ border: '1px solid #EDEDED' }}
        className={cn(
          'flex flex-col bg-neutral-50 flex-1  items-center rounded min-h-10 box-border p-2',
          className,
        )}
      >
        {condition.length === 0 ? (
          <div className="flex items-center h-full w-full justify-between">
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              Drag conditions here to add them to this group
            </Text>
            <div className=" flex ml-auto items-center gap-3 text-neutral-dark-500">
              {/* <Add size={16} className=" cursor-pointer" /> */}
              <AddConditionDropdown />
              <Trash size={16} className=" cursor-pointer" />
              <MoveIcon className="cursor-move" />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col gap-3">
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              Any of the following are true
            </Text>
            {condition.map((i, index) => {
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ConditionGroupRow;
