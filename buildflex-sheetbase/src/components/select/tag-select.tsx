import { AddSquare } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownItem from '../common/dropdown/DropdownItem';
import Text from '../typography/Text';
import Tag from '../sidebar/components/dropdown/TeamTag';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';

const TagList = [
  {
    id: 'sheetBase-1',
    name: 'SheetBase 1',
    color: 'bg-[#F2F4F7]',
  },
  {
    id: 'sheetBase-2',
    name: 'SheetBase 2',
    color: 'bg-[#CFF5D1]',
  },
  {
    id: 'sheetBase-3',
    name: 'SheetBase 3',
    color: 'bg-[#FFD4E0]',
  },
];
interface ITag {
  id: string;
  name: string;
  color: string;
}
const TagSelect = () => {
  const [isShow, setIsShow] = React.useState(false);
  const [selectedTag, setSelectedTag] = useState<ITag[]>([]);
  const onOpen = () => setIsShow(true);
  const onClose = () => setIsShow(false);
  const ref = useOutsideClick(onClose, true);
  const handleSelect = (tag: ITag) => {
    setSelectedTag((prev) => {
      if (prev.find((item) => item.id === tag.id)) {
        return prev.filter((item) => item.id !== tag.id);
      }
      return [...prev, tag];
    });
  };
  return (
    <div
      className="h-9 px-2 relative w-full box-border rounded flex items-center gap-2"
      style={{ border: '1px solid #EDEDED' }}
      ref={ref}
    >
      {selectedTag.map((tag) => (
        <Tag
          key={tag.id}
          name={tag.name}
          className={cn('w-auto ml-0  text-neutral-dark-500 ', tag.color)}
        />
      ))}
      <button
        onClick={onOpen}
        className="border-none p-0 size-5 outline-none shadow-none bg-transparent rounded relative cursor-pointer"
      >
        <AddSquare
          className="relative z-[1]"
          size={20}
          color="#F2F4F7"
          variant="Bold"
        />
        <div className="absolute top-1/2 z-[0] left-1/2 -translate-x-1/2 -translate-y-1/2 transform size-3 bg-[#6A758B] " />
      </button>
      {isShow && (
        <div className="w-full p-3 absolute flex flex-col gap-3 rounded-lg bottom-[120%] left-0 bg-white boxShadowSecondary">
          <DropdownItem className="text-neutral-dark-300">
            <Text as="span" variant="B2-Regular">
              Find an option
            </Text>
          </DropdownItem>
          <div className="flex w-full flex-col gap-1">
            {TagList.map((tag) => {
              const isSelected = selectedTag.find((item) => item.id === tag.id);
              return (
                <DropdownItem
                  key={tag.id}
                  onClick={() => handleSelect(tag)}
                  className={cn(' hover:bg-gray-50 cursor-pointer', {
                    'bg-gray-100 hover:bg-gray-100': isSelected,
                  })}
                >
                  <Tag
                    name={tag.name}
                    className={cn(
                      'w-auto ml-0  text-neutral-dark-500 ',
                      tag.color,
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
