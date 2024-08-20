import TagSelect from '@/components/select/tag-select';
import Text from '@/components/typography/Text';
import { ArrowCircleDown, ArrowCircleDown2, Task } from 'iconsax-react';

const ExpandSingleSelect = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Multiple Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <ArrowCircleDown size={16} />
        <Text as="span" variant="B2-Regular">
          Single select
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <TagSelect
          initialValue={TagList[0]}
          className="rounded-lg"
          tags={TagList}
          position="top"
        />
      </div>
    </div>
  );
};

export default ExpandSingleSelect;

const TagList = [
  {
    id: 'Text-1',
    name: 'Text 1',
    className: 'bg-gray-50',
  },
  {
    id: 'Text-2',
    name: 'Text 2',
    className: 'bg-[#CFF5D1]',
  },
  {
    id: 'Text-3',
    name: 'Text 3',
    className: 'bg-[#FFD4E0]',
  },
  {
    id: 'Text-4',
    name: 'Text 4',
    className: 'bg-[#FFD4E0]',
  },
];
