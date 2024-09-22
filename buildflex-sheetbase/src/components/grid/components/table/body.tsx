import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Checkbox } from 'antd';
import { Add, Maximize4 } from 'iconsax-react';
import React from 'react';
import AttachmentCell from '../content/AttachmentCell';
import ButtonCell from '../content/ButtonCell';
import ByUserCell from '../content/ByUserCell';
import CheckBoxCell from '../content/CheckBoxCell';
import DateCell from '../content/DateCell';
import LinkCell from '../content/LinkCell';
import LinkToCell from '../content/LinkToCell';
import LongTextCell from '../content/LongTextCell';
import MutilpleSelectCell from '../content/MutilpleSelectCell';
import NumberCell from '../content/NumberCell';
import RatingCell from '../content/RatingCell';
import ResultCell from '../content/ResultCell';
import SingleSelectCell from '../content/SingleSelectCell';
import SingleLineCell from '../content/SingleTextCell';
import TextCell from '../content/TextCell';
import TimeCell from '../content/TimeCell';
import UserCell from '../content/UserCell';
import ExpandModal from '../expand-modal/expand-modal';
const renderCell = (field: FakeContentItem) => {
  switch (field.id) {
    case 'single-line':
      return <SingleLineCell text={field.data.text} />;
    case 'long-text':
      return <LongTextCell text={field.data.text} />;
    case 'attachment':
      return <AttachmentCell images={field.data.images} />;
    case 'checkbox':
      return <CheckBoxCell isCheck={field.data.checked} />;
    case 'multiple-select':
      return <MutilpleSelectCell selects={field.data.selectValues} />;
    case 'single-select':
      return (
        <SingleSelectCell
          select={field.data.selectValues[0]}
          selects={field.data.selectValues}
        />
      );
    case 'user':
      return <UserCell user={field.data.user} />;
    case 'date':
      return (
        <DateCell
          date={field.data.date}
          time={field.data.time}
          gmt={field.data.gmt}
        />
      );
    case 'phone':
      return (
        <TextCell text={`${field.data.phoneCountryCode} ${field.data.phone}`} />
      );
    case 'email':
      return <LinkCell text={field.data.text} />;
    case 'url':
      return <LinkCell text={field.data.text} />;
    case 'number':
      return (
        <NumberCell
          className="w-full flex items-center justify-end"
          number={field.data.number}
          shortNumber={field.data.shortNumber}
        />
      );
    case 'currency':
      return (
        <TextCell
          className="w-full flex items-center justify-end"
          text={field.data.text}
        />
      );
    case 'percent':
      return (
        <TextCell
          className="w-full flex items-center justify-end"
          text={field.data.text}
        />
      );
    case 'duration':
      return (
        <TextCell
          className="w-full flex items-center justify-end"
          text={field.data.text}
        />
      );
    case 'rating':
      return <RatingCell rating={field.data.rating} />;
    case 'formula':
      return <ResultCell subText={field.data.subText} text={field.data.text} />;
    case 'rollup':
      return <ResultCell subText={field.data.subText} text={field.data.text} />;
    case 'count':
      return (
        <ResultCell
          isTextRight={true}
          subText={field.data.subText}
          text={field.data.text}
        />
      );
    case 'lookup':
      return <ResultCell subText={field.data.subText} text={field.data.text} />;
    case 'created-time':
      return (
        <TimeCell
          subText={field.data.subText}
          date={field.data.date}
          time={field.data.time}
          gmt={field.data.gmt}
        />
      );
    case 'modified-time':
      return (
        <TimeCell
          subText={field.data.subText}
          date={field.data.date}
          time={field.data.time}
        />
      );
    case 'created-by':
      return <ByUserCell user={field.data.user} subText={field.data.subText} />;
    case 'modified-by':
      return <ByUserCell user={field.data.user} subText={field.data.subText} />;
    case 'autonumber':
      return (
        <ResultCell
          isTextRight={true}
          subText={field.data.subText}
          text={field.data.text}
        />
      );
    case 'barcode':
      return <TextCell text={field.data.text} />;
    case 'button':
      return <ButtonCell name={field.data.text} />;
    case 'link-to-another-record':
      return <LinkToCell linkList={field.data.links} />;
    default:
      return (
        <Text as="span" variant="B2-Regular">
          {field.id}
        </Text>
      );
  }
};

