import './style.css';
import { RefObject, useRef, useState } from 'react';

const rows = [
  {
    id: 1,
    cells: ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3', 'Row 1, Cell 4'],
  },
  {
    id: 2,
    cells: ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3', 'Row 2, Cell 4'],
  },
  {
    id: 3,
    cells: ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3', 'Row 3, Cell 4'],
  },
];

const columns = [
  { id: 1, name: 'Column 1' },
  { id: 2, name: 'Column 2' },
  { id: 3, name: 'Column 3' },
  { id: 4, name: 'Column 4' },
];

interface ColumnPropsType {
  columns: { id: number; name: string }[];
  onMouseDown: (event: any) => void;
  onMouseMove?: (event: any) => void;
  onMouseUp: () => void;
}

interface RowPropsType {
  row: { id: number; cells: string[] };
  onMouseDown: (event: any) => void;
  onMouseMove?: (event: any) => void;
  onMouseUp: () => void;
}

const Row = ({ row, onMouseDown, onMouseMove, onMouseUp }: RowPropsType) => {
  return (
    <tr key={row.id}>
      {row.cells.map((value) => {
        return (
          <td
            className="th_cell"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            key={value}
          >
            <div className="resize_col"></div>
            {value}
          </td>
        );
      })}
    </tr>
  );
};

const Column = ({
  columns,
  onMouseDown,
  onMouseMove,
  onMouseUp,
}: ColumnPropsType) => {
  return columns.map(({ name, id }, index) => {
    return (
      <th
        className="th_cell"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        key={id}
        data-islastcol={index === columns.length - 1 ? 'last col' : ''}
      >
        <div className="resize_col"></div>
        {name}
      </th>
    );
  });
};

export const Table = (props: any) => {
  const tblRef = useRef(null) as unknown as RefObject<HTMLTableElement>;
  const ctnRef = useRef(null) as unknown as RefObject<HTMLDivElement>;

  const [isDragging, setIsDragging] = useState(false);
  const [resizeEl, setResizeEl] = useState(
    {} as {
      currEl: HTMLElement;
      currWidth: number;
    }
  );
  const [mousePosX, setMousePosX] = useState(0);

  const mouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const mouseMove = (event: any) => {
    const cursorPosition = event.pageX;
    if (mousePosX && resizeEl.currEl && isDragging) {
      const addedWidth = cursorPosition - mousePosX;
      resizeEl.currEl.style.width = `${resizeEl.currWidth + addedWidth}px`;
    }
  };

  const mouseDown = (event: any) => {
    console.log("mouse downnnnn")
    const cursorPosition = event.pageX;
    const target = event.target;
    const headerCell = target.parentElement;

    setIsDragging(true);
    setMousePosX(cursorPosition);
    setResizeEl({
      currWidth: Number(headerCell.clientWidth),
      currEl: headerCell,
    });
  };


  return (
    <div className="container" id="container" ref={ctnRef} onMouseMove={mouseMove}>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        id="table_resize"
        ref={tblRef}
      >
        <thead>
          <tr>
            <Column
              columns={columns}
              onMouseDown={mouseDown}
              onMouseUp={mouseUp}
            />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <Row
              row={row}
              onMouseDown={mouseDown}
              onMouseUp={mouseUp}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
