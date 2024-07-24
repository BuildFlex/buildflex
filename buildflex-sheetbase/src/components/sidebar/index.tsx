import React from 'react';
import { Collapse, ConfigProvider } from 'antd';
import type { CollapseProps } from 'antd';
import Text from '../typography/Text';
import {
  Clock,
  DocumentText,
  ElementEqual,
  Folder2,
  Grid1,
  Add,
} from 'iconsax-react';

const listClassName =
  'hover:bg-primary-600 cursor-pointer h-9 flex items-center px-1 gap-2 rounded-md';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Create',
    children: (
      <ul className={'list-none p-0 m-0'}>
        <li className={listClassName}>
          <Grid1 size={16} />
          <Text variant={'B2-Regular'}>Table</Text>
          <Add size={16} className={'ml-auto'} />
        </li>
        <li className={listClassName}>
          <ElementEqual size={16} />
          <Text variant={'B2-Regular'}>Form</Text>
          <Add size={16} className={'ml-auto'} />
        </li>
        <li className={listClassName}>
          <Clock size={16} />
          <Text variant={'B2-Regular'}>Dashboard</Text>
          <Add size={16} className={'ml-auto'} />
        </li>
        <li className={listClassName}>
          <DocumentText size={16} />
          <Text variant={'B2-Regular'}>Document</Text>
          <Add size={16} className={'ml-auto'} />
        </li>
        <li className={listClassName}>
          <Folder2 size={16} />
          <Text variant={'B2-Regular'}>Section</Text>
          <Add size={16} className={'ml-auto'} />
        </li>
      </ul>
    ),
  },
];
export default function SideBar() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <aside className={'sidebar w-64 flex flex-col justify-between'}>
      <section className="sidebarListTable bg-white h-full">
        sidebarListTable
      </section>
      <section className="sidebarCreate bg-gradient-to-br from-gradient-sheet-base-start to-gradient-sheet-base-end">
        <ConfigProvider
          theme={{
            components: {
              Collapse: {
                colorText: '#FFF',
                contentBg:
                  'linear-gradient(270deg, rgba(1,79,122,1) 35%, rgba(7,109,156,1) 100%)',
                borderRadius: 0,
              },
            },
          }}
        >
          <Collapse
            items={items}
            defaultActiveKey={['1']}
            onChange={onChange}
            expandIconPosition={'end'}
          />
        </ConfigProvider>
      </section>
    </aside>
  );
}
