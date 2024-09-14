import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { Dropdown, MenuProps } from 'antd';
import { Element3, Home2, SearchNormal1, Share } from 'iconsax-react';
import { ReactNode } from 'react';
const items: MenuProps['items'] = [
  {
    key: 'section-1',
    label: (
      <DropdownItem>
        <Home2 size={16} />
        <Text as="span" variant="B2-Regular">
          Home
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'section-2',
    label: (
      <DropdownItem>
        <Element3 size={16} />
        <Text as="span" variant="B2-Regular">
          My Workspace
        </Text>
      </DropdownItem>
    ),
  },
  {
    key: 'section-3',
    label: (
      <DropdownItem>
        <Share size={16} />
        <Text as="span" variant="B2-Regular">
          Shared
        </Text>
      </DropdownItem>
    ),
  },
];
const SearchDropdown = ({ children }: { children: ReactNode }) => {
  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      placement="bottomLeft"
      align={{ offset: [0, -45] }}
      dropdownRender={(menu) => (
        <div className="flex flex-col gap-1 p-3 sidebar__search-dropdown">
          <div className=" border-b border-neutral-200">
            <CustomInput
              placeholder="Search"
              autoFocus={true}
              prefixIcon={
                <SearchNormal1
                  className="min-w-4"
                  size={16}
                  color={'#6A758B'}
                />
              }
              className="h-9  custom-input"
            />
          </div>
          {menu}
        </div>
      )}
      overlayClassName=" boxShadowSecondary !rounded-lg"
    >
      {children}
    </Dropdown>
  );
};

export default SearchDropdown;
