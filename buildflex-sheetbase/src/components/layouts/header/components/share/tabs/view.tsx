import { QuestionCircle } from '@/components/icons';
import Tag from '@/components/sidebar/components/dropdown/TeamTag';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Switch } from 'antd';
import {
  ArrowDown2,
  ArrowRight2,
  ArrowRotateLeft,
  CodeCircle,
  ExportSquare,
  Grid8,
} from 'iconsax-react';
const allowList = [
  {
    title: 'Allow viewers to copy data out of this base',
    key: 'allow-viewers-to-copy-data-out-of-this-base',
  },
  {
    title: 'Allow data in this view to be synced to other bases',
    key: 'allow-data-in-this-view-to-be-synced-to-other-bases',
  },
  {
    title: 'Allow edit from other bases',
    key: 'allow-edit-from-other-bases',
    isChildren: true,
  },
  {
    title: 'Show all fields in expanded records',
    key: 'show-all-fields-in-expanded-records',
  },
  {
    title: 'Restrict access to an email domain',
    key: 'restrict-access-to-an-email-domain',
  },
  {
    title: 'Restrict access with a password',
    key: 'restrict-access-with-a-password',
  },
];
const ShareViewTab = () => {
  return (
    <>
      <div className="p-6 gap-[10px] h-auto box-border w-[570px] flex flex-col items-center justify-center">
        <div
          style={{ border: '1px solid #EDEDED' }}
          className="rounded py-6 flex flex-col gap-6 w-[522px] h-[354px] box-border"
        >
          <div className="pl-6 flex items-center gap-6">
            <Switch className="w-8" size="small" />
            <div className="flex gap-2 items-center cursor-pointer text-neutral-dark-500">
              <Grid8 size={16} color="#087AAF" />
              <Text
                as="span"
                variant="B2-Regular"
                className={cn('cursor-pointer  text-neutral-dark-500')}
              >
                Grid view
              </Text>
              <ArrowDown2 size={16} />
            </div>
            <div className="flex gap-2 items-center text-neutral-dark-500">
              <Text
                as="span"
                variant="B2-Regular"
                className={cn('cursor-pointer  text-neutral-dark-500')}
              >
                is not shared
              </Text>
              <QuestionCircle color="currentColor" />
            </div>
          </div>
          <div
            className="py-4 pl-[72px] flex gap-2 flex-col"
            style={{ borderTop: '1px solid #EDEDED' }}
          >
            <div
              style={{ border: '1px solid #EDEDED' }}
              className="h-9 rounded max-w-[415px] items-center text-neutral-dark-300 flex gap-2 px-2"
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
            <div className="flex flex-col gap-1 h-full w-full box-border">
              {allowList.map((item) => (
                <div
                  key={item.key}
                  style={
                    item.isChildren
                      ? {
                          borderLeft: '1px solid #EDEDED',
                          paddingLeft: 8,
                          marginLeft: 16,
                        }
                      : {}
                  }
                  className="flex gap-2 h-8 box-border w-[378px] items-center"
                >
                  <Switch id={item.key} className="w-8" size="small" />
                  <label
                    htmlFor={item.key}
                    className="cursor-pointer text-neutral-dark-500"
                  >
                    <Text as="span" variant="B2-Regular">
                      {item.title}
                    </Text>
                  </label>
                  {item.isChildren ? (
                    <Tag className="w-auto ml-0" name="Business" />
                  ) : (
                    <QuestionCircle
                      color="#6A758B"
                      className="cursor-pointer"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div
        className={cn('h-[50px]  flex gap-2 w-full py-4 px-6 box-border ')}
        style={{ borderTop: '1px solid #EDEDED' }}
      >
        <ExportSquare size={16} />
        <Text as="span" variant="B2-SemiBold">
          See 3 shared view links in the base
        </Text>
        <ArrowRight2 />
      </div>
    </>
  );
};

export default ShareViewTab;
