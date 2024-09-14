import DropdownItem from '@/components/common/dropdown/DropdownItem';
import {
  RowHeightExtraIcon,
  RowHeightMediumIcon,
  RowHeightShortIcon,
  RowHeightTallIcon,
} from '@/components/icons';
import Text from '@/components/typography/Text';
import { MenuProps } from 'antd';

export const RowHeightItems: MenuProps['items'] = [
  {
    key: 'short',
    type: 'group',
    label: (
      <DropdownItem className="text-neutral-dark-300">
        <Text as="span" variant="B2-Regular">
          Select a row height
        </Text>
      </DropdownItem>
    ),
  },

  {
    key: 'row-height-short',
    label: (
      <DropdownItem>
        <RowHeightShortIcon />
        <Text as="span" variant="B2-Regular">
          Short
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'row-height-medium',
    label: (
      <DropdownItem>
        <RowHeightMediumIcon />
        <Text as="span" variant="B2-Regular">
          Medium
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'row-height-tall',
    label: (
      <DropdownItem>
        <RowHeightTallIcon />
        <Text as="span" variant="B2-Regular">
          Tall
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'row-height-extra-tall',
    label: (
      <DropdownItem>
        <RowHeightExtraIcon />
        <Text as="span" variant="B2-Regular">
          Extra Tall
        </Text>
      </DropdownItem>
    ),
  },
];

export default RowHeightItems;
