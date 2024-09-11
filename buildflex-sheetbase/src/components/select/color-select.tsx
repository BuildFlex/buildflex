import { AddSquare, ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownItem from '../common/dropdown/DropdownItem';
import Text from '../typography/Text';
import Tag from '../sidebar/components/dropdown/TeamTag';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { SortByLabel } from '../view-filter/grid-filter/sort/SortConditionRow';
interface IColorItems {
  id: string;
  label: React.ElementType;
  color?: string;
}
interface ColorSelectProps {
  labelRender?: React.ReactNode;
  dropdownRender?: React.ReactNode;
  className?: string;
  dropdownClassName?: string;
  itemsList: IColorItems[];
  position?: 'top' | 'bottom';
  selected: IColorItems;
  onSelect: (value: IColorItems) => void;
}
const colorList = [
  '#048A0E',
  '#01DDD5',
  '#39CAFF',
  '#166EE1',
  '#7C37EF',
  '#DD04A8',
  '#DC043B',
  '#D54401',
  '#FFBA05',
  '#616670',
];
const ColorSelect = ({
  labelRender,
  itemsList,
  dropdownRender,
  selected,
  onSelect,
  dropdownClassName,
  className,
  position = 'bottom',
}: ColorSelectProps) => {
  const [isShow, setIsShow] = React.useState(false);

  const onOpen = () => setIsShow(true);
  const onClose = () => setIsShow(false);
  const ref = useOutsideClick(onClose, true);
  return (
    <div
      className={cn(
        'h-9 px-2 relative w-full  cursor-pointer box-border rounded flex items-center gap-2',
        className,
        dropdownClassName,
      )}
      style={{ border: '1px solid #EDEDED' }}
      ref={ref}
      onClick={() => setIsShow((prev) => !prev)}
    >
      <selected.label variant="Bold" color={selected.color} size={16} />

      <ArrowDown2 className="ml-auto" size={16} />
      {isShow &&
        (dropdownRender ?? (
          <div
            className={cn(
              ' w-[276px] p-1 box-border  absolute pr-2  rounded-lg bottom-[120%] left-0 bg-white boxShadowSecondary',

              position === 'top' ? 'bottom-[120%]' : 'bottom-auto top-[120%]',
              dropdownClassName,
            )}
          >
            <div className="flex flex-wrap w-[264px] max-h-[200px]  customScrollBarMedium  overflow-y-auto ">
              {colorList.map((color) =>
                itemsList.map((item, index) => {
                  return (
                    <DropdownItem
                      key={`${color}-${item.id}-${index}`}
                      onClick={() => onSelect({ ...item, color })}
                      className={cn(
                        ' hover:bg-gray-50  size-9 p-0 basis-9 flex items-center justify-center cursor-pointer',
                        {
                          'bg-gray-100  hover:bg-gray-100':
                            selected.id === item.id && selected.color === color,
                        },
                      )}
                    >
                      <item.label variant="Bold" color={color} size={16} />
                    </DropdownItem>
                  );
                }),
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ColorSelect;
