'use client';

import './global.css';
import { StyledComponentsRegistry } from './registry';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Provider } from 'react-redux';
import store from '../store';
import Loading from './loading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <AntdRegistry>
            <Loading />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </AntdRegistry>
        </body>
      </Provider>
    </html>
  );
}
