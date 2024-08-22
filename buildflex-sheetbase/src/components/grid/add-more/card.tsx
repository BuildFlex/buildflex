import React from 'react';
import Text from '@/components/typography/Text';
import CustomChartIcon from '@/components/icons/custom-chart-icon';

const Card = ({
  title,
  description,
  isTeam = false,
}: {
  title: string;
  description?: string;
  isTeam?: boolean;
}) => {
  return (
    <div className="p-2 hover:bg-gray-50 cursor-pointer rounded-lg gap-3 max-w-[400px] w-full flex items-center">
      <div className="min-w-[100px] bg-[#F0F9FF] rounded-lg h-20 flex items-center justify-center">
        <CustomChartIcon />
      </div>
      <div className=" w-full flex flex-col  gap-1">
        <div className="flex items-center gap-2">
          <Text as="span" variant="B2-Regular">
            {title}
          </Text>
          {isTeam && (
            <div
              className={
                'rounded-2xl h-6 flex items-center justify-center box-border w-[44px] px-2  bg-[#E0F2FE] text-[#026AA2]'
              }
            >
              <Text
                as="span"
                variant={'sub-title-medium'}
                className={'h-[16px]'}
              >
                Team
              </Text>
            </div>
          )}
        </div>
        {description && (
          <Text as="span" variant="sub-title" className="text-neutral-dark-300">
            {description}
          </Text>
        )}
      </div>
    </div>
  );
};

export default Card;
