import TextArea from 'antd/es/input/TextArea';
import { DocumentDownload, InfoCircle } from 'iconsax-react';

const BaseGuideContent = () => {
  return (
    <div className="w-full !font-lato flex whitespace-normal flex-col ">
      <TextArea
        defaultValue={defaultText}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || (e.key === 'Enter' && e.shiftKey)) {
            e.stopPropagation();
          }
        }}
        className=" !bg-neutral-50 !font-lato !resize-none !text-neutral-dark-500"
        autoSize={{ maxRows: 10 }}
      />
      <div className="flex items-center gap-2 px-2 py-[7px]">
        <DocumentDownload color="#6A758B" size={16} />
        <span className="text-xs  text-neutral-dark-300">
          Styling with markdown is supported
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 px-2 py-[7px] text-neutral-dark-300">
        <InfoCircle className="min-w-[16px]" size={16} color="#6A758B" />
        <span>
          Base guide will be shown the first time someone opens this base.
        </span>
      </div>
    </div>
  );
};

export default BaseGuideContent;

const defaultText = `Use this space to share the goals and details of your base with your team.

Start by outlining your goal.

Next, share details about key information in your base:

This table contains…

This view shows…

This link contains…

Teammates will see this guide when they first open the base and can find it anytime by clicking the down arrow on the top of their screen.`;
