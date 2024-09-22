import { StarIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { ElementType } from 'react';
import RowMoreDropdown from './row-more-dropdown';

interface CategoryRowProps {
  name: string;
  Icon: ElementType;
  updated: string;
  lastEditor: string;
  isStar?: boolean;
}
const CategoryRow = ({
  name,
  Icon,
  updated,
  lastEditor,
  isStar = false,
}: CategoryRowProps) => {
  return (
    <div
      className="h-10 w-full flex items-center max-h-10  hover:bg-gray-100 group  "
      style={{ borderRadius: '12px' }}
    >
      <div className="px-2 rounded flex-1 min-w-[150px] h-10 gap-2 flex items-center  ">
        <Icon className="size-7" />
        <Text as="span" variant="B2-SemiBold">
          {name}
        </Text>
        {isStar && <StarIcon className="ml-1" />}
      </div>

      <div className="h-10 px-2 min-w-[360px] flex items-center relative ">
        {' '}
        <Text as="span" variant="B2-SemiBold">
          {updated}
        </Text>
      </div>

      <div className="h-10 min-w-[223px] px-2   flex items-center ">
        <Text as="span" variant="B2-SemiBold">
          {lastEditor}
        </Text>
        <div className="items-center flex gap-2" />
      </div>
      <div className="flex items-center h-10 min-w-[169px]   justify-end gap-2 ml-auto">
        <button className="w-[57px]  group-hover:flex hidden rounded-lg py-[6px] h-8 whitespace-nowrap px-4 gap-2  items-center bg-brand-PRIMARY text-white">
          <Text as="span" variant="B2-Medium">
            Edit{' '}
          </Text>
        </button>
        <button className="group-hover:flex w-[64px] hidden border border-neutral-200 rounded-lg py-[6px] h-8 whitespace-nowrap px-4 gap-2  items-center bg-white text-neutral-dark-400">
          <Text as="span" variant="B2-Medium">
            View{' '}
          </Text>
        </button>
        <RowMoreDropdown />
      </div>
    </div>
  );
};

export default CategoryRow;
