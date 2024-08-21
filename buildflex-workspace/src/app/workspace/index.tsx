import React from 'react';
import ContentWrapper from '../../components/layouts/content';
import Header from '../../components/layouts/header/Header';

export function Workspace() {
  return (
    <div className={'workspace-wrapper !box-border bg-[#FAFAFA] h-[100svh] '}>
      <Header />
      <main id={'main-content'} className={'flex flex-row  '}>
        <ContentWrapper />
      </main>
    </div>
  );
}

export default Workspace;
