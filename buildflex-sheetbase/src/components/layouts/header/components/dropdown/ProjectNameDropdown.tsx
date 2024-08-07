import Text from '@/components/typography/Text';
import { Dropdown, MenuProps } from 'antd';
import { Share, Star1 } from 'iconsax-react';

import DropdownCollapse from '../dropdown-collapse/DropdownCollapse';
import MoreDropdown from './MoreDropdown';

interface ProjectNameDropdownProps {
  name: string;
}
const ProjectNameDropdown = ({ name }: ProjectNameDropdownProps) => {
  const items: MenuProps['items'] = [
    {
      key: 'project-name',
      type: 'group',
      label: (
        <div className="cursor-default items-center flex mb-3   h-10 text-gray-500 hover:bg-transparent">
          <p className=" text-xl  font-bold  font-lato mx-3 whitespace-nowrap truncate">
            {name}
          </p>
          <Star1
            className="px-2 ml-auto cursor-pointer"
            size={16}
            color="#101828"
          />
          <Share className="px-2 cursor-pointer" size={16} color="#101828" />
          <MoreDropdown />
        </div>
      ),
    },
    {
      key: 'project-setting',
      label: (
        <div onClick={(e) => e?.stopPropagation()}>
          <DropdownCollapse />
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      placement="bottomLeft"
      className=""
      overlayClassName="project-name-dropdown boxShadowSecondary"
    >
      <div>
        <Text variant={'B2-Bold'} as={'span'}>
          {name}
        </Text>
      </div>
    </Dropdown>
  );
};

export default ProjectNameDropdown;
