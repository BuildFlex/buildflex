import React, { useState } from 'react';
import {
  Add,
  ArrowDown2,
  ArrowRight,
  ArrowRight2,
  DollarCircle,
  Hashtag,
  PercentageCircle,
} from 'iconsax-react';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { cn } from '@/utils/cn';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Select from '@/components/select/select';
import { Dropdown, Switch } from 'antd';
import { CustomInput } from '@/components/input/Input';
import DropdownTab from '../../components/dropdown-tab';
import { QuestionCircle } from '@/components/icons';
import ColorConditionCollapse from '@/components/view-filter/grid-filter/color/color-condition-collapse';
import ColorDropdown from './color-dropdown';

interface PercentDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const PercentDropdown: React.FC<PercentDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [activeTab, setActiveTab] = useState('formatting');
  const [decimalPlaces, setDecimalPlaces] = useState<string>('0');
  const [separators, setSeparators] = useState<string>('Local');

  const [progress, setProgress] = useState<string>('bar');
  const [isShowPercentage, setIsShowPercentage] = useState<boolean>(true);

  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <PercentageCircle size={16} />
        <Text as="span" variant="B2-Regular">
          Percent
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Enter a percentage, or prefill each new cell with a default value.
      </Text>
      <div className="relative flex mt-1 gap-4 text-neutral-dark-300 after:z-[0] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-borderColor after:bottom-0 ">
        <DropdownTab
          id="formatting"
          label="Formatting"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DropdownTab
          id="default"
          label="Default"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="flex flex-col mt-1 gap-3">
        {activeTab === 'formatting' ? (
          <FormattingTab
            decimalPlaces={decimalPlaces}
            setDecimalPlaces={setDecimalPlaces}
            separators={separators}
            setSeparators={setSeparators}
          />
        ) : (
          <CustomInput placeholder="Enter default percent (optional)" />
        )}
      </div>
    </>
  );
};
export default PercentDropdown;

const FormattingTab: React.FC<{
  decimalPlaces: string;
  setDecimalPlaces: (value: string) => void;
  separators: string;
  setSeparators: (value: string) => void;
}> = ({ decimalPlaces, setDecimalPlaces, separators, setSeparators }) => (
  <>
    <DecimalPlacesSelect
      decimalPlaces={decimalPlaces}
      setDecimalPlaces={setDecimalPlaces}
    />
    <SeparatorsSelect separators={separators} setSeparators={setSeparators} />
    {/* Switch */}
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2 h-8 ">
        <Switch className="w-8" size="small" />
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-500">
          Show thousands separator
        </Text>
      </div>
      <div className="flex items-center gap-2 h-8 ">
        <Switch className="w-8" size="small" />
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-500">
          Display as progress bar
        </Text>
      </div>
      <div className="flex items-center gap-2 h-8 ">
        <Switch className="w-8" size="small" />
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-500">
          Allow negative numbers
        </Text>
      </div>
    </div>
    <ProgressBarSelect />
    <ColorDropdown />
  </>
);
const ProgressBarSelect: React.FC<{}> = ({}) => (
  <div className="flex flex-col gap-2">
    <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
      Progress bar shape
    </Text>
    <Select
      position="top"
      dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
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
      initialValue="Bar"
      itemsList={['Bar', 'Circle']}
    />
  </div>
);

const DecimalPlacesSelect: React.FC<{
  decimalPlaces: string;
  setDecimalPlaces: (value: string) => void;
}> = ({ decimalPlaces, setDecimalPlaces }) => (
  <div className="flex flex-col gap-2">
    <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
      Decimal places
    </Text>
    <Select
      position="top"
      onChange={(value) => setDecimalPlaces(value)}
      dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
      labelRender={
        <Text as="span" variant="B2-Regular">
          {`${decimalPlaces} (${decimalPlacesMap.get(decimalPlaces)})`}
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
            {decimalPlacesMap.get(item)}
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
      initialValue="0"
      itemsList={['0', '1', '2', '3', '4', '5', '6', '7', '8']}
    />
  </div>
);

const SeparatorsSelect: React.FC<{
  separators: string;
  setSeparators: (value: string) => void;
}> = ({ separators, setSeparators }) => (
  <div className="flex flex-col gap-2">
    <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
      Thousands and decimals separators
    </Text>
    <Select
      position="top"
      onChange={(value) => setSeparators(value)}
      dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
      labelRender={
        <Text as="span" variant="B2-Regular">
          {`${separators} (${separatorsMap.get(separators)})`}
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
            {separatorsMap.get(item)}
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
      itemsList={[
        'Local',
        'Comma, period',
        'Period, comma',
        'Space, comma',
        'Space, period',
      ]}
      initialValue="Local"
    />
  </div>
);

const decimalPlacesMap = new Map<string, string>([
  ['0', '1%'],
  ['1', '1.0%'],
  ['2', '1.00%'],
  ['3', '1.000%'],
  ['4', '1.0000%'],
  ['5', '1.00000%'],
  ['6', '1.000000%'],
  ['7', '1.0000000%'],
  ['8', '1.00000000%'],
]);

const separatorsMap = new Map<string, string>([
  ['Local', '1,000,000.00'],
  ['Comma, period', '1,000,000.00'],
  ['Period, comma', '1.000.000,00'],
  ['Space, comma', '1 000 000,00'],
  ['Space, period', '1 000 000.00'],
]);
