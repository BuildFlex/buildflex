import React, { useState } from 'react';
import { ArrowDown2, Hashtag } from 'iconsax-react';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { cn } from '@/utils/cn';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Select from '@/components/select/select';
import { Switch } from 'antd';
import { CustomInput } from '@/components/input/Input';

interface NumberDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const NumberDropdown: React.FC<NumberDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [activeTab, setActiveTab] = useState('formatting');
  const [decimalPlaces, setDecimalPlaces] = useState<string>('0');
  const [separators, setSeparators] = useState<string>('Local');
  const [numberAbbreviation, setNumberAbbreviation] = useState<string | null>(
    null,
  );

  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer mr-1"
      >
        <Hashtag size={16} />
        <Text as="span" variant="B2-Regular">
          Number
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Enter a number, or prefill each new cell with a default value.
      </Text>
      <div className="relative flex mt-1 gap-4 text-neutral-dark-300 after:z-[0] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-borderColor after:bottom-0 ">
        <Tab
          label="Formatting"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Default"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="flex flex-col mt-2 gap-3">
        {activeTab === 'formatting' ? (
          <FormattingTab
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

const Tab: React.FC<{
  label: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}> = ({ label, activeTab, setActiveTab }) => (
  <div
    onClick={() => setActiveTab(label.toLowerCase())}
    className={cn(
      'h-[26px] relative z-[1] cursor-pointer w-fit box-border flex items-start',
      activeTab === label.toLowerCase() && 'text-neutral-dark-500',
    )}
    style={
      activeTab === label.toLowerCase()
        ? { borderBottom: '2px solid #101828' }
        : {}
    }
  >
    <Text as="span" variant="B2-Regular">
      {label}
    </Text>
  </div>
);

const FormattingTab: React.FC<{
  decimalPlaces: string;
  setDecimalPlaces: (value: string) => void;
  separators: string;
  setSeparators: (value: string) => void;
  numberAbbreviation: string | null;
  setNumberAbbreviation: (value: string | null) => void;
}> = ({
  decimalPlaces,
  setDecimalPlaces,
  separators,
  setSeparators,
  numberAbbreviation,
  setNumberAbbreviation,
}) => (
  <>
    <PresetSelect />
    <DecimalPlacesSelect
      decimalPlaces={decimalPlaces}
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
  setDecimalPlaces: (value: string) => void;
}> = ({ decimalPlaces, setDecimalPlaces }) => (
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
}> = ({ numberAbbreviation, setNumberAbbreviation }) => (
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
        Show thousands separator
      </Text>
    </div>
  </div>
);

export default NumberDropdown;

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

// import React, { useState } from 'react';
// import { ArrowDown2, Hashtag, Link } from 'iconsax-react';
// import Text from '@/components/typography/Text';

// import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
// import { cn } from '@/utils/cn';
// import DropdownItem from '@/components/common/dropdown/DropdownItem';
// import Select from '@/components/select/select';
// import { Switch } from 'antd';
// import { CustomInput } from '@/components/input/Input';

// interface NumberDropdownProps {
//   onChangeDropdown: (value: IField | null) => void;
// }

// const NumberDropdown: React.FC<NumberDropdownProps> = ({
//   onChangeDropdown,
// }) => {
//   const [activeTab, setActiveTab] = React.useState('formatting');
//   const [decimalPlaces, setDecimalPlaces] = React.useState<string>('0');
//   const [separators, setSeparators] = React.useState<string>('Local');
//   const [numberAbbreviation, setNumberAbbreviation] = useState<string | null>(
//     null,
//   );
//   return (
//     <>
//       <button
//         onClick={() => onChangeDropdown(null)}
//         style={{ border: '1px solid #EDEDED ' }}
//         className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer mr-1"
//       >
//         <Hashtag size={16} />
//         <Text as="span" variant="B2-Regular">
//           Number
//         </Text>
//         <ArrowDown2 className="ml-auto" size={16} />
//       </button>
//       <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
//         Enter a number, or prefill each new cell with a default value.
//       </Text>
//       {/* Tab */}
//       <div className="relative flex mt-1 gap-4 text-neutral-dark-300 after:z-[0] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-borderColor after:bottom-0 ">
//         <div
//           onClick={() => setActiveTab('formatting')}
//           className={cn(
//             'h-[26px] relative z-[1] cursor-pointer w-fit box-border flex items-start',
//             activeTab === 'formatting' && 'text-neutral-dark-500',
//           )}
//           style={
//             activeTab === 'formatting'
//               ? { borderBottom: '2px solid #101828' }
//               : {}
//           }
//         >
//           <Text as="span" variant="B2-Regular">
//             Formatting
//           </Text>
//         </div>
//         <div
//           onClick={() => setActiveTab('default')}
//           className={cn(
//             'h-[26px] relative cursor-pointer z-[1] w-fit box-border flex items-start',
//             activeTab === 'default' && 'text-neutral-dark-500',
//           )}
//           style={
//             activeTab === 'default' ? { borderBottom: '2px solid #101828' } : {}
//           }
//         >
//           <Text as="span" variant="B2-Regular">
//             Default
//           </Text>
//         </div>
//       </div>
//       <div className=" flex flex-col mt-2 gap-3">
//         {activeTab === 'formatting' ? (
//           <>
//             <div className="flex flex-col gap-2 mt-1">
//               <Text
//                 as="span"
//                 variant="B2-Regular"
//                 className="text-neutral-dark-300"
//               >
//                 Presets
//               </Text>
//               <Select
//                 position="top"
//                 placeholder="Select a preset"
//                 dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
//                 dropdownRender={
//                   <DropdownItem onClick={(e) => e.stopPropagation()}>
//                     <Text
//                       as="span"
//                       variant="B2-Regular"
//                       className="text-neutral-dark-300"
//                     >
//                       Find...
//                     </Text>
//                   </DropdownItem>
//                 }
//                 initialValue="1.2345"
//                 itemsList={['1.2345', '3456', '34.0M']}
//               />
//             </div>
//             <div className="flex flex-col gap-2 mt-1">
//               <Text
//                 as="span"
//                 variant="B2-Regular"
//                 className="text-neutral-dark-300"
//               >
//                 Decimal places
//               </Text>
//               <Select
//                 position="top"
//                 onChange={(value) => setDecimalPlaces(value)}
//                 dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
//                 labelRender={
//                   <Text as="span" variant="B2-Regular">
//                     {`${decimalPlaces} (${decimalPlacesMap.get(decimalPlaces)})`}
//                   </Text>
//                 }
//                 dropdownItemRender={(item) => (
//                   <>
//                     <Text as="span" variant="B2-Regular">
//                       {item}
//                     </Text>
//                     <Text
//                       as="span"
//                       variant="B2-Regular"
//                       className="text-neutral-dark-300 ml-auto"
//                     >
//                       {decimalPlacesMap.get(item)}
//                     </Text>
//                   </>
//                 )}
//                 dropdownRender={
//                   <DropdownItem onClick={(e) => e.stopPropagation()}>
//                     <Text
//                       as="span"
//                       variant="B2-Regular"
//                       className="text-neutral-dark-300"
//                     >
//                       Find...
//                     </Text>
//                   </DropdownItem>
//                 }
//                 initialValue="0"
//                 itemsList={['0', '1', '2', '3', '4', '5', '6', '7', '8']}
//               />
//             </div>

//             <div className="flex flex-col gap-2 mt-1">
//               <Text
//                 as="span"
//                 variant="B2-Regular"
//                 className="text-neutral-dark-300"
//               >
//                 Thousands and decimals separators
//               </Text>
//               <Select
//                 position="top"
//                 onChange={(value) => setSeparators(value)}
//                 dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
//                 labelRender={
//                   <Text as="span" variant="B2-Regular">
//                     {`${separators} (${separatorsMap.get(separators)})`}
//                   </Text>
//                 }
//                 dropdownItemRender={(item) => (
//                   <>
//                     <Text as="span" variant="B2-Regular">
//                       {item}
//                     </Text>
//                     <Text
//                       as="span"
//                       variant="B2-Regular"
//                       className="text-neutral-dark-300 ml-auto"
//                     >
//                       {separatorsMap.get(item)}
//                     </Text>
//                   </>
//                 )}
//                 dropdownRender={
//                   <DropdownItem onClick={(e) => e.stopPropagation()}>
//                     <Text
//                       as="span"
//                       variant="B2-Regular"
//                       className="text-neutral-dark-300"
//                     >
//                       Find...
//                     </Text>
//                   </DropdownItem>
//                 }
//                 itemsList={[
//                   'Local',
//                   'Comma, period',
//                   'Period, comma',
//                   'Space, comma',
//                   'Space, period',
//                 ]}
//                 initialValue="Local"
//               />
//               <div className="flex items-center gap-2 h-8 ">
//                 <Switch className="w-8" size="small" />
//                 <Text
//                   as="span"
//                   variant="B2-Regular"
//                   className="text-neutral-dark-500"
//                 >
//                   Show thousands separator
//                 </Text>
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 mt-1">
//               <Text
//                 as="span"
//                 variant="B2-Regular"
//                 className="text-neutral-dark-300"
//               >
//                 Large number abbreviation
//               </Text>
//               <Select
//                 position="top"
//                 onChange={(value) => setNumberAbbreviation(value)}
//                 dropdownClassName="max-h-[180px] overflow-auto customScrollBar"
//                 placeholder="None"
//                 dropdownItemRender={(item) => (
//                   <>
//                     <Text as="span" variant="B2-Regular">
//                       {item}
//                     </Text>
//                     <Text
//                       as="span"
//                       variant="B2-Regular"
//                       className="text-neutral-dark-300 ml-auto"
//                     >
//                       {NumberAbbreviationMap.get(item)}
//                     </Text>
//                   </>
//                 )}
//                 dropdownRender={
//                   <DropdownItem onClick={(e) => e.stopPropagation()}>
//                     <Text
//                       as="span"
//                       variant="B2-Regular"
//                       className="text-neutral-dark-300"
//                     >
//                       Find...
//                     </Text>
//                   </DropdownItem>
//                 }
//                 itemsList={['Thousand', 'Million', 'Billion']}
//               />
//               <div className="flex items-center gap-2 h-8 ">
//                 <Switch className="w-8" size="small" />
//                 <Text
//                   as="span"
//                   variant="B2-Regular"
//                   className="text-neutral-dark-500"
//                 >
//                   Show thousands separator
//                 </Text>
//               </div>
//             </div>
//             <div className="w-full bg-borderColor h-[1px] min-h-[1px]" />
//             <DropdownItem>
//               <Text as="span" variant="B2-Regular">
//                 Preview: 3,456.0
//               </Text>
//             </DropdownItem>
//           </>
//         ) : (
//           <CustomInput placeholder="Enter default number (optional)" />
//         )}
//       </div>
//     </>
//   );
// };

// export default NumberDropdown;

// const decimalPlacesMap = new Map<string, string>([
//   ['0', '1'],
//   ['1', '1.0'],
//   ['2', '1.00'],
//   ['3', '1.000'],
//   ['4', '1.0000'],
//   ['5', '1.00000'],
//   ['6', '1.000000'],
//   ['7', '1.0000000'],
//   ['8', '1.00000000'],
// ]);
// const separatorsMap = new Map<string, string>([
//   ['Local', '1,000,000.00'],
//   ['Comma, period', '1,000,000.00'],
//   ['Period, comma', '1.000.000,00'],
//   ['Space, comma', '1 000 000,00'],
//   ['Space, period', '1 000 000.00'],
// ]);
// const NumberAbbreviationMap = new Map<string, string>([
//   ['Thousand', 'K'],
//   ['Million', 'M'],
//   ['Billion', 'B'],
// ]);