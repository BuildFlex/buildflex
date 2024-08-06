import { MoreVert } from '@/components/icons';
import { Dropdown, MenuProps } from 'antd';
import { Copy, Slack, Trash } from 'iconsax-react';

const MoreDropdown = () => {
  return (
    <Dropdown
      menu={{ items: moreItems }}
      trigger={['click']}
      placement="bottomLeft"
      className="flex items-center justify-center"
      overlayClassName=" boxShadowSecondary"
    >
      <div>
        <MoreVert className="size-4 px-2 cursor-pointer text-neutral-dark-500" />
      </div>
    </Dropdown>
  );
};

export default MoreDropdown;

const moreItems: MenuProps['items'] = [
  {
    key: 'duplicate-base',
    label: (
      <div className="flex gap-2 items-center  text-neutral-dark-500">
        <Copy size={16} />
        <span> Duplicate base</span>
      </div>
    ),
  },
  {
    key: 'slack-notifications',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <Slack size={16} />
        <span> Duplicate base</span>
      </div>
    ),
  },
  {
    key: 'delete-base',
    label: (
      <div className="flex gap-2 items-center text-danger">
        <Trash size={16} />
        <span> Delete base</span>
      </div>
    ),
  },
];
