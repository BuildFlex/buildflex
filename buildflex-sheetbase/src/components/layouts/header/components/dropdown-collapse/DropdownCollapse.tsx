import { Collapse, CollapseProps } from 'antd';
import { ArrowRight2 } from 'iconsax-react';
import ProjectThemeSelector from './appearance/ProjectThemesSelector';
import IconsSelector from './appearance/IconsSelector';
import BaseGuideContent from './base-guide/BaseGuideContent';

const DropdownCollapse = () => {
  return (
    <Collapse
      accordion
      expandIcon={({ isActive }) => (
        <ArrowRight2 size={16} className={isActive ? 'rotate-90' : ''} />
      )}
      items={collapseItems}
      defaultActiveKey={['1']}
      className="bg-white"
    />
  );
};

export default DropdownCollapse;

const collapseItems: CollapseProps['items'] = [
  {
    key: 'Appearance',
    label: (
      <span className="font-lato text-base font-semibold text-neutral-dark-500">
        Appearance
      </span>
    ),
    children: (
      <div className="mb-2">
        <ProjectThemeSelector />
        <div className="h-[1px]  bg-borderColor w-full my-2" />
        <IconsSelector />
      </div>
    ),
  },
  {
    key: 'base-guide',
    label: (
      <span className="font-lato text-base font-semibold text-neutral-dark-500">
        Base guide
      </span>
    ),

    children: <BaseGuideContent />,
  },
];
