import React from 'react';
import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';

const text = 'ABCD';
const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Create',
    children: (
      <>
        <ul>
          <li>Table</li>
          <li>Form</li>
          <li>Dashboard</li>
          <li>Document</li>
          <li>Section</li>
        </ul>
      </>
    ),
  },
];
export default function SideBarBottomCollapse() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <aside className={'sidebar w-64 flex flex-col justify-between'}>
      <section className="sidebarListTable bg-white h-full">
        sidebarListTable
      </section>
      <section className="sidebarCreate bg-gradient-to-br from-gradient-sheet-base-start to-gradient-sheet-base-end text-white">
        <Collapse
          items={items}
          defaultActiveKey={['1']}
          onChange={onChange}
          expandIconPosition={'end'}
        />
      </section>
    </aside>
  );
}
