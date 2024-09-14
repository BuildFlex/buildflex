import Text from '@/components/typography/Text';
import { MessageQuestion } from 'iconsax-react';
import { useState } from 'react';
import HelpSidebar from './HelpSidebar';

const HelpButton = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const handleClose = () => setIsHelpOpen(false);
  const handleOpen = () => setIsHelpOpen((prev) => !prev);
  return (
    <>
      <div
        id="text"
        onClick={handleOpen}
        className="help flex gap-2  items-center text-white cursor-pointer"
      >
        <MessageQuestion size={16} color={'#FFFFFF'} />
        <Text variant={'B2-Medium'} as="span" className="text-white">
          Help
        </Text>
      </div>
      {isHelpOpen && <HelpSidebar onClose={handleClose} />}
    </>
  );
};

export default HelpButton;
