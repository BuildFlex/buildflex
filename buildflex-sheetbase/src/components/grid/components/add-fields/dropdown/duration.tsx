import Text from '@/components/typography/Text';
import { ArrowDown2, Clock } from 'iconsax-react';
import React from 'react';

import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { QuestionCircle } from '@/components/icons';
import Select from '@/components/select/select';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
const durationFormatMap = new Map([
  ['h:mm', '1:23'],
  ['h:mm:ss', '1:23:40'],
  ['h:mm:ss:ss', '1:23:40:00'],
  ['h:mm:ss.s', '1:23:40.0'],
  ['h:mm:ss.ss', '1:23:40.00'],
  ['h:mm:ss.sss', '1:23:40.000'],
]);

interface DurationDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}
const DurationSelect: React.FC<{
  durationFormat: string;
  setDurationFormat: (value: string) => void;
}> = ({ durationFormat, setDurationFormat }) => (
  <div className="flex flex-col gap-2 mt-1">
    <div className="flex gap-2 items-center">
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Duration format
      </Text>
      <QuestionCircle color="currentColor" className="text-neutral-dark-300" />
    </div>
    <Select
      position="top"
      onChange={(value) => setDurationFormat(value)}
      dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
      labelRender={
        <Text as="span" variant="B2-Regular">
          {`${durationFormat} (${durationFormatMap.get(durationFormat)})`}
        </Text>
      }
      dropdownItemRender={(item) => (
        <>
          <Text as="span" variant="B2-Regular">
            {item}
          </Text>
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300 ml-auto"
          >
            {durationFormatMap.get(item)}
          </Text>
        </>
      )}
      dropdownRender={
        <DropdownItem onClick={(e) => e.stopPropagation()}>
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Find...
          </Text>
        </DropdownItem>
      }
      initialValue="h:mm"
      itemsList={[
        'h:mm',
        'h:mm:ss',
        'h:mm:ss:ss',
        'h:mm:ss.s',
        'h:mm:ss.ss',
        'h:mm:ss.sss',
      ]}
    />
  </div>
);

const PrecisionSelect: React.FC = () => (
  <div className="flex flex-col gap-2 mt-1">
    <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
      Precision
    </Text>
    <Select
      position="top"
      dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
      initialValue="Hours or smaller"
      itemsList={['Hours or smaller', 'Days']}
    />
  </div>
);

const DurationDropdown: React.FC<DurationDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [durationFormat, setDurationFormat] = React.useState<string>('h:mm');
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <Clock size={16} />
        <Text as="span" variant="B2-Regular">
          Duration
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Enter a duration of time in hours, minutes or seconds (e.g. 1:23).
      </Text>
      <PrecisionSelect />
      <DurationSelect
        setDurationFormat={setDurationFormat}
        durationFormat={durationFormat}
      />
    </>
  );
};

export default DurationDropdown;

