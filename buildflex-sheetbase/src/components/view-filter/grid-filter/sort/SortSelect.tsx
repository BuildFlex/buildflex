import Text from '@/components/typography/Text';
import { Divider, Input, Select, Space } from 'antd';
import { Add, ArrowDown2, ArrowRight } from 'iconsax-react';
import React, {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
interface SelectItemProps {
  label: ReactNode;
  value: string;
}
interface SelectProps {
  style?: React.CSSProperties;
  initialValue: SelectItemProps;
  itemsList: SelectItemProps[];
  searchPlaceholder?: string;
  popupClassName?: string;
  className?: string;
  dropdownRender?: (
    menu: ReactElement<any, string | JSXElementConstructor<any>>,
  ) => ReactElement<any, string | JSXElementConstructor<any>>;
}
const SortSelect = ({
  style,
  initialValue,
  itemsList,
  searchPlaceholder,
  popupClassName,
  className,
  dropdownRender,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [initialValue]);
  return (
    <Select
      style={style}
      className={className}
      open={open}
      onDropdownVisibleChange={(visible) => setOpen(visible)}
      value={initialValue}
      dropdownRender={dropdownRender ? dropdownRender : (menu) => menu}
      suffixIcon={<ArrowDown2 color="currentColor" size={16} />}
      popupClassName={popupClassName}
      options={itemsList}
    />
  );
};

export default SortSelect;
