import { FormulaIcon } from '@/components/icons';
import Text from '@/components/typography/Text';

const ExpandFormula = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Formula  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <FormulaIcon />
        <Text as="span" variant="B2-Regular">
          Formula
        </Text>
      </div>
      <div className="max-w-[430px] p-2 h-9 w-full">
        <Text as="span" variant="B2-Regular">
          Result
        </Text>
      </div>
    </div>
  );
};

export default ExpandFormula;
