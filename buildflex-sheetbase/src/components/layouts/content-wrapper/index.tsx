import React, { useState } from 'react';
import ContentViewTabs from '../../tab/ContentViewTabs';
import GridFilter from '../../view-filter/grid-filter/GridFilter';
import AIChatDrawer from '../../extensions/ai-chat';

const ContentWrapper = () => {
  return (
    <section className={'content flex-1 bg-orange-200'}>
      <ContentViewTabs />
    </section>
  );
};

export default ContentWrapper;