const fakeContent = [
  {
    id: 'single-line',
    data: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
  {
    id: 'long-text',
    data: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
  {
    id: 'attachment',
    data: {
      images: [
        'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
        'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
        'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
        'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
        'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
        'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
        'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
      ],
    },
  },
  { id: 'checkbox', data: { checked: true } },
  {
    id: 'multiple-select',
    data: {
      selectValues: [
        { name: 'Option 1', color: '#D1E2FF' },
        { name: 'Option 2', color: '#FFEAB6' },
        { name: 'Option 3', color: '#D1E2FF' },
      ],
    },
  },
  {
    id: 'single-select',
    data: {
      selectValues: [
        { name: 'Option 1', color: '#D1E2FF' },
        { name: 'Option 2', color: '#FFEAB6' },
        { name: 'Option 3', color: '#D1E2FF' },
      ],
    },
  },
  {
    id: 'user',
    data: {
      user: {
        name: 'John Doe',
        avatar: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
        email: 'Username1@gmail.com',
      },
    },
  },
  {
    id: 'date',
    data: { date: '4/19/2024', time: '5:24am', gmt: 'GMT' },
  },
  {
    id: 'phone',
    data: { phone: '758-4587', phoneCountryCode: '(32)' },
  },
  { id: 'email', data: { text: 'BuildFlex123@work.com' } },
  { id: 'url', data: { text: 'https://Linksample.com/' } },
  { id: 'number', data: { number: '450000,000', shortNumber: '0,145M' } },
  { id: 'currency', data: { text: '$145.00' } },
  { id: 'percent', data: { text: '50%' } },
  { id: 'duration', data: { text: '20:00' } },
  { id: 'rating', data: { rating: 3 } },
  {
    id: 'formula',
    data: {
      text: 'Result',
      subText:
        'Formula fields should be configured in the field menu dropdown.',
    },
  },
  {
    id: 'rollup',
    data: {
      text: 'Result',
      subText: 'Rollup fields should be configured in the field menu dropdown.',
    },
  },
  {
    id: 'count',
    data: {
      text: 'Result',
      subText: 'Count fields should be configured in the field menu dropdown.',
    },
  },
  {
    id: 'lookup',
    data: {
      text: 'Result',
      subText: 'Lookup fields should be configured in the field menu dropdown.',
    },
  },
  {
    id: 'created-time',
    data: {
      date: '4/19/2024',
      time: '5:24am',
      gmt: 'GMT',
      subText:
        'Created time fields should be configured in the field menu dropdown.',
    },
  },
  {
    id: 'modified-time',
    data: {
      date: '4/19/2024',
      time: '5:24am',
      subText:
        'Last modified time fields should be configured in the field menu dropdown.',
    },
  },
  {
    id: 'created-by',
    data: {
      user: {
        name: 'John Doe',
        avatar: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
        email: 'Username1@gmail.com',
      },
      subText:
        'Created by fields should be configured in the field menu dropdown.',
    },
  },
  {
    id: 'modified-by',
    data: {
      user: {
        name: 'John Doe',
        avatar: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
        email: 'Username1@gmail.com',
      },
      subText:
        'Last modified by fields should be configured in the field menu dropdown.',
    },
  },
  {
    id: 'autonumber',
    data: {
      text: '1',
      subText:
        'Autonumber field value are automatically assigned cannot be edited.',
    },
  },
  { id: 'barcode', data: { text: 'ABC-CDE-123' } },
  { id: 'button', data: { text: 'Button' } },
  {
    id: 'link-to-another-record',
    data: {
      links: [
        { name: 'Link 1', color: '#D1E2FF' },
        { name: 'Link 2', color: '#D1E2FF' },
        { name: 'Link 3', color: '#D1E2FF' },
        { name: 'Link 4', color: '#D1E2FF' },
        { name: 'Link 5', color: '#D1E2FF' },
        { name: 'Link 6', color: '#D1E2FF' },
      ],
    },
  },
];
interface FakeContentItem {
  id: string;
  data: any;
}
const GridTabBody = () => {
  const [rows, setRows] = React.useState(10);
  const [isExpandOpen, setIsExpandOpen] = React.useState(false);
  const handleCancel = () => setIsExpandOpen(false);
  return (
    <>
      <tbody className="h-full w-full  text-neutral-dark-500">
        {Array.from({ length: rows }).map((number, rowIndex) => (
          <tr
            key={`GridTabRow-${number as number}`}
            className="h-9 max-h-9 bg-white"
          >
            {/* Number Col */}
            <td
              style={{
                borderRight: '1px solid #EDEDED',
                borderBottom: '1px solid #EDEDED',
              }}
              className={cn(
                'h-9 w-20 z-[20] group sticky left-0 text-start bg-white',
                "after:absolute after:h-full after:bg-[#EDEDED] after:content-[''] after:-right-[1px] after:top-0 after:w-[1px] ",
                "before:absolute before:h-[1px] before:w-full before:bg-[#EDEDED] before:content-[''] before:-bottom-[1px] before:left-0  ",
              )}
            >
              <div className="flex group-hover:hidden items-center justify-center size-9">
                <Text as="span" variant="B2-Regular" className="h-[18px] ">
                  {rowIndex + 1}
                </Text>
              </div>
              <div className="h-9 group-hover:flex items-center hidden">
                <div className="flex items-center justify-center size-9">
                  <Checkbox />
                </div>
                <button
                  onClick={() => setIsExpandOpen(true)}
                  className="flex outline-none border-none bg-transparent cursor-pointer items-center justify-center size-9"
                >
                  <Maximize4 color="#087AAF" size={16} />
                </button>
              </div>
            </td>
            {/* Number Col */}

            {fakeContent.map((field) => {
              return (
                <td
                  key={`${field.id}-${number}-${field.id}`}
                  style={{
                    borderRight: '1px solid #EDEDED',
                    borderBottom: '1px solid #EDEDED',
                  }}
                  className="h-9 px-2 relative"
                >
                  {renderCell(field)}
                </td>
              );
            })}
            <td
              style={{
                borderRight: '1px solid #EDEDED',
                borderBottom: '1px solid #EDEDED',
              }}
              className="h-9 px-2"
            />
          </tr>
        ))}
        <tr className="h-9 max-h-9">
          <td
            style={{
              borderRight: '1px solid #EDEDED',
              borderBottom: '1px solid #EDEDED',
            }}
            className="h-9 before:absolute before:w-full before:content-[''] before:h-[1px] before:bg-[#EDEDED] before:-bottom-[1px] before:left-0   after:absolute after:h-full after:bg-[#EDEDED] after:content-[''] after:-right-[1px] after:top-0 after:w-[1px] sticky left-0 text-start bg-white"
          >
            <div
              onClick={() => setRows((prev) => prev + 1)}
              className="cursor-pointer flex items-center justify-center size-9"
            >
              <Text as="span" variant="B2-Regular" className="h-[18px]">
                <Add size={16} />
              </Text>
            </div>
          </td>
        </tr>
        <tr className="h-full w-full">
          <td className="h-9 px-2 bg-white" />
        </tr>
      </tbody>
      {isExpandOpen && (
        <ExpandModal isModalShow={isExpandOpen} handleCancel={handleCancel} />
      )}
    </>
  );
};

export default GridTabBody;
