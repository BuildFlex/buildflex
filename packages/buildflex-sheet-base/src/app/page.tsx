'use client';

import React, { useEffect, useMemo, useState } from 'react';
import TableList from '../components/TableList';
import {
  createTableApi,
  deleteTableApi,
  getTableApi,
  updateTableApi,
} from '../services/table';
import { useDispatch } from 'react-redux';
import { setLoading } from '../store/themeConfigReducer';
import TabLabel from '../components/TableList/TabLabel';
import Table from '../components/TableList/Table';
import { Table as TableInterface } from '../interfaces/table';
import { sortByOrder } from '../ultils/sortByOrder';
import { arrayMove } from '@dnd-kit/sortable';

export default function Index() {
  const dispatch = useDispatch();
  const [table, setTable] = useState<TableInterface[]>([]);
  const updateTable = async (
    tableId: string,
    data: { name: string; order: number }
  ) => {
    try {
      await updateTableApi(tableId, data);
      setTable((oldData) =>
        sortByOrder(
          oldData.map((table) => ({
            ...table,
            name: table.tableId === tableId ? data.name : table.name,
            order: table.tableId === tableId ? data.order : table.order,
          }))
        )
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateOrderTable = async (
    tableId: string,
    oldIndex: number,
    newIndex: number
  ) => {
    await updateTableApi(tableId, {
      order: newIndex,
      name: table[oldIndex].name,
    });
    setTable((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  const getTable = async () => {
    try {
      dispatch(setLoading(true));
      const res = await getTableApi();
      setTable(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleAddTable = async (tableName: string) => {
    try {
      const body = {
        name: tableName,
        order: table.length,
      };
      const res = await createTableApi(body);
      setTable([...table, res.data]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveTable = async (tableId: string) => {
    try {
      await deleteTableApi(tableId);
      setTable((oldData) => oldData.filter((item) => item.tableId !== tableId));
    } catch (e) {
      console.error(e);
    }
  };

  const parseTableToTab = useMemo(
    () =>
      table.map((item: TableInterface) => ({
        label: <TabLabel tableInfo={item} handleChangeName={updateTable} />,
        children: <Table id={item.tableId} />,
        key: item.tableId,
      })) || [],
    [table]
  );

  useEffect(() => {
    getTable();
  }, []);

  return (
    <>
      <TableList
        handleAdd={handleAddTable}
        handleRemove={handleRemoveTable}
        handleUpdateOrder={handleUpdateOrderTable}
        itemsTab={parseTableToTab}
      />
    </>
  );
}
