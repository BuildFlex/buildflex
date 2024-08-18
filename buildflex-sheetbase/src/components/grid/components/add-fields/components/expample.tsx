import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
interface ExampleProps {
  className?: string;
  textClassName?: string;
}
export const Example = ({ className, textClassName }: ExampleProps) => {
  return (
    <div
      className={cn(
        'p-3 flex flex-col gap-1 rounded text-neutral-dark-500 boxShadowSecondary w-[258px] box-border ',
        className,
      )}
    >
      <DropdownItem>
        <Text as="span" variant="B2-Regular">
          Examples
        </Text>
      </DropdownItem>
      <div className="px-2 flex flex-col">
        <Text
          as="span"
          variant="B2-Regular"
          className={cn('text-danger font-sourceCodePro', textClassName)}
        >
          Amount * Price
        </Text>
        <Text
          as="span"
          variant="B2-Regular"
          className={cn('text-danger font-sourceCodePro', textClassName)}
        >
          AVERAGE(field1, field2)
        </Text>
        <Text
          as="span"
          variant="B2-Regular"
          className={cn('text-danger font-sourceCodePro', textClassName)}
        >
          Name & "-" & Date
        </Text>
        <Text
          as="span"
          variant="B2-Regular"
          className={cn('text-danger font-sourceCodePro', textClassName)}
        >
          {'IF(Price * Quantity > 5, "Yes", "No")'}
        </Text>
      </div>
    </div>
  );
};
