import Text from '@/components/typography/Text';
import { Folder2 } from 'iconsax-react';

const ProjectStatus = () => {
  return (
    <div className="workspace__base-status flex items-center  gap-1">
      <div className="workspace__drive text-xs flex items-center gap-1 cursor-pointer">
        <Folder2 size={16} variant="Bold" color="#F2F4F7" />
        <Text as={'span'} variant={'sub-title'} className="text-gray-100">
          Drive
        </Text>
      </div>
      <Text as={'span'} variant={'sub-title'} className="text-gray-100">
        |
      </Text>
      <div className="workspace__last-modified-status text-xs">
        <Text as={'span'} variant={'sub-title'} className="text-gray-100">
          Lasted modifield: 12:01 Am Jul 11
        </Text>
      </div>
    </div>
  );
};

export default ProjectStatus;
