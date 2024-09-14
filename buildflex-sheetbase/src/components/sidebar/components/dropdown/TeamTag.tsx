import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
interface TagProps {
  name: string;
  className?: string;
  textVariant?: 'B2-Medium' | 'sub-title-medium';
}
const Tag = ({ name, className, textVariant = 'B2-Medium' }: TagProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-6 flex items-center justify-center box-border w-[57px] px-3 ml-auto bg-semantic-50 text-semantic-600',
        className,
      )}
    >
      <Text
        as="span"
        variant={textVariant}
        className={textVariant === 'B2-Medium' ? 'h-[18px]' : 'h-[16px]'}
      >
        {name}
      </Text>
    </div>
  );
};

export default Tag;
