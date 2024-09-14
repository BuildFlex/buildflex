import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownItem from '../common/dropdown/DropdownItem';
import Text from '../typography/Text';

interface ITime {
  label: string;
  gmt: string;
}
interface TimeZoneSelectProps {
  className?: string;
  dropdownClassName?: string;
  suggestedTimezone: ITime[];
  allTimezone: ITime[];
  position?: 'top' | 'bottom';
  initialValue?: ITime;
}

const TimeZoneSelect = ({
  dropdownClassName,
  className,
  initialValue,
  allTimezone,
  suggestedTimezone,
  position = 'bottom',
}: TimeZoneSelectProps) => {
  const [isShow, setIsShow] = React.useState(false);
  const [selected, setSelected] = useState<ITime>(
    initialValue ?? allTimezone[0],
  );
  const onOpen = () => setIsShow(true);
  const onClose = () => setIsShow(false);
  const ref = useOutsideClick(onClose, true);
  const handleSelect = (value: ITime) => setSelected(value);
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
      <Text as="span" variant="B2-Regular">
        {selected.label}
      </Text>
      <ArrowDown2 className="ml-auto" size={16} />
      {isShow && (
        <div
          className={cn(
            'w-full p-3 box-border absolute flex flex-col gap-3 rounded-lg bottom-[120%] left-0 bg-white boxShadowSecondary',

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
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full flex-col gap-1">
              <DropdownItem>
                <Text as="span" variant="B2-SemiBold">
                  SUGGESTED TIME ZONES
                </Text>
              </DropdownItem>
              {suggestedTimezone.map((item, index) => {
                return (
                  <DropdownItem
                    key={`${item.label}-${index}`}
                    onClick={() => handleSelect(item)}
                    className={cn(' hover:bg-gray-50 cursor-pointer', {
                      'bg-gray-100 hover:bg-gray-100': selected === item,
                    })}
                  >
                    <Text as="span" variant="B2-Regular">
                      {item.label}
                    </Text>
                    <Text
                      as="span"
                      variant="B2-Regular"
                      className="text-neutral-dark-300 ml-auto"
                    >
                      {item.gmt}
                    </Text>
                  </DropdownItem>
                );
              })}
            </div>
            <div className="flex w-full flex-col gap-1">
              <DropdownItem>
                <Text as="span" variant="B2-SemiBold">
                  ALL TIME ZONE
                </Text>
              </DropdownItem>
              {allTimezone.map((item, index) => {
                return (
                  <DropdownItem
                    key={`${item.label}-${index}`}
                    onClick={() => handleSelect(item)}
                    className={cn(' hover:bg-gray-50 cursor-pointer', {
                      'bg-gray-100 hover:bg-gray-100': selected === item,
                    })}
                  >
                    <Text as="span" variant="B2-Regular">
                      {item.label}
                    </Text>
                    <Text
                      as="span"
                      variant="B2-Regular"
                      className="text-neutral-dark-300 ml-auto"
                    >
                      {item.gmt}
                    </Text>
                  </DropdownItem>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeZoneSelect;
