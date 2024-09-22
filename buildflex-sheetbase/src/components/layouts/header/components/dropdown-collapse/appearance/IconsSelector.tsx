import { CustomInput } from '@/components/input/Input';
import { SearchNormal1 } from 'iconsax-react';
import { IconsList } from './IconsList';

const IconsSelector = () => {
  return (
    <div className="flex flex-col gap-2">
      <CustomInput
        placeholder="Search icon"
        prefixIcon={
          <SearchNormal1
            className="stroke-medium"
            size={16}
            color={'#6A758B'}
          />
        }
        className="h-9 flex !border-none"
      />
      <div className="flex flex-wrap gap-2">
        {IconsList.map((icon) => (
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
