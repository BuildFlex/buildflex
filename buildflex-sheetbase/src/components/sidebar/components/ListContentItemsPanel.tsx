import React, { useState } from 'react';
import { Add, Grid1, DocumentText, Clock, Document } from 'iconsax-react';
import {
  CaretDownFilled,
  CaretRightFilled,
  MoreOutlined,
} from '@ant-design/icons';

type ContentType = 'table' | 'dashboard' | 'form' | 'document';

interface ContentItem {
  id: string;
  type: ContentType;
  title: string;
}

interface Section {
  id: string;
  title: string;
  items: ContentItem[];
  isOpen: boolean;
}

const iconMap: Record<ContentType, React.ElementType> = {
  table: Grid1,
  dashboard: Clock,
  form: DocumentText,
  document: Document,
};

const ContentItemComponent: React.FC<{ item: ContentItem }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[item.type];

  return (
    <div
      className="flex items-center justify-between px-6 py-2 hover:bg-primary-100 cursor-pointer relative rounded-sm my-1 text-neutral-dark-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <Icon size={16} className="mr-2 text-gray-500" />
        <span className="text-sm font-normal font-lato">{item.title}</span>
      </div>
      {isHovered && (
        <span className="text-gray-500 cursor-pointer absolute right-2">
          {' '}
          <MoreOutlined
            style={{ fontSize: '1.6rem', fontWeight: 600 }}
            rotate={180}
          />
        </span>
      )}
    </div>
  );
};

const SectionComponent: React.FC<{
  section: Section;
  onToggle: () => void;
}> = ({ section, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-[0.4rem]">
      <div
        className="flex items-center justify-between p-2 bg-gray-50 rounded-sm hover:bg-gray-100 cursor-pointer"
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center">
          {section.isOpen ? (
            <CaretDownFilled size={16} className="mr-2" />
          ) : (
            <CaretRightFilled size={16} className="mr-2" />
          )}
          <span className="font-medium">{section.title}</span>
        </div>
        {isHovered && (
          <div className="flex items-center">
            <Add size={16} className="mr-2 text-gray-500 cursor-pointer" />
            <span className="text-gray-500 cursor-pointer">
              {' '}
              <MoreOutlined
                style={{ fontSize: '1.6rem', fontWeight: 600 }}
                rotate={180}
              />
            </span>
          </div>
        )}
      </div>
      {section.isOpen && (
        <div>
          {section.items.map((item) => (
            <ContentItemComponent key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const ListContentItemsPanel: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: '1',
      title: 'Project management',
      isOpen: true,
      items: [
        { id: '1-1', type: 'table', title: 'Admin management' },
        { id: '1-2', type: 'table', title: 'Client management' },
        { id: '1-3', type: 'table', title: 'Product tracking' },
      ],
    },
    {
      id: '2',
      title: 'Sale management',
      isOpen: true,
      items: [
        { id: '2-1', type: 'table', title: 'Quotations' },
        { id: '2-2', type: 'document', title: 'Sale process v.1' },
        { id: '2-3', type: 'document', title: 'Sale process v.2' },
      ],
    },
    {
      id: '3',
      title: 'Section 1',
      isOpen: false,
      items: [],
    },
  ]);

  const toggleSection = (id: string) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, isOpen: !section.isOpen } : section,
      ),
    );
  };

  return (
    <div className="bg-white">
      {sections.map((section) => (
        <SectionComponent
          key={section.id}
          section={section}
          onToggle={() => toggleSection(section.id)}
        />
      ))}
    </div>
  );
};

export default ListContentItemsPanel;
