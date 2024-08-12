import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { ArrowRight2, Code, Setting2 } from 'iconsax-react';
import React from 'react';
import { ShareAndSyncTab } from '../../components/dropdown-render/ShareAndSyncDropdownRender';

interface LinkContentProps {
  link: string;
  setActiveTab: React.Dispatch<React.SetStateAction<ShareAndSyncTab | null>>;
}
const LinkContent = ({ link, setActiveTab }: LinkContentProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <Text as="span" variant="B2-SemiBold">
          Share link to this view
        </Text>
        <DropdownItem
          style={{ border: '1px solid #EDEDED' }}
          className=" gap-3 rounded px-2 py-1 h-9 text-neutral-dark-300"
        >
          <Text as="span" variant="B2-Regular" className="truncate">
            {link}
          </Text>
          <button className="border-none shadow-none outline-none bg-transparent px-3 py-1 h-7 box-border rounded-md cursor-pointer">
            <Text
              as="span"
              variant="sub-title-medium"
              className="text-primary-700 whitespace-nowrap"
            >
              Copy link
            </Text>
          </button>
        </DropdownItem>
      </div>
      <DropdownItem
        onClick={() => setActiveTab('share-setting-tab')}
        className="text-neutral-dark-500 cursor-pointer"
      >
        <Setting2 size={16} />
        <Text as="span" variant="B2-Regular">
          Setting
        </Text>
        <ArrowRight2 size={16} className="ml-auto" />
      </DropdownItem>
    </div>
  );
};

export default LinkContent;
