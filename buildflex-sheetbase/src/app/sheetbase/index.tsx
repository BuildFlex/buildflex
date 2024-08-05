import React from 'react';
import SideBar from '@components/sidebar';
import Header from '@components/layouts/header/Header';
import ContentWrapper from '@components/layouts/content';

export function SheetBase() {
  return (
    <div className={'sheetbase-wrapper'}>
      <Header />
      <main id={'main-content'} className={'flex flex-row'}>
        <SideBar />
        <ContentWrapper />
      </main>
    </div>
  );
}

export default SheetBase;
