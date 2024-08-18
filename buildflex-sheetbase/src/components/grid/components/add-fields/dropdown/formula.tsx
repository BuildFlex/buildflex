import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown2, Hashtag, SearchNormal1, UserTick } from 'iconsax-react';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { cn } from '@/utils/cn';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { Modal, Switch } from 'antd';
import { CustomInput } from '@/components/input/Input';
import {
  CloseIcon,
  FormulaIcon,
  MoveIcon,
  QuestionCircle,
  SparklesIcon,
} from '@/components/icons';
import { gridTableFields } from '@/components/grid/GridUI';
import { fields } from '@/components/view-filter/components/dropdown-render/HideFieldDropdownRender';
import Select from '@/components/select/select';
import TimeZoneSelect from '@/components/select/timezone-select';
import DropdownTab from '../components/dropdown-tab';
import HighlightedTextarea from '../components/highlight-textarea';

interface FormulaDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

export const FormulaDropdown: React.FC<FormulaDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [selectFields, setSelectFields] = useState<string[]>([]);
  const handleShowAll = () => {
    setSelectFields(gridTableFields.map((field) => field.id));
  };
  const handleHideAll = () => {
    setSelectFields([]);
  };
  const [isDisplayTime, setIsDisplayTime] = React.useState<boolean>(false);
  const [isIncludeTime, setIsIncludeTime] = React.useState<boolean>(false);

  const [activeTab, setActiveTab] = useState('formula');
  const [isAllField, setIsAllField] = useState(true);
  const [isModalShow, setIsModalShow] = useState(false);
  const handleCancel = () => {
    setIsModalShow(false);
  };
  const handleOpen = () => {
    setIsModalShow(true);
  };

  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <FormulaIcon size={16} />
        <Text as="span" variant="B2-Regular">
          Formula
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>

      <div className="inline-block">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Compute values based on fields.
        </Text>
        <a
          href="#"
          className="w-fit h-[18px] flex items-center box-border"
          style={{ borderBottom: '1px solid #101828 ' }}
        >
          <Text as="span" variant="B2-Medium" className="text-neutral-dark-500">
            Learn more
          </Text>
        </a>
      </div>

      {/* Tab */}
      <div className="relative flex mt-1 gap-4 text-neutral-dark-300 after:z-[0] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-borderColor after:bottom-0 ">
        <DropdownTab
          label="Formula"
          id="formula"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DropdownTab
          label="Formatting"
          id="formatting"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {/* Tab Content */}
      <div className="flex flex-col gap-3 highlight-text-area">
        {activeTab === 'formula' ? (
          // <textarea
          //   onChange={handleChange}
          //   id="formula-input"
          //   defaultValue={"DATETIME_DIFF({End date},{Start date},'days')&'d'|"}
          //   className="w-full font-sourceCodePro text-sm h-[140px] resize-none box-border border border-borderColor rounded p-2 text-neutral-dark-500"
          // />
          <>
            <HighlightedTextarea
              initialValue={`DATETIME_DIFF({End date},{Start date},'days')&'d'|`}
              keywords={[`DATETIME_DIFF`, `'days'`, `'d'`]}
            />
            <DropdownItem className="cursor-pointer w-fit">
              <SparklesIcon size={16} />
              <Text as="span" variant="B2-Regular">
                Generate formula
              </Text>
            </DropdownItem>
          </>
        ) : (
          <DropdownItem className="flex h-auto flex-col gap-2">
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              Invalid configuration. Finish configuring your field in the
              formula tab, then try to format your formula again.
            </Text>
          </DropdownItem>
        )}
      </div>
    </>
  );
};
