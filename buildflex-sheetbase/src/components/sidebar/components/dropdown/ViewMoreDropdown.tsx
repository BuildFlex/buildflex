import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CheckBoxIcon, MoreVert } from '@/components/icons';
import Text from '@/components/typography/Text';
import { Divider, Dropdown } from 'antd';
import {
  ArrowRight2,
  Copy,
  Edit2,
  People,
  Setting2,
  Trash,
  User,
} from 'iconsax-react';
import { useState } from 'react';
import Tag from './TeamTag';

const ViewMoreDropdown = ({ className }: { className?: string }) => {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <Dropdown
      trigger={['click']}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      placement="bottomRight"
      className={className}
      align={{ offset: [0, 0] }}
      dropdownRender={() => (
        <div className="flex flex-col gap-1 box-border p-3 rounded-lg  w-auto max-w-[480px]  ">
          <DropdownItem
            className="cursor-pointer hover:bg-gray-50"
            onClick={handleClose}
          >
            <Edit2 size={16} />
            <Text as="span" variant="B2-Regular">
              Rename View
            </Text>
          </DropdownItem>
          <DropdownItem
            className="cursor-pointer hover:bg-gray-50"
            onClick={handleClose}
          >
            <Copy size={16} />
            <Text as="span" variant="B2-Regular">
              Duplicate View
            </Text>
          </DropdownItem>

          <div
            className="relative"
            onMouseEnter={() => setIsShowSubMenu(true)}
            onMouseLeave={() => setIsShowSubMenu(false)}
          >
            <DropdownItem className="cursor-pointer hover:bg-gray-50">
              <Setting2 size={16} />
              <Text as="span" variant="B2-Regular">
                Configure View
              </Text>
              <ArrowRight2 size={16} className="ml-auto" />
            </DropdownItem>
            {isShowSubMenu && (
              <div className=" absolute boxShadowSecondary bg-[white] top-0 left-[100%] w-[350px] p-3 box-border rounded-lg">
                <div className="flex flex-col gap-1 p-2 rounded hover:bg-gray-50 cursor-pointer">
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
                <div className="flex flex-col gap-1 p-2 opacity-50 ">
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

                <div className="flex flex-col gap-1 p-2 rounded hover:bg-gray-50 cursor-pointer">
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

          <Divider className="bg-borderColor !my-2" />

          <DropdownItem
            className="cursor-pointer hover:bg-gray-50"
            onClick={handleClose}
          >
            <Trash size={16} />
            <Text as="span" variant="B2-Regular">
              Delete View
            </Text>
          </DropdownItem>
        </div>
      )}
      overlayClassName=" boxShadowSecondary !rounded-lg"
    >
      <div
        className="size-4"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        <MoreVert className="  text-neutral-dark-300 hover:text-gray-500 cursor-pointer" />
      </div>
    </Dropdown>
  );
};

export default ViewMoreDropdown;
