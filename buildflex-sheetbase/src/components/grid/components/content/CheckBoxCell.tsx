import { CheckBoxIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Checkbox } from 'antd';
import React from 'react';
interface CheckBoxCellProps {
  isCheck: boolean;
}
const CheckBoxCell = ({ isCheck }: CheckBoxCellProps) => {
  return (
    <div className="max-w-[164px] w-full flex justify-center items-center  ">
      {/* <Checkbox checked={isCheck} /> */}
      <div
        className="size-5 rounded-md flex items-center justify-center box-border bg-neutral-100 "
        style={{
          border: '1.5px solid #EDEDED',
        }}
      >
        <CheckBoxIcon
          className="text-theme-ocean-blue size-4"
          color="currentColor"
        />
      </div>
    </div>
  );
};

export default CheckBoxCell;
