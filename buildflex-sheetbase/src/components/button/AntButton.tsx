import React from 'react';
import clsx from 'clsx';
import { Button, ConfigProvider } from 'antd';

const AntButton = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {},
        },
      }}
    >
      <Button>HAB</Button>
    </ConfigProvider>
  );
};

export default AntButton;
