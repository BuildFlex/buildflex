// import React from 'react';
// import GridTableFooter from './components/table/footer';
// import GridTableHeader from './components/table/header';
// import { Add } from 'iconsax-react';

// const GridUI = () => {
//   return (
//     <div className="overflow-hidden h-full  flex flex-col flex-1 w-full  ">
//       <table className=" border-collapse h-full w-fit border  overflow-scroll bg-[#FAFAFA]  border-slate-400 ...">
//         <GridTableHeader />
//         <tbody className="h-full w-full ">
//           {Array.from({ length: 5 }).map((_, index) => (
//             <tr key={index} className="h-9 max-h-9 bg-white">
//               <td
//                 style={{
//                   borderRight: '1px solid #EDEDED',
//                   borderBottom: '1px solid #EDEDED',
//                 }}
//                 className="h-9 px-2 text-start bg-white"
//               >
//                 {index}
//               </td>
//               <td
//                 style={{
//                   borderRight: '1px solid #EDEDED',
//                   borderBottom: '1px solid #EDEDED',
//                 }}
//                 className="h-9 px-2"
//               >
//                 Row {index + 1} Data 1
//               </td>
//               <td
//                 style={{
//                   borderRight: '1px solid #EDEDED',
//                   borderBottom: '1px solid #EDEDED',
//                 }}
//                 className="h-9 px-2"
//               >
//                 Row {index + 1} Data 2
//               </td>
//               <td
//                 style={{
//                   borderRight: '1px solid #EDEDED',
//                   borderBottom: '1px solid #EDEDED',
//                 }}
//                 className="h-9 px-2"
//               >
//                 Row {index + 1} Data 3
//               </td>
//               <td
//                 style={{
//                   borderRight: '1px solid #EDEDED',
//                   borderBottom: '1px solid #EDEDED',
//                 }}
//                 className="h-9 px-2"
//               >
//                 Row {index + 1} Data 4
//               </td>
//               <td
//                 style={{
//                   borderRight: '1px solid #EDEDED',
//                   borderBottom: '1px solid #EDEDED',
//                 }}
//                 className="h-9 px-2"
//               >
//                 Row {index + 1} Data 5
//               </td>
//               <td
//                 style={{
//                   borderRight: '1px solid #EDEDED',
//                   borderBottom: '1px solid #EDEDED',
//                 }}
//                 className="h-9 px-2"
//               >
//                 Row {index + 1} Data 6
//               </td>
//               <td
//                 style={{
//                   borderRight: '1px solid #EDEDED',
//                   borderBottom: '1px solid #EDEDED',
//                 }}
//                 className="h-9 px-2"
//               >
//                 Row {index + 1} Data 7
//               </td>
//             </tr>
//           ))}
//           <tr className="h-9 max-h-9">
//             <td
//               style={{
//                 borderRight: '1px solid #EDEDED',
//                 borderBottom: '1px solid #EDEDED',
//               }}
//               className="h-9 px-2 text-center align-middle bg-white"
//             >
//               <Add size={16} />
//             </td>
//           </tr>
//           {/* For a white background in first col */}
//           <tr className="h-full w-full">
//             <td className="h-9 px-2 bg-white" />
//           </tr>
//         </tbody>
//       </table>
//       <GridTableFooter />

//     </div>
//   );
// };

// export default GridUI;

//  {/* <table className="min-w-full h-full bg-white">
//         <TableHeader />
//         <tbody>
//           {Array.from({ length: 3 }).map((_, index) => (
//             <tr key={index} className="">
//               <td className="p-4 text-center">{index + 1}</td>
//               <td className="p-4">Row {index + 1} Data 1</td>
//               <td className="p-4">Row {index + 1} Data 2</td>
//               <td className="p-4">Row {index + 1} Data 3</td>
//               <td className="p-4">Row {index + 1} Data 4</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot className="w-full h-8 bg-[orange] text-neutral-dark-500">
//           <tr>
//             <td className="h-10  text-center">
//               <Text as="span" variant="sub-title">
//                 10 records
//               </Text>
//             </td>
//             <td className="h-10 ">Row {1} Data 1</td>
//             <td className="h-10 ">Row {1} Data 2</td>
//             <td className="h-10 ">Row {1} Data 3</td>
//             <td className="h-10 ">Row {1} Data 4</td>
//           </tr>
//         </tfoot>
//       </table> */}
// ===============================================
import React from 'react';
import GridTableFooter from './components/table/footer';
import GridTableHeader from './components/table/header';
import { Add } from 'iconsax-react';
import { Checkbox } from 'antd';
import { fields } from '../view-filter/components/dropdown-render/HideFieldDropdownRender';
import { useSidebar } from '@/provider/sidebar-provider';
import { cn } from '@/utils/cn';
import GridTabBody from './components/table/body';
import { MoveToIcon } from '../icons';
export const gridTableFields = [
  ...fields,
  {
    id: 'link-to-another-record',
    label: 'Link to another record',
    icon: MoveToIcon,
  },
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
      <div className=" h-full bg-[red] flex-1 overflow-auto">
        <table className=" border-collapse h-full w-fit border  bg-[#FAFAFA]  border-slate-400 ...">
          <GridTableHeader />
          <GridTabBody />
        </table>
      </div>
      <GridTableFooter />
    </div>
  );
};

// const GridUI = () => {
//   return (
//     <div className=" h-full flex flex-col flex-1 w-full">
//       <div className="overflow-auto h-full w-full">
//         <table className="border-collapse w-full min-w-[500px] bg-[#FAFAFA] border border-slate-400">
//           <thead>
//             <tr
//               style={{ borderBottom: '1px solid #EDEDED' }}
//               className="w-full bg-gray-100 h-9 box-border"
//             >
//               <th
//                 className="px-2 text-start w-20 sticky right-0 bg-gray-100"
//                 style={{ borderRight: '1px solid #EDEDED' }}
//               >
//                 <Checkbox />
//               </th>
//               {fields.map((field, index) => (
//                 <th
//                   key={field.id + index}
//                   style={{ borderRight: '1px solid #EDEDED' }}
//                   className="px-2 min-w-[180px] text-left"
//                 >
//                   {field.label}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="h-full w-full">
//             {Array.from({ length: 5 }).map((_, index) => (
//               <tr key={index} className="h-9 max-h-9 bg-white">
//                 <td
//                   style={{
//                     borderRight: '1px solid #EDEDED',
//                     borderBottom: '1px solid #EDEDED',
//                   }}
//                   className="h-9 px-2 text-start bg-white sticky right-0"
//                 >
//                   {index}
//                 </td>
//                 {fields.map((field, index) => (
//                   <td
//                     key={field.id + index}
//                     style={{
//                       borderRight: '1px solid #EDEDED',
//                       borderBottom: '1px solid #EDEDED',
//                     }}
//                     className="h-9 px-2"
//                   >
//                     {field.label + '-' + (index + 1)}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//             <tr className="h-9 max-h-9">
//               <td
//                 style={{
//                   borderRight: '1px solid #EDEDED',
//                   borderBottom: '1px solid #EDEDED',
//                 }}
//                 className="h-9 px-2 text-center align-middle bg-white sticky right-0"
//               >
//                 <Add size={16} />
//               </td>
//             </tr>
//             {/* For a white background in first col */}
//             <tr className="h-full w-full">
//               <td className="h-9 px-2 bg-white sticky right-0" />
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <GridTableFooter />
//     </div>
//   );
// };

export default GridUI;
