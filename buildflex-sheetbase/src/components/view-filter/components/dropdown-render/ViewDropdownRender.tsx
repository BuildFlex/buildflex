import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CheckBoxIcon, QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import {
  ArrowRight2,
  Category2,
  Copy,
  DocumentDownload,
  Edit2,
  People,
  Printer,
  Trash,
  User,
} from 'iconsax-react';
import React, { useState } from 'react';
import SortConditionRow from '../../grid-filter/sort/SortConditionRow';
import AddSortRow from '../../grid-filter/sort/AddSortRow';
import FindField from '../../grid-filter/sort/FindField';
import { fields as initialFields } from './HideFieldDropdownRender';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import { Divider } from 'antd';

export interface IField {
  id: string;
  icon: React.ElementType;
  label: string;
}
const ViewDropdownRender = ({
  setActivePopup,
}: {
  setActivePopup: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [isShowCollaborativeView, setIsShowCollaborativeView] = useState(false);
  const handleSeleted = () => setActivePopup(null);
  return (
    <div className="flex flex-col gap-1 box-border p-3 rounded-lg  w-auto max-w-[480px]  ">
      <div
        className="flex flex-col gap-1 p-2 relative"
        onMouseEnter={() => setIsShowCollaborativeView(true)}
        onMouseLeave={() => setIsShowCollaborativeView(false)}
      >
        <div className=" text-neutral-dark-500 h-5 items-center  flex gap-2 box-border rounded">
          <People size={16} />
          <Text as="span" variant="B2-Regular">
            Collaborative view
          </Text>
          <ArrowRight2 size={16} className="ml-auto" />
        </div>
        <Text
          as="span"
          variant="sub-title"
          className="text-neutral-dark-400 h-4"
        >
          Editors and up can edit the view configuration
        </Text>
        {isShowCollaborativeView && (
          <div className=" absolute boxShadowSecondary bg-[white] top-0 left-[100%] w-[350px] p-3 box-border rounded-lg">
            <div className="flex flex-col rounded gap-1 p-2 hover:bg-gray-50 cursor-pointer">
              <div className=" text-neutral-dark-500 h-5 items-center  flex gap-2 box-border rounded">
                <People size={16} />
                <Text as="span" variant="B2-Regular">
                  Collaborative view
                </Text>
                <CheckBoxIcon
                  color="#026AA2"
                  className="ml-auto size-5 text-primary-700"
                />
              </div>
              <Text
                as="span"
                variant="sub-title"
                className="text-neutral-dark-400 h-4"
              >
                Editors and up can edit the view configuration
              </Text>
            </div>
            <div className="flex flex-col rounded gap-1 p-2 opacity-50 ">
              <div className=" text-neutral-dark-500 h-5 items-center  flex gap-2 box-border rounded">
                <User size={16} />
                <Text as="span" variant="B2-Regular">
                  Personal view
                </Text>
                <Tag name="Team" className="mr-2" />
              </div>
              <Text
                as="span"
                variant="sub-title"
                className="text-neutral-dark-400 h-4"
              >
                Only you can edit the view configuration
              </Text>
            </div>
            <div className="flex flex-col rounded gap-1 p-2  hover:bg-gray-50 cursor-pointer">
              <div className=" text-neutral-dark-500 h-5 items-center  flex gap-2 box-border rounded">
                <User size={16} />
                <Text as="span" variant="B2-Regular">
                  Looked view
                </Text>
                <Tag name="Team" className="mr-2" />
              </div>
              <Text
                as="span"
                variant="sub-title"
                className="text-neutral-dark-400 h-4"
              >
                Nobody can edit the view configuration{' '}
              </Text>
            </div>
          </div>
        )}
      </div>
      <Divider className="bg-borderColor !my-2" />{' '}
      <DropdownItem
        className="cursor-pointer hover:bg-gray-50"
        onClick={handleSeleted}
      >
        <Edit2 size={16} />
        <Text as="span" variant="B2-Regular">
          Rename View
        </Text>
      </DropdownItem>
      <DropdownItem
        className="cursor-pointer hover:bg-gray-50"
        onClick={handleSeleted}
      >
        <Edit2 size={16} />
        <Text as="span" variant="B2-Regular">
          Edit view description
        </Text>
      </DropdownItem>
      <Divider className="bg-borderColor !my-2" />
      <DropdownItem
        className="cursor-pointer hover:bg-gray-50"
        onClick={handleSeleted}
      >
        <Copy size={16} />
        <Text as="span" variant="B2-Regular">
          Duplicate View
        </Text>
      </DropdownItem>
      <Divider className="bg-borderColor !my-2" />
      <DropdownItem
        onClick={handleSeleted}
        className="cursor-pointer hover:bg-gray-50"
      >
        <DocumentDownload size={16} />
        <Text as="span" variant="B2-Regular">
          Download CSV
        </Text>
      </DropdownItem>
      <DropdownItem
        className="cursor-pointer hover:bg-gray-50"
        onClick={handleSeleted}
      >
        <Printer size={16} />
        <Text as="span" variant="B2-Regular">
          Print view
        </Text>
      </DropdownItem>
      <DropdownItem
        className="cursor-pointer hover:bg-gray-50"
        onClick={handleSeleted}
      >
        <Trash size={16} />
        <Text as="span" variant="B2-Regular">
          Delete View
        </Text>
      </DropdownItem>
    </div>
  );
};

export default ViewDropdownRender;
