import React, { useState, useEffect, useRef, ReactElement } from 'react';

interface MenuItem {
  label: string;
  icon?: ReactElement;
  onClick: () => void;
  type?: 'item' | 'separator';
}

interface ContextMenuProps {
  items: MenuItem[];
  children: React.ReactNode;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ items, children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsVisible(true);
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      {isVisible && (
        <div
          ref={menuRef}
          className="absolute bg-white shadow-lg rounded-md py-2"
          style={{ top: position.y, left: position.x }}
        >
          {items.map((item, index) =>
            item.type === 'separator' ? (
              <hr key={`separator-${index}`} className="my-1 border-gray-200" />
            ) : (
              <button
                key={`${item.label}-${index}`}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => {
                  item.onClick();
                  setIsVisible(false);
                }}
              >
                {item.icon && (
                  <span className="mr-2 text-gray-600">{item.icon}</span>
                )}
                {item.label}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
