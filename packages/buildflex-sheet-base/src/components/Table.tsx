import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const initialData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const Table = () => {
  const [data, setData] = useState(initialData);

  const moveItem = (dragIndex, hoverIndex) => {
    const dragItem = data[dragIndex];
    const newData = [...data];
    newData.splice(dragIndex, 1);
    newData.splice(hoverIndex, 0, dragItem);
    setData(newData);
  };

  return (
    <div>
      <h1>Draggable Table</h1>
      <DragDropContext backend={HTML5Backend}>
        <Droppable droppableId="table">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={String(item.id)}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '8px',
                        margin: '4px',
                        backgroundColor: 'white',
                        ...provided.draggableProps.style,
                      }}
                    >
                      {item.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Table;
