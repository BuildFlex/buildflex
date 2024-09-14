import {
  EqualSignIcon,
  GreaterThanIcon,
  GreaterThanOrEqualIcon,
  LessThanIcon,
  LessThanOrEqualIcon,
  MoveIcon,
  NotEqualSignIcon,
} from '@/components/icons';
import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import FieldSelect from '@/components/view-filter/grid-filter/filter/components/FieldSelect';
import { cn } from '@/utils/cn';
import { Trash } from 'iconsax-react';
interface PercentConditionRowProps {
  isFirstRow?: boolean;
  className?: string;
}
const PercentConditionRow = ({
  isFirstRow = false,
  className,
}: PercentConditionRowProps) => {
  return (
    <div className={cn(' h-8 flex gap-3', className)}>
      {isFirstRow ? (
        <div className="h-full w-20 px-2 py-[7px] box-border  flex items-center">
          <Text as="span" variant="B2-Regular">
            Where
          </Text>
        </div>
      ) : (
        <FieldSelect
          popupClassName="!w-[200px] !p-0"
          style={{
            border: '1px solid #EDEDED',
            borderRadius: '4px',
            width: '80px',
            height: '32px',
          }}
          initialValue="and"
          itemsList={['or', 'and']}
          searchPlaceholder="Find a field"
        />
      )}
      <div className="flex border border-solid bg-white  rounded border-borderColor ">
        <div
          className="w-[120px] h-9  "
          style={{ borderRight: '1px solid #EDEDED' }}
        />
        <FieldSelect
          popupClassName="!w-[200px] !p-0"
          style={{ borderRight: '1px solid #EDEDED', width: '120px' }}
          searchPlaceholder="Find an operation"
          initialValue={operatorList[0]}
          dropdownItemRender={(item) => {
            if (typeof item === 'string') return item;
            return <item.icon size={12} />;
          }}
          isSearch
          itemsList={operatorList}
        />

        <CustomInput
          className="h-[18px] my-auto !border-none box-border !text-neutral-dark-500   w-[129px] px-3 "
          placeholder="Enter a value"
        />
        <div
          style={{
            borderRight: '1px solid #EDEDED',
            borderLeft: '1px solid #EDEDED',
          }}
          className="size-[30px] cursor-pointer box-border flex items-center  justify-center"
        >
          <Trash size={16} />
        </div>
        <div className="cursor-move size-[30px] flex items-center justify-center">
          <MoveIcon />
        </div>
      </div>
    </div>
  );
};

export default PercentConditionRow;
const operatorList = [
  { id: 'equal', icon: EqualSignIcon, label: '=' },
  { id: 'notEqual', icon: NotEqualSignIcon, label: '≠' },
  { id: 'lessThan', icon: LessThanIcon, label: '<' },
  { id: 'greaterThan', icon: GreaterThanIcon, label: '>' },
  { id: 'lessThanOrEqual', icon: LessThanOrEqualIcon, label: '≤' },
  { id: 'greaterThanOrEqual', icon: GreaterThanOrEqualIcon, label: '≥' },
];
