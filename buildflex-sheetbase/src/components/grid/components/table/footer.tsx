import Text from '@/components/typography/Text';
import React from 'react';

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
            Filled{' '}
          </Text>
          7
        </Text>
      </div>
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
