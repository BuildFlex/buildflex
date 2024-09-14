import DropdownItem from '@/components/common/dropdown/DropdownItem';

import Text from '@/components/typography/Text';
import { MenuProps } from 'antd';
import { Code, Keyboard, Link } from 'iconsax-react';

export const ShareAndSyncItems: MenuProps['items'] = [
  {
    key: 'create-new-link',
    label: (
      <DropdownItem className="text-neutral-dark-500">
        <Link size={16} />
        <Text as="span" variant="B2-Regular">
          Create new link
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
  },
  {
    key: 'embed-this-view',
    label: (
      <DropdownItem className="text-neutral-dark-500">
        <Code size={16} />
        <Text as="span" variant="B2-Regular">
          Embed this view
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
  },
  {
    key: 'create-a-form-view',
    label: (
      <DropdownItem className="text-neutral-dark-500">
        <Keyboard size={16} />
        <Text as="span" variant="B2-Regular">
          Create a form view
        </Text>
      </DropdownItem>
    ),
  },
];

export default ShareAndSyncItems;
