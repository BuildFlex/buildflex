import SheetBaseIcon from '@/components/common/SheetBaseIcon';
import { CloseIcon, LeftBullet } from '@/components/icons';
import Text from '@/components/typography/Text';
import { ITheme } from '@/themes/defaultTheme';
import { cn } from '@/utils/cn';
import { Modal, Tabs } from 'antd';
import { People } from 'iconsax-react';
import { useState } from 'react';
import CreateLink from './tabs/create-link';
import EmailInvited from './tabs/email-invited';
import SharePublicly from './tabs/share-publicly';
import ShareViewTab from './tabs/view';

const sidebarTabs = [
  {
    key: 'base',
    icon: <SheetBaseIcon />,
    title: 'Base',
    description: 'All records',
    className: 'py-4 h-[129px]',
  },
  {
    key: 'view',
    icon: <LeftBullet />,
    title: 'View',
    description: '3 records',
    className: 'py-[15px] h-[127px]',
  },
];

const baseTabs = [
  { key: 'email', title: 'Email invited', children: <EmailInvited /> },
  { key: 'link', title: 'Create link', children: <CreateLink /> },
  { key: 'public', title: 'Share publicly', children: <SharePublicly /> },
];
const ShareButton = ({ theme }: { theme: ITheme }) => {
  const [activeTab, setActiveTab] = useState('base');
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const handleCancel = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={showModal}
        className="share  box-border border-none	 py-1.5 px-4 rounded-lg cursor-pointer  gap-2 bg-white max-h-9 h-9  flex items-center justify-center"
      >
        <People color={theme.hexCode} size={16} />
        <Text variant={'B2-Medium'} as="span" className={`${theme.color}`}>
          Share
        </Text>
      </button>
      <Modal
        modalRender={() => (
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[710px] overflow-hidden flex flex-col   !p-0 box-border bg-white rounded-lg ant-modal-content"
          >
            {/* Header */}
            <div
              className="px-6 py-3 h-[71px] box-border flex justify-between"
              style={{ borderBottom: '1px solid #EDEDED' }}
            >
              <div className="flex flex-col gap-2">
                <Text
                  as="span"
                  className="text-neutral-dark-500"
                  variant="B1-Semibold"
                >
                  Share Human Resources.xslx
                </Text>
                <Text
                  as="span"
                  className="text-neutral-dark-300"
                  variant="B2-Regular"
                >
                  This base is shared with 1 collaborator{' '}
                </Text>
              </div>
              <button
                onClick={handleCancel}
                className="border-none size-4 flex items-center justify-center p-0 outline-none bg-transparent cursor-pointer"
              >
                <CloseIcon className="size-4" />
              </button>
            </div>
            {/* Content */}
            <div className="w-full h-full  flex-1 box-border flex bg-gray-100">
              {/* Side Bar */}
              <div className="flex  flex-col box-border  gap-3 py-10 bg-gray-100">
                {sidebarTabs.map((tab) => (
                  <div
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    style={{
                      borderLeft: `2px solid ${activeTab === tab.key ? theme.hexCode : 'transparent'}`,
                    }}
                    className={cn(
                      ' w-[140px] box-border justify-center items-center flex flex-col  gap-2',
                      tab.className,
                    )}
                  >
                    <div
                      className={cn(
                        'flex p-[10px] rounded items-center box-border justify-center size-12',
                        activeTab === tab.key
                          ? theme.backgroundColor
                          : 'bg-neutral-200',
                      )}
                    >
                      {tab.icon}
                    </div>
                    <div className="flex gap-0.5 flex-col items-center justify-center">
                      <Text
                        as="span"
                        variant="B1-Semibold"
                        className="h-[21px] text-neutral-dark-500"
                      >
                        {tab.title}
                      </Text>
                      <Text
                        as="span"
                        variant="B2-Regular"
                        className="h-[18px] text-neutral-dark-400"
                      >
                        {tab.description}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
              {/* Content */}
              <div className="w-full flex min-h-[348px] box-border justify-between bg-white flex-1 flex-col h-full ">
                {/* Tab */}
                {activeTab === 'base' ? (
                  <>
                    <div className="p-4 gap-6 flex flex-col">
                      <Tabs
                        defaultActiveKey="Email invited"
                        className="share-base-tab  "
                        items={baseTabs.map((item) => {
                          return {
                            key: item.key,
                            label: item.title,
                            children: item.children,
                          };
                        })}
                      />
                    </div>
                    {/* Footer */}
                    <div
                      className={cn(
                        'h-[50px]  flex gap-2 mt-auto w-full py-4 px-6 box-border ',
                        theme.color,
                      )}
                      style={{ borderTop: '1px solid #EDEDED' }}
                    >
                      <People size={16} />
                      <Text as="span" variant="B2-SemiBold">
                        Mange access
                      </Text>
                    </div>
                  </>
                ) : (
                  <ShareViewTab />
                )}
              </div>
            </div>
          </div>
        )}
        open={isOpen}
        closeIcon={false}
        onCancel={handleCancel}
      />
    </>
  );
};

export default ShareButton;
