import { CheckBoxIcon } from '@/components/icons';
import { useTheme } from '@/provider/theme-provider';
import { themeLinearBackground, ThemesMap } from '@/themes/defaultClass';
import defaultTheme from '@/themes/defaultTheme';
import { IThemmes, themeList } from '@/themes/themes-list';
import { cn } from '@/utils/cn';
import React from 'react';

const ProjectThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex">
      {themeList.map((i: IThemmes) => (
        <button
          key={i}
          className={cn(
            'size-6 border-none p-0 cursor-pointer flex items-center justify-center rounded mx-2',
            themeLinearBackground[i],
          )}
          onClick={() => setTheme(ThemesMap.get(i) || defaultTheme)}
        >
          {theme.name === i && <CheckBoxIcon />}
        </button>
      ))}
    </div>
  );
};

export default ProjectThemeSelector;
