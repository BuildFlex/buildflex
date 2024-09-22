import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownItem from '../common/dropdown/DropdownItem';
import Tag from '../sidebar/components/dropdown/TeamTag';
import Text from '../typography/Text';
interface ITag {
  id: string;
  name: string;
  className: string;
}
interface TagSelectProps {
  className?: string;
  dropdownClassName?: string;
  tags: ITag[];
  position?: 'top' | 'bottom';
  initialValue?: ITag;
  dropdownRender?: React.ReactNode;
}

const TagSelect = ({
  tags,
  dropdownClassName,
  className,
  initialValue,
  position = 'bottom',
}: TagSelectProps) => {
  const [isShow, setIsShow] = React.useState(false);
  const [selected, setSelected] = useState<ITag | null>(initialValue ?? null);
  const onClose = () => setIsShow(false);
  const ref = useOutsideClick(onClose, true);
  const handleSelect = (value: ITag) => setSelected(value);
  return (
    <div
      className={cn(
        'h-9 px-2 relative w-full cursor-pointer box-border rounded flex items-center gap-2',
        className,
      )}
      style={{ border: '1px solid #EDEDED' }}
      ref={ref}
      onClick={() => setIsShow((prev) => !prev)}
    >
      {selected && (
        <Tag
          key={selected.id}
          name={selected.name}
          textVariant="sub-title-medium"
          className={cn(
            'w-auto ml-0 whitespace-nowrap text-neutral-dark-500 ',
            selected.className,
          )}
        />
      )}
      <ArrowDown2 className="ml-auto" size={16} />
      {isShow && (
        <div
          className={cn(
            'w-full z-[10] p-3 box-border absolute flex flex-col gap-3 rounded-lg bottom-[120%] left-0 bg-white boxShadowSecondary',

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
            {tags.map((item) => {
              return (
                <DropdownItem
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={cn(' hover:bg-gray-50 cursor-pointer', {
                    'bg-gray-100 hover:bg-gray-100': selected?.id === item.id,
                  })}
                >
                  <Tag
                    name={item.name}
                    className={cn(
                      'w-auto ml-0  text-neutral-dark-500 ',
                      item.className,
                    )}
                  />
                </DropdownItem>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TagSelect;
