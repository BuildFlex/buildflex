import React from 'react';
import ContentWrapper from '../../components/layouts/content';
import Header from '../../components/layouts/header/Header';

export function Workspace() {
  return (
    <div
      className={
        'workspace-wrapper flex flex-col !box-border bg-[#FAFAFA] min-h-[100svh] '
      }
    >
      <Header />
      <main id={'main-content'} className={'flex flex-col  h-full flex-1'}>
        <ContentWrapper />
      </main>
    </div>
  );
}

export default Workspace;
