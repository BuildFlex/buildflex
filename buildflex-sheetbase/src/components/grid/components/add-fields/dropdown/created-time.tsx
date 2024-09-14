import Text from '@/components/typography/Text';
import { ArrowDown2, Calendar } from 'iconsax-react';
import React from 'react';

import DropdownItem from '@/components/common/dropdown/DropdownItem';
import Select from '@/components/select/select';
import TimeZoneSelect from '@/components/select/timezone-select';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import { Switch } from 'antd';

interface CreatedTimeDropdownProps {
  onChangeDropdown: (value: IField | null) => void;
}

const DateList = ['12h (3:53pm)', '24h (15:53pm)'];
const suggestedTimezones = [
  { label: 'GMT/UTC', gmt: 'GMT / UTC' },
  { label: 'Asia/Bangkok', gmt: '+07 / UTC+7' },
];
const AllTimeZones = [
  { label: 'Africa/Abidjan', gmt: 'GMT / UTC' },
  { label: 'Africa/Accra', gmt: 'GMT / UTC' },
  { label: 'Africa/Addis_Ababa', gmt: 'EAT / UTC+3' },
  { label: 'Africa/Algiers', gmt: 'CET / UTC+1' },
];

const CreatedTimeDropdown: React.FC<CreatedTimeDropdownProps> = ({
  onChangeDropdown,
}) => {
  const [isDisplayTime, setIsDisplayTime] = React.useState<boolean>(false);
  const [isIncludeTime, setIsIncludeTime] = React.useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => onChangeDropdown(null)}
        style={{ border: '1px solid #EDEDED ' }}
        className="text-neutral-dark-500 flex gap-2 rounded items-center px-2 bg-transparent min-h-9 box-border hover:bg-gray-50 cursor-pointer"
      >
        <Calendar size={16} />
        <Text as="span" variant="B2-Regular">
          Created time
        </Text>
        <ArrowDown2 className="ml-auto" size={16} />
      </button>
      <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
        See the date and time each record was created.
      </Text>
      <div className="flex flex-col gap-2 mt-1">
        <Text as="span" variant="B2-Regular" className="text-neutral-dark-300">
          Date format.
        </Text>
        <Select
          position="bottom"
          initialValue="Local (4/10/2024)"
          dropdownClassName="max-h-[150px] overflow-auto customScrollBar"
          dropdownRender={
            <DropdownItem onClick={(e) => e.stopPropagation()}>
              <Text
                as="span"
                variant="B2-Regular"
                className="text-neutral-dark-300"
              >
                Find...
              </Text>
            </DropdownItem>
          }
          itemsList={DateList}
        />
      </div>
      {/* Switch */}
      <div className="flex flex-col gap-0 mt-1">
        {/* Is Include Time */}

        <DropdownItem className="px-0">
          <Switch
            onChange={setIsIncludeTime}
            checked={isIncludeTime}
            className="w-8"
            size="small"
          />
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Include time
          </Text>
        </DropdownItem>
        {isIncludeTime && (
          <div className="flex flex-col gap-2 my-2">
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              Time format
            </Text>
            <Select
              position="bottom"
              initialValue="12h (3:53pm)"
              dropdownClassName="max-h-[150px] overflow-auto customScrollBar"
              dropdownRender={
                <DropdownItem onClick={(e) => e.stopPropagation()}>
                  <Text
                    as="span"
                    variant="B2-Regular"
                    className="text-neutral-dark-300"
                  >
                    Find...
                  </Text>
                </DropdownItem>
              }
              itemsList={DateList}
            />
          </div>
        )}
        {/* Is Display Time */}
        <DropdownItem className="px-0">
          <Switch
            onChange={setIsDisplayTime}
            checked={isDisplayTime}
            className="w-8"
            size="small"
          />
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Use the same time zone for all collaborators
          </Text>
        </DropdownItem>
        {isDisplayTime && (
          <div className="flex flex-col gap-2 my-2">
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              Time zone
            </Text>
            <TimeZoneSelect
              allTimezone={AllTimeZones}
              dropdownClassName="max-h-[200px] overflow-auto customScrollBar"
              suggestedTimezone={suggestedTimezones}
              position="top"
            />
          </div>
        )}
        <DropdownItem className="px-0">
          <Switch className="w-8" size="small" />
          <Text
            as="span"
            variant="B2-Regular"
            className="text-neutral-dark-300"
          >
            Display time znoe
          </Text>
        </DropdownItem>
      </div>
    </>
  );
};

export default CreatedTimeDropdown;
