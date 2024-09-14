import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { gridTableFields } from '@/components/grid/GridUI';
import { CloseIcon } from '@/components/icons';
import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { fields } from '@/components/view-filter/components/dropdown-render/HideFieldDropdownRender';
import { Modal, Switch } from 'antd';
import { ArrowDown2, SearchNormal1, UserTick } from 'iconsax-react';
import React, { useState } from 'react';
import DropdownTab from '../components/dropdown-tab';

interface LastModiFiedByDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
  handleModalOpen: (isOpen: boolean) => void;
}

export const LastModiFiedByDropdown: React.FC<LastModiFiedByDropdownProps> = ({
  onChangeDropdown,
  handleModalOpen,
}) => {
  const [selectFields, setSelectFields] = useState<string[]>([]);
  const handleShowAll = () => {
    setSelectFields(gridTableFields.map((field) => field.id));
  };
  const handleHideAll = () => {
    setSelectFields([]);
  };

  const [activeTab, setActiveTab] = useState('roll-up');
  const [isAllField, setIsAllField] = useState(true);
  const [isModalShow, setIsModalShow] = useState(false);
  const handleCancel = () => {
    setIsModalShow(false);
    handleModalOpen(false);
  };
  const handleOpen = () => {
    setIsModalShow(true);
    handleModalOpen(true);
  };
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <UserTick size={16} />
        <Text as="span" variant="B2-Regular">
          Last modified by
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>

      <div className="inline-block">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          See which user made the most recent edit to some or all fields in a
          record.
        </Text>{' '}
        <a
          href="#"
          className="w-fit h-[18px] flex items-center box-border"
          style={{ borderBottom: '1px solid #101828 ' }}
        >
          <Text as="span" variant="B2-Medium" className="text-neutral-dark-500">
            Learn more
          </Text>
        </a>
      </div>
      {/* Tab */}
      <div className="relative flex mt-1 gap-4 text-neutral-dark-300 after:z-[0] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-borderColor after:bottom-0 ">
        <DropdownTab
          label="Roll up"
          id="roll-up"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DropdownTab
          label="Formatting"
          id="formatting"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          disabled
        />
      </div>
      {/* Tab Content */}
      <div className="flex flex-col mt-2 gap-3">
        {activeTab === 'roll-up' ? (
          <div className="flex flex-col gap-1">
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              Fields
            </Text>
            <div className="flex h-8 items-center gap-1  cursor-pointer">
              <input
                type="radio"
                id="all-field"
                name="fields"
                onChange={() => setIsAllField(true)}
                style={{ boxShadow: 'none' }}
                className="m-0 accent-theme-ocean-blue"
              />
              <label htmlFor="all-field" className="text-neutral-dark-500">
                All editable fields
              </label>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleOpen();
              }}
              className="flex h-8 items-center gap-1 cursor-pointer"
            >
              <input
                type="radio"
                id="all-field"
                checked={!isAllField}
                name="fields"
                style={{ boxShadow: 'none' }}
                className="m-0 pointer-events-none accent-theme-ocean-blue"
              />
              <label
                htmlFor="all-field"
                className="text-neutral-dark-500 cursor-pointer"
              >
                Specific fields
              </label>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="w-full h-[1px] min-h-[1px] bg-borderColor " />
      <SelectFieldModal
        handleHideAll={handleHideAll}
        setIsAllField={setIsAllField}
        handleShowAll={handleShowAll}
        setSelectFields={setSelectFields}
        selectFields={selectFields}
        handleCancel={handleCancel}
        isModalShow={isModalShow}
      />
    </>
  );
};

const SelectFieldModal: React.FC<{
  handleHideAll: () => void;
  setIsAllField: React.Dispatch<React.SetStateAction<boolean>>;
  handleShowAll: () => void;
  setSelectFields: React.Dispatch<React.SetStateAction<string[]>>;
  selectFields: string[];
  handleCancel: () => void;
  isModalShow: boolean;
}> = ({
  handleShowAll,
  handleHideAll,
  setIsAllField,
  setSelectFields,
  selectFields,
  handleCancel,
  isModalShow,
}) => {
  return (
    <Modal
      modalRender={(modal) => (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] overflow-hidden flex flex-col gap-3  p-6 box-border bg-white rounded-lg ant-modal-content"
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className=" h-[23px] items-start box-border flex justify-between">
              <Text
                as="span"
                className="text-neutral-dark-500"
                variant="modal-title"
              >
                Select last modified fields
              </Text>

              <button
                onClick={handleCancel}
                className="border-none size-5 flex items-center justify-center p-0 outline-none bg-transparent cursor-pointer"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              The last modified by field will show the last collaborator to edit
              any of the following selected fields.
            </Text>
          </div>
          {/* Content */}
          <div className="flex flex-col gap-2 box-border  w-full max-h-[300px] ">
            <CustomInput
              placeholder="Find a field"
              prefixIcon={
                <SearchNormal1
                  className="min-w-4"
                  size={16}
                  color={'#6A758B'}
                />
              }
              className="min-h-9 h-9"
            />
            <div className="flex flex-col gap-1 h-full flex-1 overflow-auto customScrollBar">
              {fields.map((field) => (
                <DropdownItem key={field.id} className="text-neutral-dark-500">
                  <Switch
                    className="w-8"
                    checked={selectFields.includes(field.id)}
                    onChange={(checked) => {
                      setSelectFields((prev) =>
                        checked
                          ? [...prev, field.id]
                          : prev.filter((id) => id !== field.id),
                      );
                    }}
                    size="small"
                  />
                  <field.icon size={16} />
                  <Text as="span" variant="B2-Regular">
                    {field.label}
                  </Text>
                </DropdownItem>
              ))}
            </div>
            <div className="flex items-center gap-2 ">
              <button
                onClick={handleShowAll}
                className="h-9 w-fit outline-none cursor-pointer border-none shadow-none text-neutral-dark-500  bg-transparent box-border rounded-lg"
              >
                <Text as="span" variant="B2-Medium">
                  Select all
                </Text>
              </button>
              <button
                onClick={handleHideAll}
                className="h-9 w-fit outline-none  cursor-pointer border-none shadow-none text-neutral-dark-500  bg-transparent box-border rounded-lg"
              >
                <Text as="span" variant="B2-Medium">
                  Clear all
                </Text>
              </button>
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center gap-3 ">
            <button
              onClick={handleCancel}
              style={{ border: '1px solid #CACFD8' }}
              className="h-9 px-4 py-[6px] ml-auto w-fit outline-none cursor-pointer  shadow-none text-neutral-dark-500  bg-transparent box-border rounded-lg"
            >
              <Text as="span" variant="B2-Medium">
                Cancel
              </Text>
            </button>
            <button
              onClick={() => {
                setIsAllField(false);
                handleCancel();
              }}
              className="h-9 px-4 py-[6px] text-white bg-theme-ocean-blue w-fit outline-none  cursor-pointer border-none shadow-nonebox-border rounded-lg"
            >
              <Text as="span" variant="B2-Medium">
                Use selected field
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
