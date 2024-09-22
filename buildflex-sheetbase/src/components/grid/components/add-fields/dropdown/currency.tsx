import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CustomInput } from '@/components/input/Input';
import Select from '@/components/select/select';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { Switch } from 'antd';
import { ArrowDown2, DollarCircle } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownTab from '../components/dropdown-tab';

interface CurrencyDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const decimalPlacesMap = new Map<string, string>([
  ['0', '1'],
  ['1', '1.0'],
  ['2', '1.00'],
  ['3', '1.000'],
  ['4', '1.0000'],
  ['5', '1.00000'],
  ['6', '1.000000'],
  ['7', '1.0000000'],
  ['8', '1.00000000'],
]);

const separatorsMap = new Map<string, string>([
  ['Local', '1,000,000.00'],
  ['Comma, period', '1,000,000.00'],
  ['Period, comma', '1.000.000,00'],
  ['Space, comma', '1 000 000,00'],
  ['Space, period', '1 000 000.00'],
]);

const NumberAbbreviationMap = new Map<string, string>([
  ['Thousand', 'K'],
  ['Million', 'M'],
  ['Billion', 'B'],
]);

const SymbolSelect: React.FC<{
  setSymbol: (value: string) => void;
}> = ({ setSymbol }) => (
  <div className="flex flex-col gap-2 mt-1">
    <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
      Currency symbol
    </Text>
    <Select
      position="top"
      onChange={(value) => setSymbol(value)}
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
      initialValue="$"
      itemsList={['$']}
    />
  </div>
);
const PresetSelect: React.FC = () => (
  <div className="flex flex-col gap-2 mt-1">
    <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
      Presets
    </Text>
    <Select
      position="top"
      placeholder="Select a preset"
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
      initialValue="1.2345"
      itemsList={['1.2345', '3456', '34.0M']}
    />
  </div>
);

const DecimalPlacesSelect: React.FC<{
  decimalPlaces: string;
  symbol: string;
  setDecimalPlaces: (value: string) => void;
}> = ({ decimalPlaces, setDecimalPlaces, symbol }) => (
  <div className="flex flex-col gap-2 mt-1">
    <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
      Decimal places
    </Text>
    <Select
      position="top"
      onChange={(value) => setDecimalPlaces(value)}
      dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
      labelRender={
        <Text as="span" variant="B2-Regular">
          {`${decimalPlaces} (${symbol}${decimalPlacesMap.get(decimalPlaces)})`}
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
            {symbol + decimalPlacesMap.get(item)}
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
  <div className="flex flex-col gap-2 mt-1">
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
    <div className="flex items-center gap-2 h-8 ">
      <Switch className="w-8" size="small" />
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-500">
        Show thousands separator
      </Text>
    </div>
  </div>
);

const NumberAbbreviationSelect: React.FC<{
  numberAbbreviation: string | null;
  setNumberAbbreviation: (value: string | null) => void;
}> = ({ setNumberAbbreviation }) => (
  <div className="flex flex-col gap-2 mt-1">
    <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
      Large number abbreviation
    </Text>
    <Select
      position="top"
      onChange={(value) => setNumberAbbreviation(value)}
      dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
      placeholder="None"
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
            {NumberAbbreviationMap.get(item)}
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
      itemsList={['Thousand', 'Million', 'Billion']}
    />
    <div className="flex items-center gap-2 h-8 ">
      <Switch className="w-8" size="small" />
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-500">
        Allow negative numbers
      </Text>
    </div>
  </div>
);
const FormattingTab: React.FC<{
  decimalPlaces: string;
  setDecimalPlaces: (value: string) => void;
  separators: string;
  setSeparators: (value: string) => void;
  numberAbbreviation: string | null;
  setNumberAbbreviation: (value: string | null) => void;
  setSymbol: (value: string) => void;
  symbol: string;
}> = ({
  decimalPlaces,
  setDecimalPlaces,
  separators,
  setSeparators,
  numberAbbreviation,
  setNumberAbbreviation,
  setSymbol,
  symbol,
}) => (
  <>
    <PresetSelect />
    <SymbolSelect setSymbol={setSymbol} />
    <DecimalPlacesSelect
      decimalPlaces={decimalPlaces}
      symbol={symbol}
      setDecimalPlaces={setDecimalPlaces}
    />
    <SeparatorsSelect separators={separators} setSeparators={setSeparators} />
    <NumberAbbreviationSelect
      numberAbbreviation={numberAbbreviation}
      setNumberAbbreviation={setNumberAbbreviation}
    />
    <div className="w-full bg-borderColor h-[1px] min-h-[1px]" />
    <DropdownItem>
      <Text as="span" variant="B2-Regular">
        Preview: 3,456.0
      </Text>
    </DropdownItem>
  </>
);
const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [activeTab, setActiveTab] = useState('formatting');
  const [decimalPlaces, setDecimalPlaces] = useState<string>('0');
  const [separators, setSeparators] = useState<string>('Local');
  const [symbol, setSymbol] = useState<string>('$');
  const [numberAbbreviation, setNumberAbbreviation] = useState<string | null>(
    null,
  );

  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <DollarCircle size={16} />
        <Text as="span" variant="B2-Regular">
          Currency
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Enter a monetary amount, or prefill each new cell with a default value.
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
      <div className="flex flex-col mt-2 gap-3">
        {activeTab === 'formatting' ? (
          <FormattingTab
            setSymbol={setSymbol}
            symbol={symbol}
            decimalPlaces={decimalPlaces}
            setDecimalPlaces={setDecimalPlaces}
            separators={separators}
            setSeparators={setSeparators}
            numberAbbreviation={numberAbbreviation}
            setNumberAbbreviation={setNumberAbbreviation}
          />
        ) : (
          <CustomInput placeholder="Enter default number (optional)" />
        )}
      </div>
    </>
  );
};

export default CurrencyDropdown;
