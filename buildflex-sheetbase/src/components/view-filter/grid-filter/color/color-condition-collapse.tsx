import { Collapse, CollapseProps } from 'antd';
import { Add, Copy, Trash } from 'iconsax-react';
import React from 'react';
import ColorSelector from './color-selector';
import Text from '@/components/typography/Text';
import { FilterConditionType } from '../../components/dropdown-render/FilterDropdownRender';
import ConditionRow from '../filter/components/ConditionRow';
import ConditionGroupRow from '../filter/components/ConditionGroupRow';
import { MoveIcon } from '@/components/icons';
import { ItemType } from 'antd/es/menu/interface';

const ColorConditionCollapse = ({ items }: { items: any[] | undefined }) => {
  return (
    <Collapse
      expandIcon={() => null}
      expandIconPosition="end"
      items={items?.map((item, index) => ({
        children: (
          <div className="grid-filter-dropdown flex flex-col gap-3 pl-6">
            {item?.conditions.map((i, index) => {
              if (i.type === 'condition') {
                return <ConditionRow isFirstRow={index === 0} key={i.id} />;
              }
              return (
                <ConditionGroupRow
                  className={i.className}
                  key={i.id}
                  condition={i.conditions || []}
                />
              );
            })}
            <div className="flex items-center  h-[32px] box-border whitespace-nowrap gap-3 ">
              <button className="flex px-0 gap-2 items-center max-w-[117px] bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
                <Add size={16} />
                <Text as="span" variant="B2-Medium">
                  Add conditions
                </Text>
              </button>
              <button className="flex  px-0 gap-2 items-center max-w-[178px] w-full bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-300 hover:text-theme-ocean-blue  h-8 box-border">
                <Add size={16} />

                <Text as="span" variant="B2-Medium">
                  Add conditions group
                </Text>
              </button>
            </div>
          </div>
        ),
        label: (
          <div className="flex h-8 gap-2 items-center text-neutral-dark-300">
            <Trash size={16} />
            <div onClick={(e) => e.stopPropagation()}>
              <ColorSelector
                iconSize={20}
                initialValue={{
                  background: item.backgroudColor,
                  color: item.color,
                }}
              />
            </div>
            <Text as="span" variant="B2-Regular" className="h-[18px]">
              {item.label}
            </Text>
            <div className="flex justify-end gap-2 ml-auto items-center w-[40px] h-[30px]">
              {!item.isLast && (
                <Copy onClick={(e) => e.stopPropagation()} size={16} />
              )}
              <div onClick={(e) => e.stopPropagation()} className="size-4">
                <MoveIcon className="size-4" />
              </div>
            </div>
          </div>
        ),
      }))}
      accordion
      defaultActiveKey={['1']}
      className="color-condition-collapse  !max-h-[300px] !overflow-auto customScrollBar !p-3 flex flex-col gap-3 !border-none !rounded-none"
    />
  );
};

export default ColorConditionCollapse;
