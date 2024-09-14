import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { MoreVert, QuestionCircle } from '@/components/icons';
import { CustomInput } from '@/components/input/Input';
import Text from '@/components/typography/Text';
import { Divider, Dropdown } from 'antd';
import {
  ArrowRight2,
  Copy,
  DocumentForward,
  Edit2,
  Folder2,
  SearchNormal1,
  Trash,
} from 'iconsax-react';
import React from 'react';

const SectionMoreDropdown = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = React.useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <Dropdown
      // menu={{ items }}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      dropdownRender={() => (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col gap-1 box-border p-3 rounded-lg  w-auto max-w-[480px]  "
        >
          <DropdownItem
            className="cursor-pointer hover:bg-gray-50"
            onClick={handleClose}
          >
            <Edit2 size={16} />
            <Text as="span" variant="B2-Regular">
              Rename Table
            </Text>
          </DropdownItem>

          <DropdownItem
            className="cursor-pointer hover:bg-gray-50"
            onClick={handleClose}
          >
            <Copy size={16} />
            <Text as="span" variant="B2-Regular">
              Duplicate Table
            </Text>
          </DropdownItem>

          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setIsShowSubMenu(true)}
            onMouseLeave={() => setIsShowSubMenu(false)}
          >
            <DropdownItem className="cursor-pointer hover:bg-gray-50">
              <DocumentForward size={16} />
              <Text as="span" variant="B2-Regular">
                Move To
              </Text>
              <ArrowRight2 size={16} className="ml-auto" />
            </DropdownItem>
            {isShowSubMenu && (
              <div className=" absolute boxShadowSecondary bg-[white] flex flex-col gap-2 top-0 left-[100%] w-[240px] p-3 box-border rounded-lg">
                <div className=" border-b border-neutral-200">
                  <CustomInput
                    placeholder="Search section"
                    autoFocus={true}
                    prefixIcon={
                      <SearchNormal1
                        className="min-w-4"
                        size={16}
                        color={'#6A758B'}
                      />
                    }
                    className="h-9 "
                  />
                </div>
                <DropdownItem className="cursor-pointer hover:bg-gray-50">
                  <Folder2 size={16} />
                  <Text as="span" variant="B2-Regular">
                    Section 1
                  </Text>
                </DropdownItem>

                <DropdownItem className="cursor-pointer hover:bg-gray-50">
                  <Folder2 size={16} />
                  <Text as="span" variant="B2-Regular">
                    Section 2
                  </Text>
                </DropdownItem>
                <DropdownItem className="cursor-pointer hover:bg-gray-50">
                  <Folder2 size={16} />
                  <Text as="span" variant="B2-Regular">
                    Section 3
                  </Text>
                </DropdownItem>
              </div>
            )}
          </div>
          <DropdownItem
            className="cursor-pointer hover:bg-gray-50"
            onClick={handleClose}
          >
            <DocumentForward size={16} />
            <Text as="span" variant="B2-Regular">
              Publish as Shared Data Source
            </Text>
            <QuestionCircle />
          </DropdownItem>

          <Divider className="bg-borderColor !my-2" />

          <DropdownItem
            className="cursor-pointer hover:bg-gray-50"
            onClick={handleClose}
          >
            <Trash size={16} />
            <Text as="span" variant="B2-Regular">
              Delete Table
            </Text>
          </DropdownItem>
        </div>
      )}
      trigger={['click']}
      placement="bottomRight"
      className={className}
      align={{ offset: [0, 0] }}
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

export default SectionMoreDropdown;
