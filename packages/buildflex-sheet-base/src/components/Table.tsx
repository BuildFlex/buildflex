import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

// Define constants for item types
const ITEM_TYPES = {
  COLUMN: 'column',
  ROW: 'row',
};

// Define Column component
const Column = ({ id, name, handleDrag }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPES.COLUMN,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPES.COLUMN, // Chấp nhận thả cột vào vị trí mới
    drop: (item) => handleDrag(item.id, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <th
      ref={(node) => {
        drag(drop(node)); // Kết hợp cả kéo và thả cho cột
      }}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isOver ? 'yellow' : 'transparent',
        color: isDragging ? 'red' : 'black',
      }}
      onClick={() => handleDrag(id)}
      className="border border-slate-600"
    >
      {name}
    </th>
  );
};

// Define Row component
const Row = ({ id, cells, handleDrag }) => {
  // const [{ isOver }, drop] = useDrop({
  //   accept: ITEM_TYPES.COLUMN, // Chấp nhận cột
  //   drop: () => handleDrag(id),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // });

  return (
    <tr
    // ref={drop}
    // style={{ backgroundColor: isOver ? 'yellow' : 'transparent' }}
    >
      {cells.map((cell, index) => (
        <td className="border border-slate-600" key={index}>
          {cell}
        </td>
      ))}
    </tr>
  );
};

// Define Table component
const Table = () => {
  const [columns, setColumns] = useState([
    { id: 1, name: 'Column 1' },
    { id: 2, name: 'Column 2' },
    { id: 3, name: 'Column 3' },
  ]);
  const [rows, setRows] = useState([
    { id: 1, cells: ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'] },
    { id: 2, cells: ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'] },
    { id: 3, cells: ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3'] },
  ]);

  const handleColumnDrag = (draggedId, targetId) => {
    console.log('draggedId', draggedId);
    console.log('targetId', targetId);
    // Tính vị trí cột được kéo
    const draggedIndex = columns.findIndex((column) => column.id === draggedId);
    // Tính vị trí cột mục tiêu
    const targetIndex = columns.findIndex((column) => column.id === targetId);
    // Tạo một bản sao mới của mảng cột
    const newColumns = [...columns];
    // Di chuyển cột được kéo đến vị trí mục tiêu trong mảng
    newColumns.splice(targetIndex, 0, newColumns.splice(draggedIndex, 1)[0]);
    // Cập nhật state với mảng cột mới
    setColumns(newColumns);

    // cập nhật lại hàng
    const newRows = rows.map((row) => {
      const newRow = { ...row };
      newRow.cells.splice(
        targetIndex,
        0,
        newRow.cells.splice(draggedIndex, 1)[0]
      );
      return newRow;
    });
    setRows(newRows);
  };

  const handleRowDrag = (draggedId) => {
    console.log('draggedId', draggedId);
    // Tính vị trí hàng được kéo
    const draggedIndex = rows.findIndex((row) => row.id === draggedId);
    // Tạo một bản sao mới của mảng hàng
    const newRows = [...rows];
    // Di chuyển hàng được kéo đến vị trí đầu tiên trong mảng
    const [draggedRow] = newRows.splice(draggedIndex, 1);
    newRows.unshift(draggedRow);
    // Cập nhật state với mảng hàng mới
    setRows(newRows);
  };

  return (
    <table className="border-collapse">
      <thead>
        <tr>
          {columns.map((column) => (
            <Column
              key={column.id}
              id={column.id}
              name={column.name}
              handleDrag={handleColumnDrag}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <Row
            key={row.id}
            id={row.id}
            cells={row.cells}
            handleDrag={handleRowDrag}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
