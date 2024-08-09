import React from 'react';
import HelpTitle from '../HelpTitle';
import { cn } from '@/utils/cn';

interface SharingYourBaseProps {
  onClose: () => void;
  onBack: () => void;
  className?: string;
}
const SharingYourBase = ({
  onClose,
  onBack,
  className,
}: SharingYourBaseProps) => {
  return (
    <div
      className={cn(
        ' transition-opacity duration-300 w-full box-border p-4 absolute top-0 left-0  flex flex-col gap-6',
        className,
      )}
    >
      <HelpTitle
        onBack={onBack}
        title="Help / Sharing your base props"
        onClose={onClose}
      />
    </div>
  );
};

export default SharingYourBase;
