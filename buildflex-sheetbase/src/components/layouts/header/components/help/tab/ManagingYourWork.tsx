import { cn } from '@/utils/cn';
import HelpTitle from '../HelpTitle';

interface ManagingYourWorkProps {
  onClose: () => void;
  onBack: () => void;
  className?: string;
}
const ManagingYourWork = ({
  onClose,
  onBack,
  className,
}: ManagingYourWorkProps) => {
  return (
    <div
      className={cn(
        ' transition-opacity duration-300 box-border p-4  w-full absolute top-0 left-0  flex flex-col gap-6',
        className,
      )}
    >
      <HelpTitle
        onBack={onBack}
        title="Help / Managing your work"
        onClose={onClose}
      />
    </div>
  );
};

export default ManagingYourWork;
