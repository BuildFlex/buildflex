import { Input } from 'antd';
import { SearchNormal1 } from 'iconsax-react';
import { IconsList } from './IconsList';

const IconsSelector = () => {
  return (
    <div className="flex flex-col gap-2">
      <Input
        placeholder="Search icon"
        prefix={
          <SearchNormal1
            className="stroke-medium"
            size={16}
            color={'#6A758B'}
          />
        }
        style={{ padding: '0px' }}
        className="h-9 flex gap-2 text-neutral-dark-500 items-center project_name_dropdown__search"
      />
      <div className="flex flex-wrap gap-2">
        {IconsList.map((icon, index) => (
          <div
            className="size-8 rounded flex items-center justify-center text-primary-900 hover:bg-primary-100"
            key={icon.name}
          >
            {icon.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsSelector;
