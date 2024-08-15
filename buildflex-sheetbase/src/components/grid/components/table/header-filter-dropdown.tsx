import {
  CloseIcon,
  ConfigureIcon,
  GroupIcon,
  MoreVert,
  SortDownIcon,
} from '@/components/icons';
import Text from '@/components/typography/Text';
import { Dropdown, DropdownProps, MenuProps, Modal } from 'antd';
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

const HeaderFilterDropdown = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const handleCancel = () => setActiveModal(null);
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    switch (e.key) {
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
        overlayClassName=" boxShadowSecondary customScrollBar header-filter-dropdown  project-more-dropdown "
        menu={{
          items: moreItems,
          onClick: handleMenuClick,
        }}
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

const moreItems: MenuProps['items'] = [
  {
    key: 'edit-field',
    label: (
      <div className="flex gap-2 items-center  text-neutral-dark-500">
        <Edit2 size={16} />
        <Text as="span" variant="B2-Regular">
          Edit field
        </Text>
      </div>
    ),
  },
  {
    key: 'add-lookup-fields',
    label: (
      <div className="flex gap-2 items-center  text-neutral-dark-500">
        <SearchStatus size={16} />
        <Text as="span" variant="B2-Regular">
          Add lookup fields
        </Text>
      </div>
    ),
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
  },
  {
    key: 'duplicate-field',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <Copy size={16} />
        <Text as="span" variant="B2-Regular">
          Duplicate field
        </Text>
      </div>
    ),
  },

  {
    key: 'insert-left',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <ArrowLeft size={16} />
        <Text as="span" variant="B2-Regular">
          Insert left
        </Text>
      </div>
    ),
  },
  {
    key: 'insert-right',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <ArrowRight size={16} />
        <Text as="span" variant="B2-Regular">
          Insert right
        </Text>
      </div>
    ),
  },
  {
    key: 'change-primary-field',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <Code size={16} />
        <Text as="span" variant="B2-Regular">
          Change primary field
        </Text>
      </div>
    ),
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
  },
  {
    key: 'configure-date-dependencies',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <ConfigureIcon />
        <Text as="span" variant="B2-Regular">
          Configure date dependencies
        </Text>
      </div>
    ),
  },

  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
  },
  {
    key: 'copy-field-url',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <Link size={16} />
        <Text as="span" variant="B2-Regular">
          Copy field URL
        </Text>
      </div>
    ),
  },
  {
    key: 'edit-field-description',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <InfoCircle size={16} />
        <Text as="span" variant="B2-Regular">
          Edit field description
        </Text>
      </div>
    ),
  },
  {
    key: 'edit-field-permisstions',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <Lock size={16} />
        <Text as="span" variant="B2-Regular">
          Edit field permisstions
        </Text>
      </div>
    ),
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
  },
  {
    key: 'sort-a-to-z',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <SortDownIcon />
        <Text as="span" variant="B2-Regular">
          Sort A → Z
        </Text>
      </div>
    ),
  },
  {
    key: 'sort-z-to-a',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <SortDownIcon />
        <Text as="span" variant="B2-Regular">
          Sort Z → A
        </Text>
      </div>
    ),
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
  },
  {
    key: 'filter-by-this-field',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <SortDownIcon />
        <Text as="span" variant="B2-Regular">
          Filter by this field
        </Text>
      </div>
    ),
  },
  {
    key: 'group-by-this-field',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <GroupIcon />
        <Text as="span" variant="B2-Regular">
          Group by this field
        </Text>
      </div>
    ),
  },
  {
    key: 'divider',
    type: 'divider',
    className: '!bg-borderColor !my-2',
  },
  {
    key: 'hide-filed',
    label: (
      <div className="flex gap-2 items-center text-neutral-dark-500">
        <EyeSlash size={16} />
        <Text as="span" variant="B2-Regular">
          Hide Filed
        </Text>
      </div>
    ),
  },
  {
    key: 'delete-filed',
    label: (
      <div className="flex gap-2 items-center text-danger">
        <Trash size={16} />
        <Text as="span" variant="B2-Regular">
          Delete Filed
        </Text>
      </div>
    ),
  },
];
