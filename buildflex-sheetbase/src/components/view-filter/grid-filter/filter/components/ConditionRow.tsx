import { MoveIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Input, Select } from 'antd';
import { Trash } from 'iconsax-react';
import React from 'react';
import FieldSelect from './FieldSelect';

const ConditionRow = () => {
  return (
    <div className=" h-8 flex gap-3">
      <div className="h-full w-20  flex items-center">
        <Text as="span" variant="B2-Regular">
          Where
        </Text>
      </div>
      <div className="flex border border-solid  rounded border-borderColor ">
        <FieldSelect
          style={{ borderRight: '1px solid #EDEDED' }}
          initialValue="Name"
          itemsList={['Name', 'Phone', 'Email']}
        />
        <FieldSelect
          style={{ borderRight: '1px solid #EDEDED' }}
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
