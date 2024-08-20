import {
  RateStarFilledIcon,
  RateStarIcon,
  RateStarOutlineIcon,
} from '@/components/icons';
import Text from '@/components/typography/Text';

const ExpandRating = () => {
  const rating = 3;
  return (
    <div className="flex justify-between items-start">
      {/* Rating  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <RateStarOutlineIcon color="currentColor" size={16} />
        <Text as="span" variant="B2-Regular">
          Rating
        </Text>
      </div>

      <div className="max-w-[430px] w-full">
        <div
          style={{ border: '1px solid #E5E7EB' }}
          className={
            'max-w-[164px] w-fit flex items-center gap-2 rounded-lg h-9 box-border p-2 '
          }
        >
          {Array.from({ length: 5 }).map((_, index) =>
            index < rating ? (
              <RateStarFilledIcon className="size-4" key={index} />
            ) : (
              <RateStarIcon className="size-4" key={index} />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandRating;
