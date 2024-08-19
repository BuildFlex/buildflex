import React from 'react';
import { ArrowDown2, Heart, Link } from 'iconsax-react';
import Text from '@/components/typography/Text';

import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import {
  CheckBoxIcon,
  CloseIcon,
  DotIcon,
  FlagIcon,
  LikeIcon,
  RateStarFilledIcon,
  RateStarIcon,
  RateStarOutlineIcon,
} from '@/components/icons';
import ColorSelector from '@/components/view-filter/grid-filter/color/color-selector';
import ColorSelect from '@/components/select/color-select';
import Select from '@/components/select/select';
import DropdownItem from '@/components/common/dropdown/DropdownItem';

interface RatingDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}
interface IColorItems {
  id: string;
  label: React.ElementType;
  color?: string;
}
const RatingDropdown: React.FC<RatingDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [selected, setSelected] = React.useState<IColorItems>({
    id: 'checkbox',
    label: CheckBoxIcon,
    color: '#048A0E',
  });
  const handleSelect = (value: IColorItems) => setSelected(value);
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <RateStarOutlineIcon color="currentColor" />
        <Text as="span" variant="B2-Regular">
          Rating
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        Add a rating on a predefined scale.
      </Text>
      <div className="flex items-center gap-[100px]">
        <div className="flex flex-col gap-2">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Style
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
        <div className="flex flex-col gap-2">
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Maximum
          </Text>
          <Select
            position="top"
            dropdownClassName="max-h-[180px] w-[160px] overflow-auto customScrollBar"
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
            itemsList={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
            initialValue="5"
          />
        </div>
      </div>
    </>
  );
};

export default RatingDropdown;
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
