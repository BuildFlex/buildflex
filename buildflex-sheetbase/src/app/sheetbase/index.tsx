import { SidebarProvider } from '@/provider/sidebar-provider';
import { ThemeProvider } from '@/provider/theme-provider';
import ContentWrapper from '@components/layouts/content';
import Header from '@components/layouts/header/Header';
import SideBar from '@components/sidebar';

export function SheetBase() {
  return (
    <div className={'sheetbase-wrapper !box-border '}>
      <ThemeProvider>
        <Header />
        <main id={'main-content'} className={'flex flex-row  '}>
          <SidebarProvider>
            <SideBar />
            <ContentWrapper />
          </SidebarProvider>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default SheetBase;
