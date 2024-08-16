import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { ArrowCircleLeft, InfoCircle } from 'iconsax-react';
import React, { useState } from 'react';

interface SnapshotSubmenuProps {
  handleBackClick: () => void;
  className?: string;
}
const SnapshotSubmenu = ({
  className,
  handleBackClick,
}: SnapshotSubmenuProps) => {
  const [isSnapshot, setIsSnapshot] = useState<boolean>(false);
  return (
    <div
      className={cn(
        'absolute top-0 transition-opacity  duration-300 flex flex-col gap-3',
        className,
      )}
    >
      <div className="items-center flex gap-2  font-lato px-2 py-[7px]  ">
        <div className="size-4 cursor-pointer" onClick={handleBackClick}>
          <ArrowCircleLeft size={16} color="#0D7FAB" />
        </div>
        <Text as="span" variant="B2-Regular">
          Snapshots
        </Text>
      </div>

      <div className="h-[1px] bg-borderColor" />
      <div className="flex flex-col ">
        <div
          onClick={() => setIsSnapshot(true)}
          className="px-2 py-[7px] w-fit  mb-2 cursor-pointer"
        >
          {isSnapshot ? (
            <Text
              className="text-neutral-dark-300"
              as="span"
              variant="B2-Regular"
            >
              You recently took a snapshot. Please wait to take another.
            </Text>
          ) : (
            <Text as="span" variant="B2-Regular">
              Take snapshot
            </Text>
          )}
        </div>
        {isSnapshot && (
          <div className="px-2   h-8  box-border py-[7px]">
            <Text as="span" variant="B2-Regular">
              10 seconds ago
            </Text>
          </div>
        )}
        <div className="h-[1px] bg-borderColor" />
        <div className="flex mt-2 items-center rounded gap-2 px-2 py-[7px] bg-neutral-dark-100 text-neutral-dark-300">
          <InfoCircle className="min-w-[16px]" size={16} color="#6A758B" />
          <span>You have 1 year of snapshot history. Learn more</span>
        </div>
      </div>
    </div>
  );
};

export default SnapshotSubmenu;
