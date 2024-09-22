import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { ArrowDown2, Text as TextIcon } from 'iconsax-react';
import React from 'react';
import DropdownItem from '../common/dropdown/DropdownItem';
export interface IButtonStyle {
  id: string;
  name: string;
  background: string;
  color: string;
}
interface ButtonStyleSelectProps {
  labelRender?: React.ReactNode;
  dropdownRender?: React.ReactNode;
  className?: string;
  dropdownClassName?: string;
  itemsList: IButtonStyle[];
  position?: 'top' | 'bottom';
  selected: IButtonStyle;
  onSelect: (value: IButtonStyle) => void;
}

const ButtonStyleSelect = ({
  itemsList,
  dropdownRender,
  selected,
  onSelect,
  dropdownClassName,
  className,
  position = 'bottom',
}: ButtonStyleSelectProps) => {
  const [isShow, setIsShow] = React.useState(false);

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
      <div
        className={cn('flex items-center justify-center rounded size-6')}
        style={{
          backgroundColor: selected.background,
        }}
      >
        <TextIcon color={selected.color} size={16} />
      </div>

      <ArrowDown2 className="ml-auto" size={16} />
      {isShow &&
        (dropdownRender ?? (
          <div
            className={cn(
              ' w-[488px] flex flex-wrap gap-1 customScrollBarMedium  overflow-y-auto  p-3 box-border  absolute  rounded-lg bottom-[120%] right-0 bg-white boxShadowSecondary',

              position === 'top' ? 'bottom-[120%]' : 'bottom-auto top-[120%]',
              dropdownClassName,
            )}
          >
            {itemsList.map((item) => {
              return (
                <DropdownItem
                  key={item.id}
                  onClick={() => onSelect(item)}
                  className={cn(
                    ' hover:bg-gray-50  size-12 p-0 basis-12 flex items-center justify-center cursor-pointer',
                    {
                      'bg-gray-100  hover:bg-gray-100': selected.id === item.id,
                    },
                  )}
                >
                  <div
                    className={cn(
                      'flex items-center justify-center rounded-lg size-8',
                    )}
                    style={{
                      backgroundColor: item.background,
                    }}
                  >
                    <TextIcon color={item.color} size={16} />
                  </div>
                </DropdownItem>
              );
            })}
          </div>
        ))}
    </div>
  );
};

export default ButtonStyleSelect;
