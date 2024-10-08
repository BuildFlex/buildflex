import { useSidebar } from '@/provider/sidebar-provider';
import { cn } from '@/utils/cn';
import ContentViewTabs from '@components/tab/ContentViewTabs';

const ContentWrapper = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <section
      className={cn(
        'content box-border  flex-1 ',
        isSidebarOpen ? 'w-[calc(100svw-260px)]' : 'w-[calc(100svw-42px)]',
      )}
    >
      <ContentViewTabs />
    </section>
  );
};

export default ContentWrapper;
