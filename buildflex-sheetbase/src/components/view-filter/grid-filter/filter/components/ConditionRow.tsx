import { MoveIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Input, Select, Space } from 'antd';
import { Trash } from 'iconsax-react';
import React from 'react';
import FieldSelect from './FieldSelect';
import { fields } from '@/components/view-filter/components/dropdown-render/HideFieldDropdownRender';
import { CustomInput } from '@/components/input/Input';
interface ConditionRowProps {
  isFirstRow?: boolean;
}
const ConditionRow = ({ isFirstRow = false }: ConditionRowProps) => {
  return (
    <div className=" h-8 flex gap-3">
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
        <FieldSelect
          popupClassName="!w-[200px] !p-0"
          style={{ borderRight: '1px solid #EDEDED' }}
          initialValue={fields[0]}
          itemsList={fields}
          searchPlaceholder="Find a field"
          isSearch
        />
        <FieldSelect
          popupClassName="!w-[200px] !p-0"
          style={{ borderRight: '1px solid #EDEDED' }}
          searchPlaceholder="Find an operation"
          initialValue="contains"
          isSearch
          itemsList={[
            'contains',
            'does not contain',
            'is',
            'is not',
            'is empty',
            'is not empty',
          ]}
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

export default ConditionRow;
