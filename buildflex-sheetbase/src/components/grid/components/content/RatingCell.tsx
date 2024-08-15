import { RateStarFilledIcon, RateStarIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Star } from 'iconsax-react';
import React from 'react';
interface RatingCellProps {
  rating: number;
  className?: string;
}
const RatingCell = ({ rating, className }: RatingCellProps) => {
  return (
    <div
      className={cn(
        'max-w-[164px] w-full flex items-center gap-1.5',
        className,
      )}
    >
      {Array.from({ length: 5 }).map((_, index) =>
        index < rating ? (
          <RateStarFilledIcon key={index} />
        ) : (
          <RateStarIcon key={index} />
        ),
      )}
    </div>
  );
};

export default RatingCell;
