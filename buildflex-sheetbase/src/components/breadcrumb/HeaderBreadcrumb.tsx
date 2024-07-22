import {Breadcrumb, Button, ConfigProvider} from "antd";
import React from "react";
import {ArrowRight2} from "iconsax-react";

interface BreadcrumbProps {
  items: [],
  separator?: any,
}
export default function HeaderBreadcrumb() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            itemColor: "#FFF",
            linkColor: "#FFF",
            lastItemColor: "#FFF",
          },
        },
      }}
    >
      <Breadcrumb
        separator={<ArrowRight2
          size="16"
          color="#FFF"
        />}
        items={[
          {
            href: '',
            title: 'NETKO Solution',
          },
          {
            href: '',
            title: (<span>Bien Hoang</span>),
          },
          {
            title: (<strong>NETKO SheetBase</strong>),
          },
        ]}
      />
    </ConfigProvider>
  )
}
