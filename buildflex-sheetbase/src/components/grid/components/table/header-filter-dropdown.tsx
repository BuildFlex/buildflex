import {
  CloseIcon,
  ConfigureIcon,
  GroupIcon,
  MoreVert,
  SortDownIcon,
} from '@/components/icons';
import Text from '@/components/typography/Text';
import { Divider, Dropdown, DropdownProps, MenuProps, Modal } from 'antd';
import {
  ArrowDown2,
  ArrowLeft,
  ArrowRight,
  Code,
  Copy,
  Edit2,
  EyeSlash,
  InfoCircle,
  Link,
  Lock,
  SearchStatus,
  Slack,
  Trash,
} from 'iconsax-react';
import { useState } from 'react';
import DuplicateFieldModal from '../modal/duplicate-field';
import EditFieldDescriptionModal from '../modal/edit-field';
import AddLookupFieldsModal from '../modal/add-lookup-fields';
import ChangeThePrimaryFieldModal from '../modal/change-the-primary-field';
import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { cn } from '@/utils/cn';

const HeaderFilterDropdown = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const handleCancel = () => setActiveModal(null);
  const handleMenuClick = (key: string) => {
    switch (key) {
      case 'add-lookup-fields':
        setActiveModal('add-lookup-fields');
        break;

      case 'edit-field-description':
        setActiveModal('edit-field-description');
        break;
      case 'duplicate-field':
        setActiveModal('duplicate-field');
        break;
      case 'change-primary-field':
        setActiveModal('change-primary-field');
        break;
      default:
        setOpen(false);
        break;
    }
  };

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if ((info.source === 'trigger' || nextOpen) && activeModal === null) {
      setOpen(nextOpen);
    }
  };
  const renderModal = () => {
    switch (activeModal) {
      case 'edit-field-description':
        return <EditFieldDescriptionModal handleCancel={handleCancel} />;
      case 'duplicate-field':
        return <DuplicateFieldModal handleCancel={handleCancel} />;
      case 'add-lookup-fields':
        return <AddLookupFieldsModal handleCancel={handleCancel} />;
      case 'change-primary-field':
        return <ChangeThePrimaryFieldModal handleCancel={handleCancel} />;
      default:
        return null;
    }
  };
  return (
    <>
      <Dropdown
        trigger={['click']}
        placement="bottomRight"
        className="flex items-center relative justify-center"
        overlayClassName="   "
        // menu={{
        //   items: moreItems,
        //   onClick: handleMenuClick,
        // }}
        dropdownRender={() => (
          <div className="p-3 rounded-lg w-[350px] box-border max-h-[300px] customScrollBar overflow-auto boxShadowSecondary flex flex-col gap-1 bg-white ">
            {moreItemList.map((i) => {
              return i.key === 'divider' ? (
                <Divider className="!my-2 bg-borderColor" />
              ) : (
                <DropdownItem
                  onClick={() => handleMenuClick(i.key)}
                  className={cn(
                    'flex gap-2 cursor-pointer items-center hover:bg-gray-50 text-neutral-dark-500',
                    i.className,
                  )}
                >
                  {i.icon && <i.icon size={16} />}
                  <Text as="span" variant="B2-Regular">
                    {i.text}
                  </Text>
                </DropdownItem>
              );
            })}
          </div>
        )}
        onOpenChange={handleOpenChange}
        open={open}
      >
        <ArrowDown2 className="ml-auto cursor-pointer" size={16} />
      </Dropdown>

      <Modal
        modalRender={(modal) => renderModal()}
        open={activeModal !== null}
        closeIcon={false}
        onCancel={handleCancel}
      />
    </>
  );
};

export default HeaderFilterDropdown;

const moreItemList = [
  { key: 'edit-field', text: 'Edit field', icon: Edit2 },
  { key: 'add-lookup-fields', text: 'Add lookup fields', icon: SearchStatus },
  { key: 'divider', type: 'divider' },
  { key: 'duplicate-field', text: 'Duplicate field', icon: Copy },
  { key: 'insert-left', text: 'Insert left', icon: ArrowLeft },
  { key: 'insert-right', text: 'Insert right', icon: ArrowRight },
  { key: 'change-primary-field', text: 'Change primary field', icon: Code },
  { key: 'divider', type: 'divider' },
  {
    key: 'configure-date-dependencies',
    text: 'Configure date dependencies',
    icon: ConfigureIcon,
  },
  { key: 'divider', type: 'divider' },
  { key: 'copy-field-url', text: 'Copy field URL', icon: Link },
  {
    key: 'edit-field-description',
    text: 'Edit field description',
    icon: InfoCircle,
  },
  {
    key: 'edit-field-permisstions',
    text: 'Edit field permissions',
    icon: Lock,
  },
  { key: 'divider', type: 'divider' },
  { key: 'sort-a-to-z', text: 'Sort A → Z', icon: SortDownIcon },
  { key: 'sort-z-to-a', text: 'Sort Z → A', icon: SortDownIcon },
  { key: 'divider', type: 'divider' },
  {
    key: 'filter-by-this-field',
    text: 'Filter by this field',
    icon: SortDownIcon,
  },
  { key: 'group-by-this-field', text: 'Group by this field', icon: GroupIcon },
  { key: 'divider', type: 'divider' },
  { key: 'hide-filed', text: 'Hide Field', icon: EyeSlash },
  {
    key: 'delete-filed',
    text: 'Delete Field',
    icon: Trash,
    className: 'text-danger',
  },
];

