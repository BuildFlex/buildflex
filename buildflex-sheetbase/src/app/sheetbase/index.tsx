// import React from 'react';
// import {Avatar, Button, Breadcrumb} from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { MessageQuestion, Notification, Clock, People, ArrowRight2 } from 'iconsax-react';
// import SheetBaseIcon from '../../components/common/SheetBaseIcon';
//
// export function SheetBase() {
//   return (
//     <div className={''}>
//       {/*Header*/}
//       <header id={'header'} className={'flex h-16 bg-gradient-to-br from-gradient-sheet-base-start to-gradient-sheet-base-end text-white'}>
//         <div className="nav-left flex justify-center items-center">
//           <div className="logo p-3">
//             <SheetBaseIcon/>
//           </div>
//           <div className="workspace flex flex-col justify-center">
//             <Breadcrumb
//               separator={<ArrowRight2
//                 size="16"
//                 color="#FFF"
//               />}
//               items={[
//                 {
//                   href: '',
//                   title: 'NETKO Solution',
//                 },
//                 {
//                   href: '',
//                   title: (<span>Bien Hoang</span>),
//                 },
//                 {
//                   title: (<strong>NETKO SheetBase</strong>),
//                 },
//               ]}
//               className="text-white"
//             />
//             <div className="workspace__last-modified-status mt-1 text-xs">
//               Last modified: <span className={'date-time'}>12:01 AM July 11</span>
//             </div>
//           </div>
//         </div>
//         <div className="nav-right ml-auto flex items-center gap-3 mr-3">
//           {/*<button className="h-9 w-9 bg-transparent border-none rounded-lg flex items-center justify-center hover:bg-primary-600 cursor-pointer"><Clock size="16"/></button>*/}
//           <Button type="dashed" icon={<Clock size="16" />} />
//           <div className="help flex items-center mr-3">
//             <Button type="dashed" icon={<MessageQuestion />}>
//               Help
//             </Button>
//           </div>
//           {/*<button className="share h-9 rounded-lg border-0 bg-white text-primary-600 px-4 py-1.5 flex items-center justify-center">*/}
//           {/*<People size="16" color={"#087AAF"}/> Share*/}
//           {/*</button>*/}
//           <Button type="dashed" icon={<People size={16} color={"#087AAF"}/>}>Share</Button>
//           <div className="notification rounded-full bg-white w-9 h-9 flex items-center justify-center">
//             <Notification size={16} color={"#087AAF"}/>
//           </div>
//           <Avatar size={36} icon={<UserOutlined/>} className="border-white border-2"/>
//         </div>
//       </header>
//       <main id={'main-content'} className={'flex flex-row h-lvh'}>
//         {/*Left menu here*/}
//         <aside className={'sidebar flex-1 max-w-64 bg-gray-500'}>
//           left menu
//           <section className="sidebarListTable"></section>
//           <section className="sidebarCreate"></section>
//         </aside>
//         <section className={'content flex-1 bg-orange-200'}>main content</section>
//       </main>
//     </div>
//   );
// }
//
// export default SheetBase;
