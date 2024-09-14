import Text from '@/components/typography/Text';
import { Divider, Dropdown } from 'antd';
import { Share, Star1 } from 'iconsax-react';

import DropdownCollapse from '../dropdown-collapse/DropdownCollapse';
import MoreDropdown from './MoreDropdown';

interface ProjectNameDropdownProps {
  name: string;
}
const ProjectNameDropdown = ({ name }: ProjectNameDropdownProps) => {
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomLeft"
      dropdownRender={(menu) => (
        <div className="flex gap-3 flex-col p-3 overflow-hidden box-border rounded-lg w-[400px]">
          <div className="cursor-default items-center flex  h-10 text-gray-500 hover:bg-transparent">
            <p className=" text-xl leading-[26px]  font-bold  font-lato mx-3 whitespace-nowrap truncate">
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
          <Divider className="bg-borderColor !my-0" />
          <DropdownCollapse />
        </div>
      )}
      className=""
      overlayClassName="project-name-dropdown rounded-lg boxShadowSecondary"
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
