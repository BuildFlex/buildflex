import Text from '@/components/typography/Text';
import { CalendarTick } from 'iconsax-react';

const ExpandCreated = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Created  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <CalendarTick size={16} />
        <Text as="span" variant="B2-Regular">
          Created
        </Text>
      </div>
      <div className="max-w-[430px] w-full">
        <div
          className="gap-1 p-2 box-border max-w-[180px] rounded-lg h-9 flex justify-between items-end w-full "
          style={{ border: '1px solid #EDEDED' }}
        >
          <Text as="span" variant="B2-Regular" className="whitespace-nowrap  ">
            4/19/2024
          </Text>
          <Text as="span" variant="B2-Regular" className="whitespace-nowrap  ">
            5:24am
          </Text>
          <Text
            as="span"
            variant="sub-title"
            className="whitespace-nowrap text-neutral-dark-300 "
          >
            GMT
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ExpandCreated;
