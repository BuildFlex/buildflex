import { MoveToIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Add } from 'iconsax-react';
import { useState } from 'react';

const ExpandLinkToAnotherRecord = () => {
  const [links, setLinks] = useState(0);
  return (
    <div className="flex justify-between items-start">
      {/* LinkToAnotherRecord  Select Title */}
      <div className="flex items-center h-full  gap-2 text-neutral-dark-300">
        <MoveToIcon color="currentColor" size={16} />
        <Text as="span" variant="B2-Regular">
          Link to another record
        </Text>
      </div>
      <div className="max-w-[430px] flex flex-col gap-2 w-full">
        {links === 0 ? (
          <button
            onClick={() => setLinks(2)}
            className="text-neutral-dark-500 w-fit p-2 h-9 box-border rounded-lg bg-transparent cursor-pointer flex gap-2"
            style={{ border: '1px solid #EDEDED' }}
          >
            <Add size={16} className=" " />
            <Text as="span" variant="B2-Regular">
              Add record
            </Text>
          </button>
        ) : (
          Array.from({ length: links }).map((number) => (
            <div
              key={`record-${number as number}`}
              className="w-full flex  rounded-lg overflow-hidden"
              style={{ border: '1px solid #EDEDED' }}
            >
              <div className="w-full  flex-col h-[90px] flex justify-between flex-1 p-2">
                <Text as="span" variant="B2-SemiBold">
                  Plan a webinar series with coding experts
                </Text>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col h-11 justify-between">
                    <Text
                      as="span"
                      variant="sub-title"
                      className=" text-neutral-dark-400"
                    >
                      Status
                    </Text>
                    <div className="text-neutral-dark-500 px-2 h-6 box-border rounded-[100px] w-fit bg-success-200">
                      <Text as="span" variant="sub-title">
                        Done
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col h-11 justify-between">
                    <Text
                      as="span"
                      variant="sub-title"
                      className=" text-neutral-dark-400"
                    >
                      Assignee
                    </Text>
                    <div className="text-neutral-dark-500 px-2 h-6 box-border rounded-[100px] w-fit bg-[#E0F2FE]">
                      <Text as="span" variant="sub-title">
                        Sarah Johnson
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-[96px]  h-11 justify-between">
                    <Text
                      as="span"
                      variant="sub-title"
                      className="truncate text-neutral-dark-400"
                    >
                      Daily time required
                    </Text>
                    <Text as="span" variant="B2-Regular">
                      50%
                    </Text>
                  </div>
                </div>
              </div>
              <img
                src="/avatar.png"
                alt="placeholder"
                className="w-[90px] h-[90px]"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExpandLinkToAnotherRecord;
