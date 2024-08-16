import DropdownItem from '@/components/common/dropdown/DropdownItem';
import { CheckBoxIcon } from '@/components/icons';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import Text from '@/components/typography/Text';
import { MenuProps, Switch } from 'antd';
import {
  ArrowRight2,
  Copy,
  DocumentDownload,
  Edit2,
  People,
  Printer,
  Setting2,
  Trash,
  User,
} from 'iconsax-react';
import { Eye, More } from 'iconsax-react';
interface Field {
  id: string;
  icon: React.ElementType;
  label: string;
}
const fields: Field[] = [
  { id: 'single-line', icon: Eye, label: 'Single line text' },
  { id: 'long-text', icon: Eye, label: 'Long text' },
  { id: 'attachment', icon: Eye, label: 'Attachment' },
  { id: 'checkbox', icon: Eye, label: 'Checkbox' },
  { id: 'multiple-select', icon: Eye, label: 'Multiple select' },
  { id: 'single-select', icon: Eye, label: 'Single select' },
  { id: 'user', icon: Eye, label: 'User' },
  { id: 'date', icon: Eye, label: 'Date' },
  { id: 'phone', icon: Eye, label: 'Phone number' },
  { id: 'email', icon: Eye, label: 'Email' },
  { id: 'url', icon: Eye, label: 'URL' },
  { id: 'number', icon: Eye, label: 'Number' },
  { id: 'currency', icon: Eye, label: 'Currency' },
  { id: 'percent', icon: Eye, label: 'Percent' },
  { id: 'duration', icon: Eye, label: 'Duration' },
  { id: 'rating', icon: Eye, label: 'Rating' },
  { id: 'formula', icon: Eye, label: 'Formula' },
  { id: 'rollup', icon: Eye, label: 'Rollup' },
  { id: 'count', icon: Eye, label: 'Count' },
  { id: 'lookup', icon: Eye, label: 'Lookup' },
  { id: 'created-time', icon: Eye, label: 'Created time' },
  { id: 'modified-time', icon: Eye, label: 'Last modified time' },
  { id: 'created-by', icon: Eye, label: 'Created by' },
  { id: 'modified-by', icon: Eye, label: 'Last modified by' },
  { id: 'autonumber', icon: Eye, label: 'Autonumber' },
  { id: 'barcode', icon: Eye, label: 'Barcode' },
  { id: 'button', icon: Eye, label: 'Button' },
];
export const fieldsItems: MenuProps['items'] = fields.map((field) => ({
  key: field.id,
  label: (
    <DropdownItem>
      <Switch size="small" className="w-8" />
      <field.icon size={16} />
      <Text as="span" variant="B2-Regular">
        {field.label}
      </Text>
    </DropdownItem>
  ),
}));
