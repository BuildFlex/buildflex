'use client';

import { useEffect, useState } from 'react';
import Tab from '../components/Tab';
import { createTableApi, getTableApi } from '../services/table';
import { useDispatch } from 'react-redux';
import { setLoading } from '../store/themeConfigReducer';

export default function Index() {
  const dispatch = useDispatch();
  const [table, setTable] = useState([]);
  const getTable = async () => {
    try {
      dispatch(setLoading(true));
      const res = await getTableApi();
      console.log(res.data?.data);
      setTable(
        res.data?.data.map((item) => ({
          label: item.name,
          children: 'Content of Tab 1',
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
      console.log(res);
      return res.data.data.tableId;
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveTable = () => {};

  useEffect(() => {
    getTable();
  }, []);

  return (
    <>
      <Tab
        handleAdd={handleAddTable}
        handleRemove={handleRemoveTable}
        itemsTab={table}
      />
    </>
  );
}
