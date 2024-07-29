import React, { useState } from 'react';
import ContentViewTabs from '../../tab/ContentViewTabs';
import GridFilter from '../../grid-filter/GridFilter';
import AIChatDrawer from '../../extensions/ai-chat';

const ContentWrapper = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <section className={'content flex-1 bg-orange-200'}>
      <ContentViewTabs />
      <button onClick={() => setIsDrawerOpen(true)}>Open AI Chat</button>
      <AIChatDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
};

export default ContentWrapper;
