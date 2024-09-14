import {
  CheckBoxIcon,
  CloseIcon,
  DotIcon,
  FlagIcon,
  LikeIcon,
  RateStarFilledIcon,
} from '@/components/icons';
import ColorSelect from '@/components/select/color-select';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { ArrowDown2, Heart, TickSquare } from 'iconsax-react';
import React from 'react';

interface CheckboxDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}
interface IColorItems {
  id: string;
  label: React.ElementType;
  color?: string;
}
const CheckboxDropdown: React.FC<CheckboxDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [isDefault, setIsDefault] = React.useState(false);
  const [selected, setSelected] = React.useState<IColorItems>({
    id: 'checkbox',
    label: CheckBoxIcon,
    color: '#048A0E',
  });
  const handleSetDefault = () => setIsDefault((prev) => !prev);
  const handleSelect = (value: IColorItems) => setSelected(value);

  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <TickSquare size={16} />
        <Text as="span" variant="B2-Regular">
          Checkbox
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Check or uncheck to indicate status.
      </Text>

      <div className="flex flex-col gap-2 mt-1">
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          Filter record selection by a condition
        </Text>
        <ColorSelect
          selected={selected}
          onSelect={handleSelect}
          itemsList={CheckboxItem}
          className="w-[68px] max-w-[68px]"
          labelRender={
            <CheckBoxIcon className="text-black" color="currentColor" />
          }
        />
      </div>

      <div className="flex flex-col gap-2 mt-1">
        <Text as="span" variant="B2-Regular" className="h-[18px]">
          Default
        </Text>
        <button
          onClick={handleSetDefault}
          style={{ border: '1px solid #EDEDED ' }}
          className="size-9 bg-transparent cursor-pointer rounded border-borderColor flex items-center justify-center"
        >
          {isDefault && (
            <selected.label size={16} color={selected.color} variant="Bold" />
          )}
        </button>
      </div>
    </>
  );
};

export default CheckboxDropdown;
const CheckboxItem = [
  {
    id: 'checkbox',
    label: CheckBoxIcon,
  },
  {
    id: 'close',
    label: CloseIcon,
  },
  {
    id: 'star',
    label: RateStarFilledIcon,
  },

  {
    id: 'heart',
    label: Heart,
  },
  {
    id: 'like',
    label: LikeIcon,
  },
  {
    id: 'flag',
    label: FlagIcon,
  },
  {
    id: 'dot',
    label: DotIcon,
  },
];
