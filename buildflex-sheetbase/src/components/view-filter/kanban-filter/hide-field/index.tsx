import { Eye, More } from 'iconsax-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface Field {
  id: string;
  icon: React.ElementType;
  label: string;
}

const fields: Field[] = [
  { id: 'single-line', icon: Eye, label: 'Single line text' },
  { id: 'long-text', icon: Eye, label: 'Long text' },
  { id: 'attachment', icon: Eye, label: 'Attachment' },
  { id: 'checkbox', icon: Eye, label: 'Checkbox' },
  { id: 'multiple-select', icon: Eye, label: 'Multiple select' },
  { id: 'single-select', icon: Eye, label: 'Single select' },
  { id: 'user', icon: Eye, label: 'User' },
  { id: 'date', icon: Eye, label: 'Date' },
  { id: 'phone', icon: Eye, label: 'Phone number' },
  { id: 'email', icon: Eye, label: 'Email' },
  { id: 'url', icon: Eye, label: 'URL' },
  { id: 'number', icon: Eye, label: 'Number' },
  { id: 'currency', icon: Eye, label: 'Currency' },
  { id: 'percent', icon: Eye, label: 'Percent' },
  { id: 'duration', icon: Eye, label: 'Duration' },
  { id: 'rating', icon: Eye, label: 'Rating' },
  { id: 'formula', icon: Eye, label: 'Formula' },
  { id: 'rollup', icon: Eye, label: 'Rollup' },
  { id: 'count', icon: Eye, label: 'Count' },
  { id: 'lookup', icon: Eye, label: 'Lookup' },
  { id: 'created-time', icon: Eye, label: 'Created time' },
  { id: 'modified-time', icon: Eye, label: 'Last modified time' },
  { id: 'created-by', icon: Eye, label: 'Created by' },
  { id: 'modified-by', icon: Eye, label: 'Last modified by' },
  { id: 'autonumber', icon: Eye, label: 'Autonumber' },
  { id: 'barcode', icon: Eye, label: 'Barcode' },
  { id: 'button', icon: Eye, label: 'Button' },
];

const HideFieldsPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [visibleFields, setVisibleFields] = useState<Set<string>>(
    new Set(fields.map((f) => f.id)),
  );
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // const toggleField = (id: string) => {
  //   setVisibleFields((prev) => {
  //     const newSet = new Set(prev);
  //     if (newSet.has(id)) {
  //       newSet.delete(id);
  //     } else {
  //       newSet.add(id);
  //     }
  //     return newSet;
  //   });
  // };
  const hideAll = useCallback(() => setVisibleFields(new Set()), []);

  const showAll = useCallback(() => {
    setVisibleFields(new Set(fields.map((f) => f.id)));
  }, []);

  const handleFilterClickWrapper = useCallback(
    (fieldId: string) => () => {
      setVisibleFields((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(fieldId)) {
          newSet.delete(fieldId);
        } else {
          newSet.add(fieldId);
        }
        return newSet;
      });
    },
    [],
  );

  return (
    <div
      ref={popupRef}
      className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md overflow-hidden z-10"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Find a view"
            className="w-full px-3 py-2 border rounded-md"
          />
          <div className="ml-2 text-gray-400">?</div>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {fields.map((field) => (
            <div
              key={field.id}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center">
                <label
                  className="inline-flex items-center cursor-pointer"
                  htmlFor={`${field.id}-checkbox`}
                >
                  <input
                    id={`${field.id}-checkbox`}
                    type="checkbox"
                    className="hidden"
                    checked={visibleFields.has(field.id)}
                    onChange={handleFilterClickWrapper(field.id)}
                  />
                  <div
                    className={`w-10 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${visibleFields.has(field.id) ? 'bg-blue-500' : 'bg-gray-300'}`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${visibleFields.has(field.id) ? 'translate-x-4' : 'translate-x-0'}`}
                    />
                  </div>
                </label>
                <field.icon size={20} className="ml-3 mr-2 text-gray-500" />
                <span>{field.label}</span>
              </div>
              <More size={20} className="text-gray-400 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between p-4 bg-gray-50">
        <button
          className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded"
          onClick={hideAll}
        >
          Hide all
        </button>
        <button
          className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded"
          onClick={showAll}
        >
          Show all
        </button>
      </div>
    </div>
  );
};

export default HideFieldsPopup;
