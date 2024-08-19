import { MoveToIcon } from '@/components/icons';
import Text from '@/components/typography/Text';
import { fields } from '@/components/view-filter/components/dropdown-render/HideFieldDropdownRender';
import { Add } from 'iconsax-react';
import { text } from 'node:stream/consumers';
import React from 'react';
import { gridTableFields } from '../../GridUI';
import { IField } from '@/components/view-filter/components/dropdown-render/GroupDropdownRender';
import TextCell from '../content/TextCell';
import AttachmentCell from '../content/AttachmentCell';
import CheckBoxCell from '../content/CheckBoxCell';
import SelectCell from '../content/SelectCell';
import UserCell from '../content/UserCell';
import DateCell from '../content/DateCell';
import LinkCell from '../content/LinkCell';
import LinkToCell from '../content/LinkToCell';
import ButtonCell from '../content/ButtonCell';
import RatingCell from '../content/RatingCell';
import ExpandModal from '../expand-modal/expand-modal';

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
      ],
    },
  },
  {
    id: 'single-select',
    data: {
      selectValue: { name: 'Option 1', color: '#D1E2FF' },
    },
  },
  {
    id: 'user',
    data: {
      user: {
        name: 'John Doe',
        avatar: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
      },
    },
  },
  {
    id: 'date',
    data: { date: '4/19/2024', time: '12:00am', gmt: 'GMT+7' },
  },
  {
    id: 'phone',
    data: { phone: '758-4587', phoneCountryCode: '(32)' },
  },
  { id: 'email', data: { text: 'BuildFlex123@work.com' } },
  { id: 'url', data: { text: 'https://Linksample.com/' } },
  { id: 'number', data: { text: '0,145M' } },
  { id: 'currency', data: { text: '$145.00' } },
  { id: 'percent', data: { text: '50%' } },
  { id: 'duration', data: { text: '20:00' } },
  { id: 'rating', data: { rating: 3 } },
  { id: 'formula', data: { text: 'Result' } },
  { id: 'rollup', data: { text: 'Result' } },
  { id: 'count', data: { text: 'Result' } },
  { id: 'lookup', data: { text: 'Result' } },
  {
    id: 'created-time',
    data: { date: '4/19/2024', time: '12:00am', gmt: 'GMT+7' },
  },
  {
    id: 'modified-time',
    data: { date: '4/19/2024', time: '12:00am', gmt: 'GMT+7' },
  },
  {
    id: 'created-by',
    data: {
      user: {
        name: 'John Doe',
        avatar: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
      },
    },
  },
  {
    id: 'modified-by',
    data: {
      user: {
        name: 'John Doe',
        avatar: 'https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg',
      },
    },
  },
  { id: 'autonumber', data: { number: 1 } },
  { id: 'barcode', data: { text: 'ABC-CDE-123' } },
  { id: 'button', data: { text: 'Button' } },
  {
    id: 'link-to-another-record',
    data: {
      links: [
        {
          name: 'Link 1',
          color: '#D1E2FF',
        },
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
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex} className="h-9 max-h-9 bg-white">
            <td
              style={{
                borderRight: '1px solid #EDEDED',
                borderBottom: '1px solid #EDEDED',
              }}
              className="h-9 w-20  after:absolute after:h-full after:bg-[#EDEDED] after:content-[''] after:-right-[1px] after:top-0 after:w-[1px] sticky left-0 text-start bg-white"
            >
              <div
                onClick={() => setIsExpandOpen(true)}
                className="flex cursor-pointer items-center justify-center size-9"
              >
                <Text as="span" variant="B2-Regular" className="h-[18px]">
                  {rowIndex + 1}
                </Text>
              </div>
            </td>
            {fakeContent.map((field, columnIndex) => {
              return (
                <td
                  key={`${field.id}-${rowIndex}-${columnIndex}`}
                  style={{
                    borderRight: '1px solid #EDEDED',
                    borderBottom: '1px solid #EDEDED',
                  }}
                  className="h-9 px-2"
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

const renderCell = (field: FakeContentItem) => {
  switch (field.id) {
    case 'single-line':
      return <TextCell text={field.data.text} />;
    case 'long-text':
      return <TextCell text={field.data.text} />;
    case 'attachment':
      return <AttachmentCell images={field.data.images} />;
    case 'checkbox':
      return <CheckBoxCell isCheck={field.data.checked} />;
    case 'multiple-select':
      return <SelectCell selects={field.data.selectValues} />;
    case 'single-select':
      return <SelectCell selects={[field.data.selectValue]} />;
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
        <TextCell
          className="w-full flex items-center justify-end"
          text={field.data.text}
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
      return <TextCell text={field.data.text} />;
    case 'rollup':
      return <TextCell text={field.data.text} />;
    case 'count':
      return (
        <TextCell
          className="w-full flex items-center justify-end"
          text={field.data.text}
        />
      );
    case 'lookup':
      return <TextCell text={field.data.text} />;
    case 'created-time':
      return (
        <DateCell
          date={field.data.date}
          time={field.data.time}
          gmt={field.data.gmt}
        />
      );
    case 'modified-time':
      return (
        <DateCell
          date={field.data.date}
          time={field.data.time}
          gmt={field.data.gmt}
        />
      );
    case 'created-by':
      return <UserCell user={field.data.user} />;
    case 'modified-by':
      return <UserCell user={field.data.user} />;
    case 'autonumber':
      return (
        <TextCell
          className="w-full flex items-center justify-end"
          text={field.data.number}
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
