import GridTableFooter from './components/table/footer';
import GridTableHeader from './components/table/header';
import { fields } from '../view-filter/components/dropdown-render/HideFieldDropdownRender';
import { useSidebar } from '@/provider/sidebar-provider';
import { cn } from '@/utils/cn';
import GridTabBody from './components/table/body';
import { MoveToIcon } from '../icons';
export const gridTableFields = [
  {
    id: 'link-to-another-record',
    label: 'Link to another record',
    icon: MoveToIcon,
  },
  ...fields,
];
const GridUI = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={cn(
        'box-border  flex flex-col flex-1 w-full max-h-[calc(100svh-60px-32px-40px)]  ',
        isSidebarOpen ? 'w-[calc(100svw-260px)]' : 'w-[calc(100svw-42px)]',
      )}
    >
      <div className=" h-full flex-1 overflow-auto">
        <table
          style={{ border: 'none' }}
          className=" border-collapse h-full w-fit border  bg-[#FAFAFA]  "
        >
          <GridTableHeader />
          <GridTabBody />
        </table>
      </div>
      <GridTableFooter />
    </div>
  );
};

export default GridUI;
