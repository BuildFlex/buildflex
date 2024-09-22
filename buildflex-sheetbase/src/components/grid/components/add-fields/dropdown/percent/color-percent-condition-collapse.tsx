import Text from '@/components/typography/Text';
import ColorSelector from '@/components/view-filter/grid-filter/color/color-selector';
import { cn } from '@/utils/cn';
import { Collapse } from 'antd';
import { Add, Trash } from 'iconsax-react';
import { IColorCondition } from './color-dropdown';
import PercentConditionRow from './percent-condition-row';

const ColorPercentConditionCollapse = ({
  items,
}: {
  items: IColorCondition[] | undefined;
}) => {
  return (
    <Collapse
      expandIcon={() => null}
      expandIconPosition="end"
      items={items?.map((item) => ({
        children: (
          <div className="no-border-select flex flex-col gap-3 pl-6">
            {item?.conditions.map((i, index) => {
              return (
                <PercentConditionRow isFirstRow={index === 0} key={i.id} />
              );
            })}
            <div className="flex items-center  h-[32px] box-border whitespace-nowrap gap-3 ">
              <button className="flex px-0 gap-2 items-center max-w-[117px] bg-transparent outline-none  cursor-pointer border-none shadow-none text-neutral-dark-500 hover:text-theme-ocean-blue  h-8 box-border">
                <Add size={16} />
                <Text as="span" variant="B2-Medium">
                  Add conditions
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
                iconSize={28}
                initialValue={{
                  background: item.backgroudColor,
                  color: item.color,
                }}
              />
            </div>
            <Text
              as="span"
              variant="B2-Regular"
              className={cn(
                'h-[18px]',
                item?.label ? 'text-neutral-dark-500' : 'text-neutral-dark-300',
              )}
            >
              {item?.label || 'Define a condition'}
            </Text>
          </div>
        ),
      }))}
      accordion
      defaultActiveKey={['1']}
      className="color-condition-collapse  !max-h-[300px] !overflow-auto customScrollBar !p-3 flex flex-col gap-3 !border-none !rounded-none"
    />
  );
};

export default ColorPercentConditionCollapse;
