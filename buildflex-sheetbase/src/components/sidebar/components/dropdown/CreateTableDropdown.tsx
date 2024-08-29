import DropdownItem from '@/components/common/dropdown/DropdownItem';
import {
  CSVIcon,
  GoogleCalendarIcon,
  GoogleSheetIcon,
  PlusIcon,
  SaleForceIcon,
} from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Dropdown, MenuProps } from 'antd';
import {
  ArrowRight2,
  Book,
  Book1,
  Copy,
  Edit2,
  Setting2,
  Trash,
} from 'iconsax-react';
import SheetBaseIcon from '@/components/common/SheetBaseIcon';
import Tag from './TeamTag';
import SheetbaseGradientIcon from '@/components/icons/sheetbase-gradient-icon';
const items = [
  {
    key: 'rename-view',
    label: 'Sheetbase Base',
    icon: SheetbaseGradientIcon,
  },
  {
    key: 'csv-file',
    label: ' CSV file',
    icon: CSVIcon,
  },
  {
    key: 'google-calendar',
    label: 'Google Calendar',
    icon: GoogleCalendarIcon,
  },
  {
    key: 'google-sheets',
    label: 'Google Sheets',
    icon: GoogleSheetIcon,
  },
  {
    key: 'google-sheets',
    label: 'Salesforce',
    icon: SaleForceIcon,
    isBusiness: true,
  },
];
const CreateTableDropdown = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Dropdown
      trigger={['click']}
      placement="bottomLeft"
      className={className}
      dropdownRender={(menu) => (
        <div className="flex flex-col gap-3 w-[350px] boxShadowSecondary rounded-lg !p-3">
          <div className="flex flex-col gap-1 ">
            <Text
              as="span"
              variant="sub-title"
              className="text-neutral-dark-300"
            >
              Add a blank table
            </Text>
            <DropdownItem>Start from scratch</DropdownItem>
          </div>
          <div className="h-[1px] bg-borderColor " />
          <div className="flex flex-col gap-2 ">
            <Text
              as="span"
              variant="sub-title"
              className="text-neutral-dark-300"
            >
              Add from other sources
            </Text>
          </div>
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <DropdownItem
                key={item.key}
                className="rounded hover:bg-gray-50 cursor-pointer"
              >
                <item.icon size={20} className="size-5" />
                <Text as="span" variant="B2-Regular">
                  {item.label}
                </Text>
                {item.isBusiness && (
                  <Tag className="w-auto px-2" name="Business" />
                )}
              </DropdownItem>
            ))}
          </div>

          <DropdownItem className="rounded h-10 text-neutral-dark-300 hover:bg-gray-50 cursor-pointer">
            <Book1 size={16} />
            <Text as="span" variant="B2-Regular">
              23 more sources...
            </Text>
            <ArrowRight2 size={16} className="ml-auto" />
          </DropdownItem>
        </div>
      )}
      align={{ offset: [260, -40] }}
    >
      <div>{children}</div>
    </Dropdown>
  );
};

export default CreateTableDropdown;
