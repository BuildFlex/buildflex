import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownItem from '../common/dropdown/DropdownItem';
import Text from '../typography/Text';

interface SelectProps {
  labelRender?: React.ReactNode;
  dropdownRender?: React.ReactNode;
  dropdownItemRender?: (item: string) => React.ReactNode;
  className?: string;
  dropdownClassName?: string;
  dropdownItemClassName?: string;
  itemsList: string[];
  position?: 'top' | 'bottom';
  initialValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Select = ({
  labelRender,
  itemsList,
  dropdownRender,
  dropdownClassName,
  dropdownItemClassName,
  className,
  initialValue,
  position = 'bottom',
  placeholder,
  onChange,
  dropdownItemRender,
}: SelectProps) => {
  const [isShow, setIsShow] = React.useState(false);
  const [selected, setSelected] = useState<string | null>(initialValue ?? null);
  const onClose = () => setIsShow(false);
  const ref = useOutsideClick(onClose, true);
  const handleChange = (value: string) => {
    onChange?.(value);
    setSelected(value);
  };
  return (
    <div
      className={cn(
        'h-9 px-2 relative w-full box-border rounded flex items-center gap-2',
        className,
      )}
      style={{ border: '1px solid #EDEDED' }}
      ref={ref}
      onClick={() => setIsShow((prev) => !prev)}
    >
      {labelRender ?? (
        <Text as="span" variant="B2-Regular">
          {selected ?? placeholder}
        </Text>
      )}
      <ArrowDown2 className="ml-auto" size={16} />
      {isShow && (
        <div
          className={cn(
            'w-full z-10 p-3 box-border absolute flex flex-col gap-3 rounded-lg bottom-[120%] left-0 bg-white boxShadowSecondary',

            position === 'top' ? 'bottom-[120%]' : 'bottom-auto top-[120%]',
            dropdownClassName,
          )}
        >
          {dropdownRender}
          <div className="flex w-full flex-col gap-1">
            {itemsList.map((item, index) => {
              return (
                <DropdownItem
                  key={item}
                  onClick={() => handleChange(item)}
                  className={cn(' hover:bg-gray-50 cursor-pointer', {
                    'bg-gray-100 hover:bg-gray-100': selected === item,
                    dropdownItemClassName,
                  })}
                >
                  {dropdownItemRender ? (
                    dropdownItemRender(item)
                  ) : (
                    <Text as="span" variant="B2-Regular">
                      {item}
                    </Text>
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

export default Select;
