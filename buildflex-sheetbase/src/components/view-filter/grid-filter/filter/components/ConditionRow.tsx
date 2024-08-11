import { MoveIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Input, Select } from 'antd';
import { Trash } from 'iconsax-react';
import React from 'react';
import FieldSelect from './FieldSelect';
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
          style={{ borderRight: '1px solid #EDEDED' }}
          initialValue="Name"
          itemsList={['Name', 'Phone', 'Email']}
          searchPlaceholder="Find a field"
        />
        <FieldSelect
          style={{ borderRight: '1px solid #EDEDED' }}
          searchPlaceholder="Find an operation"
          initialValue="contains"
          itemsList={[
            'contains',
            'does not contain',
            'is',
            'is not',
            'is empty',
            'is not empty',
          ]}
        />

        <Input
          className="h-full !border-none !text-neutral-dark-500 !shadow-none !outline-none  !w-[129px] !px-3 "
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
