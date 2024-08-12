import { CheckBoxIcon, MoreVert } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Dropdown, MenuProps } from 'antd';
import { Copy, Slack, Trash } from 'iconsax-react';

const MoreButton = () => {
  return (
    <Dropdown
      menu={{ items: moreItems }}
      trigger={['click']}
      placement="bottomRight"
      className="flex items-center relative justify-center"
      overlayClassName=" boxShadowSecondary !w-[280px] project-more-dropdown "
    >
      <div className="size-9 flex items-center justify-center box-border hover:text-neutral-dark-500 text-neutral-dark-300">
        <MoreVert className="size-4 px-2 cursor-pointer " />
      </div>
    </Dropdown>
  );
};

export default MoreButton;

const moreItems: MenuProps['items'] = [
  {
    key: 'hide-groups-with-no-records',
    label: (
      <div className="flex gap-2 items-center  text-neutral-dark-500">
        <Text as="span" variant="B2-Regular">
          Hide groups with no records
        </Text>
        <CheckBoxIcon className="ml-auto" color="#026AA2" />
      </div>
    ),
  },
  {
    key: 'show-groups-with-no-records',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <Text as="span" variant="B2-Regular">
          Show groups with no records
        </Text>
      </div>
    ),
  },
];
