import { CloseIcon } from '@/components/icons';
import CustomChartIcon from '@/components/icons/custom-chart-icon';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Modal } from 'antd';
import { Add, ArrowRight, Magicpen } from 'iconsax-react';
import React, { useState } from 'react';
import Card from './card';
import {
  addMoreAutomations,
  addMoreDatas,
  addMoreExtensions,
  addMoreInterfaces,
  addMoreSyncs,
  addMoreTabs,
  addMoreViews,
} from './constants';

const AddMoreModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleCancel = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  return (
    <>
      <div
        className="w-40 h-10 flex absolute bottom-16 z-20 left-[21px] rounded-3xl overflow-hidden bg-white boxShadowSecondary"
        style={{ border: '1px solid #EDEDED' }}
      >
        <div
          className="w-[60px] h-10 box-border flex items-center justify-center "
          style={{ borderRight: '1px solid #EDEDED' }}
        >
          <Add size={24} />
        </div>
        <button
          onClick={handleOpen}
          className="w-[100px] h-10 bg-transparent border-none cursor-pointer hover:bg-gray-50 text-neutral-dark-500 flex items-center justify-center gap-2 p-2"
        >
          <Magicpen size={24} className="" />
          <Text as="span" variant="B2-Regular">
            Add...
          </Text>
        </button>
      </div>
      <AddModal handleCancel={handleCancel} isModalShow={isOpen} />
    </>
  );
};

export default AddMoreModal;

interface AddModalProps {
  isModalShow: boolean;
  handleCancel: () => void;
}

const AddModal = ({ isModalShow, handleCancel }: AddModalProps) => {
  const [activeTab, setActiveTab] = useState('views');
  const handleMoveTo = (id: string) => {
    setActiveTab(id);
    document.getElementById(`${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Modal
      style={{ top: '5svh' }}
      width={'100svw'}
      modalRender={(modal) => (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-fit mx-auto !p-3 max-w-[850px] h-[90svh] flex flex-col gap-3 box-border bg-white rounded-lg ant-modal-content"
        >
          {/* Header */}
          <div
            style={{ borderBottom: '1px solid #EDEDED' }}
            className="p-2 w-full  gap-10   h-[48px] box-border flex items-center "
          >
            {addMoreTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleMoveTo(tab.id)}
                className={cn(
                  'border-none bg-transparent h-[18px] cursor-pointer',
                  activeTab === tab.id
                    ? 'text-neutral-dark-500'
                    : 'text-neutral-dark-300',
                )}
              >
                <Text as="span" variant="B2-Regular">
                  {tab.title}
                </Text>
              </button>
            ))}
            <button
              onClick={handleCancel}
              className="border-none flex justify-center items-center size-9 bg-transparent cursor-pointer ml-auto"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>
          <div className="flex flex-col gap-3  h-full max-h-[calc(90svh-60px)] overflow-y-auto customScrollBar box-border w-[826px]">
            {/* Views */}
            <SectionTitle
              description=" Display your information for different audiences or purposes"
              title="Views"
              id={'views-tab'}
            />

            <div className=" w-full flex   gap-4 flex-wrap">
              {addMoreViews.map((view) => (
                <Card
                  key={view.title}
                  title={view.title}
                  description={view.description}
                  isTeam={view.isTeam}
                />
              ))}
            </div>
            {/* Automations */}
            <SectionTitle
              description="Reduce repetitive and redundant tasks and stay up to date."
              title="Automations"
              id={'automations-tab'}
            />

            <div className=" w-full flex   gap-4 flex-wrap">
              {addMoreAutomations.map((view) => (
                <Card
                  key={view.title}
                  title={view.title}
                  description={view.description}
                />
              ))}
            </div>
            {/* Data */}
            <SectionTitle
              description=" Add your information in different ways."
              title="Data"
              id={'data-tab'}
            />

            <div className=" w-full flex   gap-4 flex-wrap">
              {addMoreDatas.map((view) => (
                <Card key={view.title} title={view.title} />
              ))}
            </div>
            {/* Interfaces */}
            <SectionTitle
              description="Fully customize how to configure and display your information."
              title="Interfaces"
              id={'interfaces-tab'}
            />

            <div className=" w-full flex   gap-4 flex-wrap">
              {addMoreInterfaces.map((view) => (
                <Card
                  key={view.title}
                  title={view.title}
                  description={view.description}
                />
              ))}
            </div>
            {/* Sync */}
            <SectionTitle
              description="Integrate your work with other existing tools you might use."
              title="Sync"
              id={'sync-tab'}
            />

            <div className=" w-full flex   gap-4 flex-wrap">
              {addMoreSyncs.map((view) => (
                <Card
                  key={view.title}
                  title={view.title}
                  isTeam={view.isTeam}
                />
              ))}
            </div>
            {/* Extensions */}
            <SectionTitle
              description="Extend how you work with data."
              title="Extensions"
              id="extensions-tab"
            />

            <div className=" w-full flex   gap-4 flex-wrap">
              {addMoreExtensions.map((view) => (
                <Card
                  key={view.title}
                  title={view.title}
                  description={view.description}
                />
              ))}
            </div>
            <button className="flex items-center justify-center gap-2 rounded hover:bg-gray-50 w-[140px] min-h-10 h-10 border-none bg-transparent text-theme-ocean-blue cursor-pointer ">
              <Text as="span" variant="B1-Semibold">
                See More
              </Text>
              <ArrowRight size={24} />
            </button>

            <button className="flex w-[88px] ml-auto mr-1 text-neutral-dark-300 underline underline-offset-2 items-center justify-center gap-2 rounded hover:text-neutral-dark-500  min-h-10 h-10 border-none bg-transparent  cursor-pointer ">
              <Text as="span" variant="B2-Regular">
                Give feedback
              </Text>
            </button>
          </div>
        </div>
      )}
      open={isModalShow}
      closeIcon={false}
      onCancel={handleCancel}
    />
  );
};

const SectionTitle = ({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: string;
}) => {
  return (
    <div id={id} className="px-2 h-[43px] w-full flex flex-col  gap-1">
      <Text as="span" variant="B1-Regular">
        {title}
      </Text>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        {description}
      </Text>
    </div>
  );
};
