import Text from '@/components/typography/Text';
import { TextalignJustifycenter } from 'iconsax-react';

const ExpandNote = () => {
  return (
    <div className="flex justify-between items-start">
      {/* Note Title */}
      <div className="flex items-center gap-2 text-neutral-dark-300">
        <TextalignJustifycenter size={16} />
        <Text as="span" variant="B2-Regular">
          Notes
        </Text>
      </div>
      {/* Note Input */}
      <label
        style={{ border: '1px solid #EDEDED' }}
        className="rounded-lg max-w-[430px] h-20 relative flex gap-2 w-full p-2"
      >
        <textarea
          className="p-0 m-0 w-full placeholder:text-neutral-dark-300 font-lato text-sm border-none resize-none "
          style={{ boxShadow: 'none' }}
          defaultValue={
            "Summary of the current user's work that is in progress or upcoming."
          }
        />
        <button className="size-4 bg-transparent text-neutral-dark-300 border-none absolute bottom-2 right-2">
          <Text as="span" variant="B2-Regular">
            @
          </Text>
        </button>
      </label>
    </div>
  );
};

export default ExpandNote;
