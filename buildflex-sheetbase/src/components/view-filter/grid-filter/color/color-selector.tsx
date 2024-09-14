import { cn } from '@/utils/cn';
import { Dropdown, MenuProps } from 'antd';
import { ArrowCircleDown } from 'iconsax-react';
import { useState } from 'react';
export const colorList = [
  { background: '#D1E2FF', color: '#000000' },
  { background: '#C4ECFF', color: '#000000' },
  { background: '#C1F5F0', color: '#000000' },
  { background: '#CFF5D1', color: '#000000' },
  { background: '#FFEAB6', color: '#000000' },
  { background: '#FFE0CC', color: '#000000' },
  { background: '#FFD4E0', color: '#000000' },
  { background: '#FAD2FC', color: '#000000' },
  { background: '#E0DAFD', color: '#000000' },
  { background: '#E5E9F0', color: '#000000' },
  { background: '#A0C6FF', color: '#000000' },
  { background: '#88DBFF', color: '#000000' },
  { background: '#74EBE1', color: '#000000' },
  { background: '#9AE095', color: '#000000' },
  { background: '#FFD66B', color: '#000000' },
  { background: '#FFB68E', color: '#000000' },
  { background: '#FFA6C1', color: '#000000' },
  { background: '#F797EF', color: '#000000' },
  { background: '#BFAEFC', color: '#000000' },
  { background: '#C4C7CD', color: '#000000' },
  { background: '#166EE1', color: '#ffffff' },
  { background: '#1FC3FF', color: '#ffffff' },
  { background: '#01B7B0', color: '#ffffff' },
  { background: '#048A0E', color: '#ffffff' },
  { background: '#E0A200', color: '#ffffff' },
  { background: '#D54401', color: '#ffffff' },
  { background: '#DC043B', color: '#ffffff' },
  { background: '#DD04A8', color: '#ffffff' },
  { background: '#7C37EF', color: '#ffffff' },
  { background: '#616670', color: '#ffffff' },
  { background: '#0D52AC', color: '#ffffff' },
  { background: '#0F68A2', color: '#ffffff' },
  { background: '#17726E', color: '#ffffff' },
  { background: '#006400', color: '#ffffff' },
  { background: '#AF6002', color: '#ffffff' },
  { background: '#AA2D00', color: '#ffffff' },
  { background: '#B10F41', color: '#ffffff' },
  { background: '#AB0A83', color: '#ffffff' },
  { background: '#6231AE', color: '#ffffff' },
  { background: '#41454D', color: '#ffffff' },
];
interface ColorSelectorProps {
  name?: string;
  initialValue: {
    background: string;
    color: string;
  };
  iconSize?: number;
  isName?: boolean;
}
const ColorSelector = ({
  name,
  initialValue,
  iconSize = 16,
  isName = false,
}: ColorSelectorProps) => {
  const [value, setValue] = useState<{
    background: string;
    color: string;
  }>(initialValue);
  return (
    <Dropdown
      menu={{
        items: colorList.map((color) => ({
          key: JSON.stringify(color),
          label: (
            <div
              className={cn(
                'h-6  px-2 box-border whitespace-nowrap truncate',
                isName
                  ? 'w-[53px]  max-w-[53px] rounded-[100px]'
                  : 'rounded size-6',
              )}
              style={{ backgroundColor: color.background, color: color.color }}
            >
              {name}
            </div>
          ),
        })) as MenuProps['items'],
        onClick: (e) => setValue(JSON.parse(e.key)),
      }}
      trigger={['click']}
      placement="bottomCenter"
      className="flex items-center relative justify-center"
      overlayClassName={cn(
        ' boxShadowSecondary ',
        isName
          ? 'color-selector-dropdown-with-name'
          : ' color-selector-dropdown',
      )}
      // align={{ offset: [50, -20] }}
    >
      <div
        className=" relative rounded-full cursor-pointer"
        style={{ height: iconSize, width: iconSize }}
      >
        <div
          style={{
            backgroundColor: value.color,
          }}
          className="absolute top-1/2 left-1/2  -translate-x-1/2 rounded-full -translate-y-1/2 z-[1] transform size-3 bg-black"
        />
        <ArrowCircleDown
          variant="Bold"
          color={value.background}
          size={iconSize}
          className="relative z-[2]"
        />
      </div>
    </Dropdown>
  );
};

export default ColorSelector;
