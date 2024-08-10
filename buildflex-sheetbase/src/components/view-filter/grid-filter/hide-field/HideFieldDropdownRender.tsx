import DropdownItem from '@/components/common/dropdown/DropdownItem';
import {
  AutoNumberIcon,
  ChooseBoxIcon,
  CursorDefaultIcon,
  FormulaIcon,
  MoveIcon,
  QuestionCircle,
} from '@/components/icons';
import Text from '@/components/typography/Text';
import { Input, Switch } from 'antd';
import {
  ArrowCircleDown,
  Barcode,
  Calendar,
  CalendarTick,
  Call,
  Chart,
  Clock,
  DocumentText,
  DollarCircle,
  Hashtag,
  Link,
  Math,
  PercentageCircle,
  SearchNormal1,
  SearchStatus,
  Sms,
  Star,
  Task,
  TickSquare,
  User,
  UserTick,
} from 'iconsax-react';
import React, { ReactNode, useState } from 'react';
import { Eye, More, Text as TextIcon } from 'iconsax-react';
interface Field {
  id: string;
  icon: React.ElementType;
  label: string;
}

const fields: Field[] = [
  { id: 'single-line', icon: TextIcon, label: 'Single line text' },
  { id: 'long-text', icon: ChooseBoxIcon, label: 'Long text' },
  { id: 'attachment', icon: DocumentText, label: 'Attachment' },
  { id: 'checkbox', icon: TickSquare, label: 'Checkbox' },
  { id: 'multiple-select', icon: Task, label: 'Multiple select' },
  { id: 'single-select', icon: ArrowCircleDown, label: 'Single select' },
  { id: 'user', icon: User, label: 'User' },
  { id: 'date', icon: Calendar, label: 'Date' },
  { id: 'phone', icon: Call, label: 'Phone number' },
  { id: 'email', icon: Sms, label: 'Email' },
  { id: 'url', icon: Link, label: 'URL' },
  { id: 'number', icon: Hashtag, label: 'Number' },
  { id: 'currency', icon: DollarCircle, label: 'Currency' },
  { id: 'percent', icon: PercentageCircle, label: 'Percent' },
  { id: 'duration', icon: Clock, label: 'Duration' },
  { id: 'rating', icon: Star, label: 'Rating' },
  { id: 'formula', icon: FormulaIcon, label: 'Formula' },
  { id: 'rollup', icon: Chart, label: 'Rollup' },
  { id: 'count', icon: Math, label: 'Count' },
  { id: 'lookup', icon: SearchStatus, label: 'Lookup' },
  { id: 'created-time', icon: CalendarTick, label: 'Created time' },
  { id: 'modified-time', icon: CalendarTick, label: 'Last modified time' },
  { id: 'created-by', icon: UserTick, label: 'Created by' },
  { id: 'modified-by', icon: UserTick, label: 'Last modified by' },
  { id: 'autonumber', icon: AutoNumberIcon, label: 'Autonumber' },
  { id: 'barcode', icon: Barcode, label: 'Barcode' },
  { id: 'button', icon: CursorDefaultIcon, label: 'Button' },
];
const HideFieldDropdownRender = ({ menu }: { menu: ReactNode }) => {
  const [showFields, setShowFields] = useState<string[]>([]);
  const handleShowAll = () => {
    setShowFields(fields.map((field) => field.id));
  };
  const handleHideAll = () => {
    setShowFields([]);
  };
  return (
    <div className="flex flex-col gap-2 box-border p-3 rounded-lg w-[320px] max-h-[300px] ">
      <Input
        placeholder="Find a field"
        prefix={<SearchNormal1 size={16} color={'#6A758B'} />}
        suffix={<QuestionCircle color="#6A758B" />}
        style={{
          padding: '0 8px',
          boxShadow: 'none',
          borderRadius: '4px',
        }}
        className="min-h-[36px] flex !text-neutral-dark-500 !h-9 !cursor-default gap-2 items-center sidebar__search"
      />
      <div className="flex flex-col gap-1 h-full flex-1 overflow-auto customScrollBar">
        {fields.map((field) => (
          <DropdownItem key={field.id} className="text-neutral-dark-500">
            <Switch
              checked={showFields.includes(field.id)}
              onChange={(checked) => {
                setShowFields((prev) =>
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
            <MoveIcon className="ml-auto cursor-move" />
          </DropdownItem>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-1">
        <button
          onClick={handleHideAll}
          className="px-3 py-1 w-full outline-none  cursor-pointer border-none shadow-none text-theme-ocean-blue bg-[#E0F2FE] h-[28px] box-border rounded-md"
        >
          <Text as="span" variant="B2-Medium">
            Hide all
          </Text>
        </button>
        <button
          onClick={handleShowAll}
          className="px-3 py-1 w-full outline-none cursor-pointer border-none shadow-none text-theme-ocean-blue bg-[#E0F2FE] h-[28px] box-border rounded-md"
        >
          <Text as="span" variant="B2-Medium">
            Show all
          </Text>
        </button>
      </div>
    </div>
  );
};

export default HideFieldDropdownRender;
