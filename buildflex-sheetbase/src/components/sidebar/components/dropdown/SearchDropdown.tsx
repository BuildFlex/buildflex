import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown, Input, MenuProps } from 'antd';
import { Element3, Home2, SearchNormal1, Share } from 'iconsax-react';
import React, { ReactNode } from 'react';
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
            <Input
              placeholder="Search"
              autoFocus={true}
              prefix={<SearchNormal1 size={16} color={'#6A758B'} />}
              style={{
                padding: '0 8px',
                boxShadow: 'none',
                borderRadius: '4px',
              }}
              className="h-9 flex custom-input !text-neutral-dark-500 !cursor-default gap-2 items-center sidebar__search"
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
