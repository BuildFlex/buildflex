import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownItem from '../common/dropdown/DropdownItem';
import Text from '../typography/Text';

export interface ICutomSelectItem {
  value: string;
  label: string;
  suffix?: React.ElementType;
  prefix?: React.ElementType;
}
interface SelectProps {
  className?: string;
  dropdownClassName?: string;
  itemsList: ICutomSelectItem[];
  position?: 'top' | 'bottom';
  initialValue?: ICutomSelectItem;
  onChange?: (value: ICutomSelectItem) => void;
  placeholder?: string;
}

const CustomSelect = ({
  onChange,
  itemsList,
  dropdownClassName,
  className,
  initialValue,
  position = 'bottom',
  placeholder,
}: SelectProps) => {
  const [isShow, setIsShow] = React.useState(false);
  const [selected, setSelected] = useState<ICutomSelectItem | null>(
    initialValue ?? null,
  );
  const onOpen = () => setIsShow(true);
  const onClose = () => setIsShow(false);
  const ref = useOutsideClick(onClose, true);
  const handleSelect = (value: ICutomSelectItem) => {
    setSelected(value);
    onChange && onChange(value);
  };
  return (
    <div
      className={cn(
        'h-9 px-2 relative cursor-pointer w-full box-border rounded flex items-center gap-2',
        className,
      )}
      style={{ border: '1px solid #EDEDED' }}
      ref={ref}
      onClick={() => setIsShow((prev) => !prev)}
    >
      {selected ? (
        <>
          {selected?.prefix && <selected.prefix size={16} />}
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            {selected.label}
          </Text>
          {selected?.suffix ? (
            <selected.suffix size={16} className="ml-auto" />
          ) : (
            <ArrowDown2 className="ml-auto" size={16} />
          )}
        </>
      ) : (
        <>
          <Text as="span" variant="B2-Regular" className="h-[18px]">
            {placeholder || 'Select an option'}
          </Text>
          <ArrowDown2 className="ml-auto" size={16} />
        </>
      )}

      {isShow && (
        <div
          className={cn(
            'w-full z-10 p-3 box-border absolute flex flex-col gap-3 rounded-lg bottom-[120%] left-0 bg-white boxShadowSecondary',

            position === 'top' ? 'bottom-[120%]' : 'bottom-auto top-[120%]',
            dropdownClassName,
          )}
        >
          <DropdownItem onClick={(e) => e.stopPropagation()}>
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              Find...
            </Text>
          </DropdownItem>
          <div className="flex w-full flex-col gap-1">
            {itemsList.map((item, index) => {
              return (
                <DropdownItem
                  key={`${item.value}-${index}`}
                  onClick={() => handleSelect(item)}
                  className={cn(' hover:bg-gray-50 cursor-pointer', {
                    'bg-gray-100 hover:bg-gray-100':
                      selected?.value === item.value,
                  })}
                >
                  {item?.prefix && <item.prefix size={16} />}
                  <Text as="span" variant="B2-Regular">
                    {item.label}
                  </Text>
                  {item?.suffix && (
                    <item.suffix size={16} className="ml-auto" />
                  )}
                </DropdownItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
