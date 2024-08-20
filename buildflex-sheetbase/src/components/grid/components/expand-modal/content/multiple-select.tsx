import TagMultipleSelect from '@/components/select/tag-multiple-select';
import Text from '@/components/typography/Text';
import { Task } from 'iconsax-react';

const ExpandMultipleSelect = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Multiple Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <Task size={16} />
        <Text as="span" variant="B2-Regular">
          Multiple select
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <TagMultipleSelect
          initialValue={[TagList[0], TagList[1]]}
          className="rounded-lg"
          tags={TagList}
        />
      </div>
    </div>
  );
};

export default ExpandMultipleSelect;

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
