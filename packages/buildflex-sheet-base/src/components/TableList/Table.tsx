'use client';

import React, { useEffect, useState } from 'react';
import { getDataTableApi } from '../../services/dataTable';
import { updateColumnApi } from '../../services/column';
import { IUpdateColumn } from '../../interfaces/column';

const initialColumns = [
  { id: '11', name: 'Name', width: 100 },
  { id: '22', name: 'Age', width: 100 },
  { id: '33', name: 'Address', width: 300 },
];

interface ITable {
  id: string;
}

const Table = ({ id }: ITable) => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState(Array.from({ length: 10 }, (_, i) => ({})));
  const [draggedColumn, setDraggedColumn] = useState(null);
  const [draggedOverColumn, setDraggedOverColumn] = useState(null);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    column: any
  ) => {
    setDraggedColumn(column);
  };

  const handleMouseUp = () => {
    if (!draggedColumn || !draggedOverColumn) return;

    const updatedColumns = [...columns];
    const draggedIndex = columns.findIndex(
      (col) => col.id === draggedColumn.id
    );
    const droppedIndex = columns.findIndex(
      (col) => col.id === draggedOverColumn.id
    );

    updatedColumns.splice(
      droppedIndex,
      0,
      updatedColumns.splice(draggedIndex, 1)[0]
    );

    setColumns(updatedColumns);
    setDraggedColumn(null);
    setDraggedOverColumn(null);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    column: any
  ) => {
    if (!draggedColumn) return;

    setDraggedOverColumn(column);
  };

  const [oldIndex, setOldIndex] = useState(-1);
  const [isDraging, setIsDraging] = useState(false);
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
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

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
    idColumn: string
  ) => {
    console.log(12312312);
    e.target.style.background = '';
    const newData = [...data];
    const item = newData.splice(oldIndex, 1)[0];
    newData.splice(index, 0, item);
    setData(newData);
    setOldIndex(-1);
  };

  const getDataTable = async (id: string) => {
    try {
      const res = await getDataTableApi(id);
      console.log(res.data.columns);
      setColumns(
        res.data.columns?.map((col: any) => ({ ...col, id: col.columnId }))
      );
    } catch (e) {
      console.error(e);
    }
  };

  // const updateColumn = async ({ idColumn, columns }: IUpdateColumn) => {
  //   try {
  //     const body = {};
  //
  //     const properties = ['name', 'type', 'order', 'width', 'description'];
  //
  //     properties.forEach((property) => {
  //       if (columns.hasOwnProperty(property)) {
  //         body[property] = columns[property];
  //       }
  //     });
  //
  //     console.log(body);
  //
  //     const res = await updateColumnApi(idColumn, body);
  //     console.log(res);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  useEffect(() => {
    getDataTable(id);
  }, [id]);

  const renderDataRow = (rowData: any, index: number) => {
    return (
      <div
        key={rowData.id}
        className="inline-flex border-b border-b-gray-300 relative pl-4"
      >
        <div
          className={'w-4 h-4 bg-red-500 cursor-move absolute top-0 left-0'}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e)}
          onDragLeave={(e) => handleDragExit(e)}
          onDrop={(e) => handleDrop(e, index, rowData.id)}
          onDragEnd={(e) => handleDragEnd(e)}
        ></div>
        {columns.map((col, index) => (
          <div
            key={col.id}
            className="flex relative"
            style={{ width: col.width + 'px' }}
          >
            <div className="grow text-center">{rowData[col.id]}</div>
            <div
              className="w-[1px] h-full bg-gray-300"
              style={{
                backgroundColor: draggedOverColumn === col ? '#ff0000' : '',
              }}
            ></div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseUp]);

  return (
    <div className="inline-flex flex-col ml-[16px]">
      <div className="inline-flex border-y border-y-gray-300">
        <div className="w-4"></div>
        {columns.map((col, index) => (
          <div
            key={col.id}
            className="flex cursor-move select-none relative"
            style={{ width: col.width + 'px' }}
          >
            <div className="grow text-center">{col.name}</div>
            <div
              style={{
                backgroundColor: draggedOverColumn === col ? '#00000066' : '',
              }}
              className={
                draggedColumn
                  ? 'absolute top-0 left-0 w-full h-screen z-10'
                  : 'absolute top-0 left-0 opacity-0 w-full h-full'
              }
              onMouseDown={(e) => handleMouseDown(e, col)}
              onMouseMove={(e) => handleMouseMove(e, col)}
            ></div>
            <div
              className="w-[1px] h-full bg-gray-300"
              style={{
                backgroundColor: draggedOverColumn === col ? '#ff0000' : '',
              }}
            ></div>
          </div>
        ))}
      </div>
      {data.map((r, index) => renderDataRow(r, index))}
    </div>
  );
};

export default Table;
