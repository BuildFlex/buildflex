import React, { useState } from 'react';
import {
  ArrowDown2,
  ArrowRight2,
  Add,
  More,
  Grid1,
  DocumentText,
  Clock,
  Document,
} from 'iconsax-react';

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
      className="flex items-center justify-between p-2 hover:bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <Icon size={20} className="mr-2 text-gray-500" />
        <span className="text-sm">{item.title}</span>
      </div>
      {isHovered && <More size={20} className="text-gray-500 cursor-pointer" />}
    </div>
  );
};

const SectionComponent: React.FC<{
  section: Section;
  onToggle: () => void;
}> = ({ section, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-2">
      <div
        className="flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 cursor-pointer"
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center">
          {section.isOpen ? (
            <ArrowDown2 size={20} className="mr-2" />
          ) : (
            <ArrowRight2 size={20} className="mr-2" />
          )}
          <span className="font-medium">{section.title}</span>
        </div>
        {isHovered && (
          <div className="flex items-center">
            <Add size={20} className="mr-2 text-gray-500 cursor-pointer" />
            <More size={20} className="text-gray-500 cursor-pointer" />
          </div>
        )}
      </div>
      {section.isOpen && (
        <div className="pl-6">
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
    <div className="w-60 mt-2 p-3 bg-white overflow-hidden">
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
