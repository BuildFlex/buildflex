import { Breadcrumb, Button, ConfigProvider, Menu } from 'antd';
import React from 'react';
import { ArrowRight2, Book } from 'iconsax-react';
import { DatabaseFilled } from '@ant-design/icons';

export default function HeaderBreadcrumb() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            itemColor: '#FFF',
            linkColor: '#FFF',
            lastItemColor: '#FFF',
            linkHoverColor: '#FFF',
          },
        },
      }}
    >
      <Breadcrumb
        separator={<ArrowRight2 size="16" color="#FFF" />}
        items={[
          {
            href: '',
            title: 'NETKO Solution',
          },
          {
            href: '',
            title: 'Bien Hoang',
          },
          {
            href: '',
            title: (
              <>
                <DatabaseFilled />
                <span>NETKO Book</span>
              </>
            ),
          },
        ]}
      />
    </ConfigProvider>
  );
}
