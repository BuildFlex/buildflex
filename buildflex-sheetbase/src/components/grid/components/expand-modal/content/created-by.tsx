import Text from '@/components/typography/Text';
import { UserTick } from 'iconsax-react';

const ExpandCreatedBy = () => {
  return (
    <div className="flex justify-between items-start">
      {/* CreatedBy  Select Title */}
      <div className="flex items-center h-9  gap-2 text-neutral-dark-300">
        <UserTick size={16} />
        <Text as="span" variant="B2-Regular">
          CreatedBy
        </Text>
      </div>
      <div
        className="max-w-[430px] w-full rounded-lg h-9 box-border p-2 flex items-center"
        style={{ border: '1px solid #E5E7EB' }}
      >
        <div className="flex gap-1 w-fit bg-gray-100 rounded-full items-center pr-2 box-border min-w-[90px] h-6">
          <img
            src={
              'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg'
            }
            alt={'Isabella Chen'}
            className="w-6 h-6 rounded-full object-cover"
          />
          <Text as="span" variant="sub-title-medium">
            Isabella Chen
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ExpandCreatedBy;
