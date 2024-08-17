import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CloseIcon, MoveIcon, MoveToIcon } from '@/components/icons';
import { CustomInput } from '@/components/input/Input';
import TagSelect from '@/components/select/tag-select';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import ColorSelector from '@/components/view-filter/grid-filter/color/color-selector';
import { Switch } from 'antd';
import {
  Add,
  AddCircle,
  ArrangeVertical,
  ArrowCircleDown,
  ArrowDown2,
  Task,
} from 'iconsax-react';
import React, { useId, useState } from 'react';

interface SingleSelectDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}
interface IOption {
  id: string;
  label: string;
}
const SingleSelectDropdown: React.FC<SingleSelectDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [isColor, setIsColor] = useState(false);
  const handleSetIsColor = (checked: boolean) => setIsColor(checked);
  const [options, setOptions] = useState<IOption[]>([
    {
      id: 'option-1',
      label: 'Option 1',
    },
  ]);
  const handleAdd = (options: IOption) => {
    const id = Math.random().toString(36).substring(7);
    setOptions((prev) => [...prev, { ...options, id }]);
  };
  const handleRemove = (option: IOption) => {
    const newOptions = options.filter((op) => option.id !== op.id);
    setOptions(newOptions);
  };

  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer mr-1"
      >
        <ArrowCircleDown size={16} />
        <Text as="span" variant="B2-Regular">
          Single select
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Select one predefined option from a list, or prefill each new cell with
        a default option.
      </Text>

      <div
        className="flex gap-1 flex-col mt-1"
        style={{ borderBottom: '1px solid #EDEDED' }}
      >
        <div className="flex h-8 items-center gap-2">
          <Switch
            checked={isColor}
            onChange={handleSetIsColor}
            className="w-8"
            size="small"
          />
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            Color-code options
          </Text>
          <div className="flex items-center gap-2 ml-auto">
            <ArrangeVertical size={16} />
            <Text as="span" variant="B2-Regular" className="h-[18px]">
              Alphabetize
            </Text>
          </div>
        </div>
        <div className="h-[1px] w-full bg-borderColor " />
        <div className="flex gap-1 overflow-auto max-h-[80px] customScrollBar flex-col w-full">
          {options.map((option, index) => (
            <DropdownItem
              key={option.id}
              className=" py-0 h-8  text-neutral-dark-500"
            >
              <MoveIcon />
              {isColor && (
                <ColorSelector
                  iconSize={20}
                  isName
                  name={option.label}
                  initialValue={{
                    background: '#FB8C00',
                    color: 'white',
                  }}
                />
              )}
              <input
                style={{
                  border: 'none',
                  outlineColor: 'none',
                  height: '30px',
                  boxSizing: 'border-box',
                }}
                defaultValue={option.label}
                className=" font-lato text-sm shadow-none box-border rounded m-0 w-full px-2"
              />
              <button
                onClick={() => handleRemove(option)}
                className="bg-transparent border-none outline-none size-4 ml-auto cursor-pointer"
              >
                <CloseIcon className="" />
              </button>
            </DropdownItem>
          ))}
        </div>
        <DropdownItem
          onClick={() => handleAdd({ id: 'New option', label: 'New option' })}
          className="cursor-pointer pl-8 text-neutral-dark-500"
        >
          <AddCircle size={16} />
          <Text
            as="span"
            variant="sub-title"
            className="h-[16px] text-neutral-dark-300"
          >
            Add option
          </Text>
          <Add size={16} />
        </DropdownItem>
      </div>
      <div className="flex flex-col gap-2 mt-1 text-neutral-dark-300">
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          Default options
        </Text>
        <TagSelect />
      </div>
    </>
  );
};

export default SingleSelectDropdown;
