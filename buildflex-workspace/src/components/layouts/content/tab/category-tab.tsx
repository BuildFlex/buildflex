import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
interface CategoryTabProps {
  label: string;
  id: string;
  activeTab: string;
  disabled?: boolean;
  setActiveTab: (tab: string) => void;
}
const CategoryTab = ({
  label,
  id,
  activeTab,
  disabled,
  setActiveTab,
}: CategoryTabProps) => {
  return (
    <button
      disabled={disabled}
      onClick={() => setActiveTab(id)}
      className={cn(
        'h-7 px-5 rounded-full py-1 relative z-[1] cursor-pointer border-none outline-none  w-fit box-border flex items-start',
        activeTab === id
          ? 'bg-neutral-dark-500  text-white'
          : 'bg-transparent  text-neutral-dark-500',
      )}
    >
      <Text as="span" variant="B2-Regular">
        {label}
      </Text>
    </button>
  );
};

export default CategoryTab;
