import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  TextalignJustifycenter,
  DocumentText,
  TickSquare,
  Task,
  ArrowCircleDown,
  User,
  Calendar,
  Call,
  Sms,
  Link,
  Hashtag,
  DollarCircle,
  PercentageCircle,
  Clock,
  Star,
  Chart,
  Math,
  SearchStatus,
  CalendarTick,
  UserTick,
  Barcode,
} from 'iconsax-react';

interface Field {
  icon: JSX.Element;
  label: string;
  isChecked: boolean;
}

const initFields: Field[] = [
  {
    icon: <Text size={16} color="#101828" />,
    label: 'Single line text',
    isChecked: true,
  },
  {
    icon: <TextalignJustifycenter size={16} color="#101828" />,
    label: 'Long text',
    isChecked: true,
  },
  {
    icon: <DocumentText size={16} color="#101828" />,
    label: 'Attachment',
    isChecked: true,
  },
  {
    icon: <TickSquare size={16} color="#101828" />,
    label: 'Checkbox',
    isChecked: true,
  },
  {
    icon: <Task size={16} color="#101828" />,
    label: 'Multiple select',
    isChecked: true,
  },
  {
    icon: <ArrowCircleDown size={16} color="#101828" />,
    label: 'Single select',
    isChecked: true,
  },
  { icon: <User size={16} color="#101828" />, label: 'User', isChecked: true },
  {
    icon: <Calendar size={16} color="#101828" />,
    label: 'Date',
    isChecked: true,
  },
  {
    icon: <Call size={16} color="#101828" />,
    label: 'Phone number',
    isChecked: true,
  },
  { icon: <Sms size={16} color="#101828" />, label: 'Email', isChecked: true },
  { icon: <Link size={16} color="#101828" />, label: 'URL', isChecked: true },
  {
    icon: <Hashtag size={16} color="#101828" />,
    label: 'Number',
    isChecked: true,
  },
  {
    icon: <DollarCircle size={16} color="#101828" />,
    label: 'Currency',
    isChecked: true,
  },
  {
    icon: <PercentageCircle size={16} color="#101828" />,
    label: 'Percent',
    isChecked: true,
  },
  {
    icon: <Clock size={16} color="#101828" />,
    label: 'Duration',
    isChecked: true,
  },
  {
    icon: <Star size={16} color="#101828" />,
    label: 'Rating',
    isChecked: true,
  },
  {
    icon: <Math size={16} color="#101828" />,
    label: 'Formula',
    isChecked: true,
  },
  {
    icon: <Chart size={16} color="#101828" />,
    label: 'Barcode',
    isChecked: true,
  },
  {
    icon: <Math size={16} color="#101828" />,
    label: 'Button',
    isChecked: true,
  },
  {
    icon: <SearchStatus size={16} color="#101828" />,
    label: 'Lookup',
    isChecked: true,
  },
  {
    icon: <CalendarTick size={16} color="#101828" />,
    label: 'Created time',
    isChecked: true,
  },
  {
    icon: <CalendarTick size={16} color="#101828" />,
    label: 'Last modified time',
    isChecked: true,
  },
  {
    icon: <UserTick size={16} color="#101828" />,
    label: 'Created by',
    isChecked: true,
  },
  {
    icon: <UserTick size={16} color="#101828" />,
    label: 'Last modified by',
    isChecked: true,
  },
  {
    icon: <Hashtag size={16} color="#101828" />,
    label: 'Autonumber',
    isChecked: true,
  },
  {
    icon: <Barcode size={16} color="#101828" />,
    label: 'Barcode',
    isChecked: true,
  },
  {
    icon: <Hashtag size={16} color="#101828" />,
    label: 'Button',
    isChecked: true,
  },
];

const FindAField: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [fields, setFields] = useState<Field[]>(initFields);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const filteredFields = fields.filter((field) =>
    field.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleToggle = (index: number) => {
    const updatedFields = [...fields];
    updatedFields[index].isChecked = !updatedFields[index].isChecked;
    setFields(updatedFields);
  };

  return (
    <div className={'relative'}>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Popup
      </button>
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute w-[24rem] bg-white rounded-md shadow-lg animate-slide-down"
        >
          <div className="p-4">
            <input
              type="text"
              placeholder="Find a field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 box-border border-none text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
            />
            <ul className="p-0">
              {filteredFields.map((field, index) => (
                <li
                  key={`${field.label}-${index}`}
                  className="flex items-center px-2 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {field.icon}
                  <span className="ml-2">{field.label}</span>
                  <label className="ml-auto inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={field.isChecked}
                      onChange={() => handleToggle(index)}
                    />
                    <span
                      className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                        field.isChecked ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-0 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
                          field.isChecked ? 'translate-x-5' : ''
                        }`}
                      ></span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindAField;
