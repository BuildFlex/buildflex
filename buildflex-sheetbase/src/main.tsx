import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
// import defaultTheme from './themes/defaultTheme';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {},
        }}
      >
        <StyleProvider hashPriority="high">
          <App />
        </StyleProvider>
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
);
