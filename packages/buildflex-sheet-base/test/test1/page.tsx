'use client';

import React, { useState } from 'react';

const Table = () => {
  const [oldIndex, setOldIndex] = useState(-1);
  const [isDraging, setIsDraging] = useState(false);
  const [columns, setColumns] = useState([
    { id: 11, label: 'a' },
    { id: 22, label: 'b' },
    { id: 33, label: 'c' },
    { id: 44, label: 'd' },
    { id: 55, label: 'e' },
    { id: 66, label: 'f' },
    { id: 77, label: 'g' },
  ]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    e.dataTransfer.setData('index', String(index));
    e.target.style.background = '#0000002b';
    setIsDraging(true);
    setOldIndex(index);
  };

  const handleDragExit = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.target.style.background = '';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.target.style.background = '#0000002b';
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.target.style.background = '';
    setIsDraging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.target.style.background = '';
    const newColumns = [...columns];
    const column = newColumns.splice(oldIndex, 1)[0];
    newColumns.splice(index, 0, column);
    setColumns(newColumns);
    setOldIndex(-1);
  };

  return (
    <div>
      <div className="inline-block min-w-full">
        <div className="w-full">
          <div className="flex">
            {columns.map((column, index) => (
              <div key={column.id} className={'flex-1 relative flex'}>
                <div className="grow text-center">{column.label}</div>
                <div
                  className={
                    isDraging
                      ? 'h-screen w-full absolute top-0 left-0'
                      : 'h-full w-full opacity-0 absolute top-0 left-0'
                  }
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDragLeave={(e) => handleDragExit(e)}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnd={(e) => handleDragEnd(e)}
                ></div>
                <div className="w-[1px] h-full bg-black"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
