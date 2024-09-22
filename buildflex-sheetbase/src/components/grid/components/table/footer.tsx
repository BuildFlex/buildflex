import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown } from 'antd';
import React from 'react';

const FilledDropdown = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dropdown
      trigger={['click']}
      placement="topRight"
      open={open}
      onOpenChange={(value) => setOpen(value)}
      className="flex items-center relative justify-center"
      overlayClassName={cn('  h-[276px] w-[150px] rounded bg-[#101828]')}
      dropdownRender={() => (
        <div className={cn('flex flex-col gap-1')}>
          <DropdownItem className="h-9   text-neutral-200 ">
            <Text as="span" variant="B2-Regular" className="h-[18px]">
              None
            </Text>
          </DropdownItem>
          {[
            'Empty',
            'Filled',
            'Unique',
            'Percent Empty',
            'Percent Filled',
            'Percent Unique',
          ].map((item) => (
            <DropdownItem
              onClick={() => setOpen(false)}
              key={item}
              className="h-9 hover:bg-[#3E4D65] cursor-pointer  text-neutral-200 "
            >
              <Text as="span" variant="B2-Regular" className="h-[18px]">
                {item}
              </Text>
            </DropdownItem>
          ))}
        </div>
      )}
    >
      <div
        style={{ borderRight: '1px solid #EDEDED' }}
        className=" box-border p-2 flex items-center !justify-end  w-full text-end"
      >
        <Text as="span" variant="B2-Regular" className="h-[18px] w-fit">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Filled{' '}
          </Text>
          7
        </Text>
      </div>
    </Dropdown>
  );
};

const GridTableFooter = () => {
  return (
    <div
      style={{ borderTop: '1px solid #EDEDED' }}
      className="w-full flex  h-9  mt-auto  text-neutral-dark-500"
    >
      <div
        style={{ borderRight: '1px solid #EDEDED' }}
        className=" box-border p-2 flex items-center justify-center  min-w-20 text-center"
      >
        <Text as="span" variant="sub-title" className="h-4">
          10 records
        </Text>
      </div>
      <div className="w-full" style={{ borderRight: '1px solid #EDEDED' }} />

      {/* <div
        style={{ borderRight: '1px solid #EDEDED' }}
        className=" box-border p-2 flex items-center justify-end  w-full text-center"
      >
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Filled{' '}
          </Text>
          7
        </Text>
      </div> */}
      <FilledDropdown />
      <div className="w-full" style={{ borderRight: '1px solid #EDEDED' }} />
      <div
        style={{ borderRight: '1px solid #EDEDED' }}
        className=" box-border p-2 flex items-center justify-end  w-full text-center"
      >
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Sum{' '}
          </Text>
          1.01
        </Text>
      </div>

      <div className="w-full" style={{ borderRight: '1px solid #EDEDED' }} />
      <div className="w-full" style={{ borderRight: '1px solid #EDEDED' }} />
      <div className="w-full" style={{ borderRight: '1px solid #EDEDED' }} />
    </div>
  );
};

export default GridTableFooter;
