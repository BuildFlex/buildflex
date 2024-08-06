import React from 'react';
import SideBar from '@components/sidebar';
import Header from '@components/layouts/header/Header';
import ContentWrapper from '@components/layouts/content';
import { ThemeProvider } from '@/provider/theme-provider';

export function SheetBase() {
  return (
    <div className={'sheetbase-wrapper'}>
      <ThemeProvider>
        <Header />
        <main id={'main-content'} className={'flex flex-row'}>
          <SideBar />
          <ContentWrapper />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default SheetBase;
