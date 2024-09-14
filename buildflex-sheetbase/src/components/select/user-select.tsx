import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownItem from '../common/dropdown/DropdownItem';
import Text from '../typography/Text';
interface IUser {
  id: string;
  name: string;
  avatar: string;
}
interface UserSelectProps {
  className?: string;
  dropdownClassName?: string;
  itemsList: IUser[];
  position?: 'top' | 'bottom';
  initialValue?: IUser;
  dropdownRender?: React.ReactNode;
}

const UserSelect = ({
  dropdownRender,
  itemsList,
  dropdownClassName,
  className,
  initialValue,
  position = 'bottom',
}: UserSelectProps) => {
  const [isShow, setIsShow] = React.useState(false);
  const [selected, setSelected] = useState<IUser>(initialValue ?? itemsList[0]);
  const onOpen = () => setIsShow(true);
  const onClose = () => setIsShow(false);
  const ref = useOutsideClick(onClose, true);
  const handleSelect = (value: IUser) => setSelected(value);
  return (
    <div
      className={cn(
        'h-9 px-2 relative w-full box-border rounded flex items-center gap-2',
        className,
        dropdownClassName,
      )}
      style={{ border: '1px solid #EDEDED' }}
      ref={ref}
      onClick={() => setIsShow((prev) => !prev)}
    >
      <div
        className={cn(
          'flex gap-1 relative bg-gray-100 rounded-full  items-center  min-w-[90px] box-border h-[24px]',
          'bg-[#E0F2FE] text-theme-ocean-blue',
        )}
        style={{ border: '0.5px solid #087AAF' }}
      >
        <img
          style={{ border: '0.5px solid #087AAF', left: -1 }}
          src={selected.avatar}
          alt={selected.name}
          className=" relative h-[24px] w-auto aspect-square object-cover rounded-full"
        />
        <Text as="span" variant="sub-title-medium">
          {selected.name}
        </Text>
      </div>

      <ArrowDown2 className="ml-auto" size={16} />
      {isShow && (
        <div
          className={cn(
            'w-full p-3 box-border absolute flex flex-col gap-3 rounded-lg bottom-[120%] left-0 bg-white boxShadowSecondary',

            position === 'top' ? 'bottom-[120%]' : 'bottom-auto top-[120%]',
            dropdownClassName,
          )}
        >
          {dropdownRender}
          <div className="flex w-full flex-col gap-1">
            {itemsList.map((item, index) => {
              return (
                <DropdownItem
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={cn(' hover:bg-gray-50 cursor-pointer', {
                    'bg-gray-100 hover:bg-gray-100': selected.id === item.id,
                  })}
                >
                  <div
                    className={cn(
                      'flex gap-1 relative bg-gray-100 box-border rounded-full h-[24px]  items-center  min-w-[90px] ',
                      selected.id === item.id &&
                        'bg-[#E0F2FE] text-theme-ocean-blue',
                    )}
                    style={
                      selected.id === item.id
                        ? { border: '0.5px solid #087AAF' }
                        : {}
                    }
                  >
                    <img
                      style={
                        selected.id === item.id
                          ? { border: '0.5px solid #087AAF', left: -1 }
                          : {}
                      }
                      src={item.avatar}
                      alt={item.name}
                      className=" relative h-[24px] w-auto max-h-[24px] max-w-[24px] aspect-square object-cover rounded-full"
                    />
                    <Text as="span" variant="sub-title-medium">
                      {item.name}
                    </Text>
                  </div>
                </DropdownItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSelect;
