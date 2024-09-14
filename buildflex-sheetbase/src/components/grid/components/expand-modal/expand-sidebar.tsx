import ConversationIcon from '@/components/icons/conversation-icon';
import Text from '@/components/typography/Text';
import { ArrowDown2, Notification } from 'iconsax-react';
import React from 'react';

interface ExpandSideBarProps {
  onClose: (isOpen: boolean) => void;
}
const ExpandSideBar = ({ onClose }: ExpandSideBarProps) => {
  return (
    <div
      className=" flex flex-col gap-4 box-border w-[360px] min-w-[360px]"
      style={{ borderLeft: '1px solid #EDEDED' }}
    >
      <div
        style={{ borderBottom: '1px solid #EDEDED' }}
        className="px-4 h-10 flex items-center"
      >
        <div className="gap-2  flex items-center">
          <Text as="span" variant="B2-Regular">
            Comments
          </Text>
          <ArrowDown2 size={16} />
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <Notification size={16} />
          <ArrowDown2 size={16} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 justify-center flex-1">
        <ConversationIcon />
        <div className="flex flex-col gap-2 items-center justify-center">
          <Text as="span" variant="B2-Regular">
            Start a conversation
          </Text>
          <Text
            as="span"
            variant="sub-title"
            className="text-neutral-dark-300 text-center px-3"
          >
            Ask questions, keep track of status updates, and collaborate with
            your team — directly in BuildFlex.
          </Text>
        </div>
        <button className="bg-[#E0F2FE] text-theme-ocean-blue px-4 py-[6px] h-9 box-border border-none cursor-pointer rounded-lg ">
          <Text as="span" variant="B2-Regular">
            Invite collaborators
          </Text>
        </button>
      </div>
      <div
        style={{ borderTop: '1px solid #EDEDED' }}
        className="px-3 h-[82px] box-border py-2 "
      >
        <label
          style={{ border: '1px solid #EDEDED' }}
          className="rounded h-full relative flex gap-2 w-full p-2"
        >
          <img
            src={
              'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg'
            }
            alt="attachment"
            className="object-cover rounded-full w-6 h-6"
          />
          <textarea
            className="p-0 m-0 w-full placeholder:text-neutral-dark-300 font-lato text-sm border-none resize-none "
            style={{ boxShadow: 'none' }}
            placeholder="Leave a comment"
          />
          <button className="size-4 bg-transparent text-neutral-dark-300 border-none absolute bottom-2 right-2">
            <Text as="span" variant="B2-Regular">
              @
            </Text>
          </button>
        </label>
      </div>
    </div>
  );
};

export default ExpandSideBar;
