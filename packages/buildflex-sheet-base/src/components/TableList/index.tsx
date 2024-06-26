'use client';

import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsProps } from 'antd';

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-node-key': string;
}

interface Props {
  itemsTab: NonNullable<TabsProps['items']>;
  handleAdd: (tableName: string) => Promise<void>;
  handleRemove: (tableId: string) => Promise<void>;
  handleUpdateOrder: (
    tableId: string,
    oldIndex: number,
    newIndex: number
  ) => Promise<void>;
}

const DraggableTabNode = ({ className, ...props }: DraggableTabPaneProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props['data-node-key'],
    });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleX: 1 }),
    transition,
    cursor: 'move',
  };

  return React.cloneElement(props.children as React.ReactElement, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};

const TableList: React.FC<Props> = ({
  itemsTab,
  handleAdd,
  handleRemove,
  handleUpdateOrder,
}: Props) => {
  const [items, setItems] = useState<NonNullable<TabsProps['items']>>([]);
  const [activeKey, setActiveKey] = useState<string>('');

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const onDragEnd = async ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const activeIndex = items.findIndex((i) => i.key === active.id);
      const overIndex = items.findIndex((i) => i.key === over?.id);
      await handleUpdateOrder(active.id as string, activeIndex, overIndex);
    }
  };

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = async () => {
    const tableName = `table - ${items.length + 1} `;
    await handleAdd(tableName);
  };

  const remove = async (targetKey: string) => {
    await handleRemove(targetKey);
    if (activeKey === targetKey) {
      let index = items.findIndex((v) => v.key === targetKey);
      if (index === 0) {
        index++;
      } else {
        index--;
      }
      setActiveKey(items[index]?.key || '');
    }
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey as string);
    }
  };

  useEffect(() => {
    if (itemsTab.length > 0) {
      setItems(itemsTab);
      setActiveKey((old) => old || itemsTab[0].key);
    } else {
      setItems([]);
      setActiveKey('');
    }
  }, [itemsTab]);
  return (
    <Tabs
      type="editable-card"
      items={items}
      onEdit={onEdit}
      activeKey={activeKey}
      onChange={onChange}
      destroyInactiveTabPane
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
          <SortableContext
            items={items.map((i) => i.key)}
            strategy={horizontalListSortingStrategy}
          >
            <DefaultTabBar {...tabBarProps}>
              {(node) => (
                <DraggableTabNode {...node.props} key={node.key}>
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}
    />
  );
};

export default TableList;
