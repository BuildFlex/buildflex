import { CloseIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Switch } from 'antd';
import { ArrowCircleLeft } from 'iconsax-react';
import React, { useState } from 'react';

interface RecordRevisionHistorySubmenu {
  handleBackClick: () => void;
}
const RecordRevisionHistorySubmenu = ({
  handleBackClick,
}: RecordRevisionHistorySubmenu) => {
  const [isAllowLinking, setIsAllowLinking] = useState<boolean>(false);
  return (
    <>
      <div className="items-center flex gap-2  font-lato px-2 py-[7px]  ">
        <div className="size-4 cursor-pointer" onClick={handleBackClick}>
          <ArrowCircleLeft size={16} color="#0D7FAB" />
        </div>
        <Text as="span" variant="B2-Regular">
          Record revision history
        </Text>
      </div>

      <div className="h-[1px] bg-border" />
      <div className="flex flex-col  ">
        <div className=" gap-3 flex items-center  px-2 py-[7px] ">
          <Switch
            size="small"
            checked={isAllowLinking}
            onChange={setIsAllowLinking}
          />
          <Text as="span" variant="B2-Regular">
            Allow linking to multiple records
          </Text>
        </div>
        {isAllowLinking && (
          <div className=" gap-2 flex items-center  px-2 py-[7px] cursor-pointer">
            <CloseIcon />
            <Text as="span" variant="B2-Regular">
              Recover revision history
            </Text>
          </div>
        )}
      </div>
    </>
  );
};

export default RecordRevisionHistorySubmenu;