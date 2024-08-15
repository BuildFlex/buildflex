import React from 'react';
import ContentViewTabs from '@components/tab/ContentViewTabs';
import { useSidebar } from '@/provider/sidebar-provider';
import { cn } from '@/utils/cn';

const ContentWrapper = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <section className={cn('content box-border  w-full   flex-1 ')}>
      <ContentViewTabs />
    </section>
  );
};

export default ContentWrapper;
