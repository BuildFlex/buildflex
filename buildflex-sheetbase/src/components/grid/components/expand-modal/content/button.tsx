import { CursorDefaultIcon } from '@/components/icons';
import Text from '@/components/typography/Text';

const ExpandButton = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Button  Select Title */}
      <div className="flex items-center h-10  gap-2 text-neutral-dark-300">
        <CursorDefaultIcon />
        <Text as="span" variant="B2-Regular">
          Button
        </Text>
      </div>
      <div className="max-w-[430px] h-10 box-border p-2 w-full">
        <button className="cursor-pointer flex items-center bg-transparent border-none px-3 py-1 h-6 box-border ">
          <Text as="span" variant="B2-Medium" className="text-theme-ocean-blue">
            Button
          </Text>
        </button>
      </div>
    </div>
  );
};

export default ExpandButton;
