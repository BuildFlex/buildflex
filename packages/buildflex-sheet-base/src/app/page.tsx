'use client';

import React, { useEffect, useState } from 'react';
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
import { TabsProps } from 'antd';

export default function Index() {
  const dispatch = useDispatch();
  const [table, setTable] = useState<NonNullable<TabsProps['items']>>([]);
  const handleChangeTableName = async (tableId: string, tableName: string) => {
    try {
      dispatch(setLoading(true));
      await updateTableApi(tableId, tableName);
      setTable((oldData) =>
        oldData?.map((table) => ({
          ...table,
          label:
            table.key === tableId ? (
              <TabLabel
                tableInfo={{
                  name: tableName,
                  tableId,
                }}
                handleChangeName={handleChangeTableName}
              />
            ) : (
              table.label
            ),
        }))
      );
    } catch (e) {
      console.error(e);
    }
  };

  const getTable = async () => {
    try {
      dispatch(setLoading(true));
      const res = await getTableApi();
      setTable(
        res.data?.map((item: { name: any; tableId: any }) => ({
          label: (
            <TabLabel
              tableInfo={item}
              handleChangeName={handleChangeTableName}
            />
          ),
          children: item.tableId,
          key: item.tableId,
        }))
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddTable = async (tableName: string) => {
    try {
      dispatch(setLoading(true));
      const res = await createTableApi(tableName);
      const tableId = res.data.tableId as string;
      const newList = [...table];
      newList.push({
        label: (
          <TabLabel
            tableInfo={{
              tableId,
              name: tableName,
            }}
            handleChangeName={handleChangeTableName}
          />
        ),
        children: tableId,
        key: tableId,
      });
      setTable(newList);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveTable = async (tableId: string) => {
    try {
      dispatch(setLoading(true));
      await deleteTableApi(tableId);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getTable();
  }, []);

  return (
    <>
      <TableList
        handleAdd={handleAddTable}
        handleRemove={handleRemoveTable}
        itemsTab={table}
      />
    </>
  );
}
