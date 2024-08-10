import React from 'react';
import ContentViewTabs from '@components/tab/ContentViewTabs';

const ContentWrapper = () => {
  return (
    <section className={'content flex-1 w-full overflow-hidden'}>
      <ContentViewTabs />
    </section>
  );
};

export default ContentWrapper;
