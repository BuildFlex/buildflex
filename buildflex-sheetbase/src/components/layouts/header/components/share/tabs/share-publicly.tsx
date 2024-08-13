import { QuestionCircle } from '@/components/icons';
import Text from '@/components/typography/Text';
import { useTheme } from '@/provider/theme-provider';
import { cn } from '@/utils/cn';
import { Input, Switch } from 'antd';
import {
  ArrowRotateLeft,
  Code,
  CodeCircle,
  Export,
  ExportSquare,
  RotateLeft,
} from 'iconsax-react';
import React from 'react';
const allowList = [
  {
    title: 'Allow viewers to copy data out of this base',
    key: 'allow-viewers-to-copy-data-out-of-this-base',
  },
  {
    title: 'Show extensions added to this base',
    key: 'show-extensions-added-to-this-base',
  },
  {
    title: 'Show extensions added to this base',
    key: 'show-extensions-added-to-this-base-2',
  },
  {
    title: 'Restrict access with a password',
    key: 'restrict-access-with-a-password',
  },
];
const SharePublicly = () => {
  const { theme } = useTheme();
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div
      className="flex flex-col min-h-[64px]  box-border"
      style={{ border: `1px solid #EDEDED` }}
    >
      <div className="h-[64px] px-4 py-3 items-center flex box-border rounded gap-6">
        <Switch
          onChange={setIsActive}
          className="custom-switch "
          size="small"
        />
        <div className="flex flex-col gap-1">
          <Text
            as="span"
            variant="B2-SemiBold"
            className={cn('cursor-pointer  text-neutral-dark-500')}
          >
            Disable shared base link (read-only)
          </Text>
          <Text
            as="span"
            variant="sub-title"
            className={cn('cursor-pointer text-neutral-dark-300')}
          >
            Turn off full base access
          </Text>
        </div>
      </div>
      {isActive && (
        <div
          className="py-4 pl-[72px] flex gap-2 flex-col"
          style={{ borderTop: `1px solid #EDEDED` }}
        >
          <div
            style={{ border: `1px solid #EDEDED` }}
            className="h-9 rounded max-w-[415px] items-center flex gap-2 px-2 text-neutral-dark-300"
          >
            <Text
              as="span"
              variant="B2-Regular"
              className={cn(
                'cursor-pointer h-[18px]  whitespace-nowrap truncate',
              )}
            >
              {'https://airtable.com/appiwzBBI7kDUZrQn/shrKzERN2aYA2Mv8F'}
            </Text>
            <ArrowRotateLeft className="cursor-pointer" size={16} />
            <ExportSquare className="cursor-pointer" size={16} />
            <CodeCircle className="cursor-pointer" size={16} />
          </div>
          <div className="flex flex-col h-full w-full box-border">
            {allowList.map((item) => (
              <div
                key={item.key}
                className="flex gap-2 h-8 box-border w-[378px] items-center"
              >
                <Switch id={item.key} className="custom-switch" size="small" />
                <label
                  htmlFor={item.key}
                  className="cursor-pointer text-neutral-dark-500"
                >
                  <Text as="span" variant="B2-Regular">
                    {item.title}
                  </Text>
                </label>
                <QuestionCircle color="#6A758B" className="cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SharePublicly;
