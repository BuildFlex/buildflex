'use client';

import styled from 'styled-components';
import Tab from '../components/Tab';
import { useEffect } from 'react';
import { createTableApi, getTableApi } from '../services/table';
import { useDispatch } from 'react-redux';
import { setLoading } from '../store/themeConfigReducer';

const StyledPage = styled.div`
  .page {
    flex: 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default function Index() {
  const dispatch = useDispatch();
  const getTable = async () => {
    try {
      dispatch(setLoading(true));
      const res = await getTableApi();
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddTable = async () => {
    try {
      dispatch(setLoading(true));
      const res = await createTableApi();
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveTable = () => {};

  useEffect(() => {
    getTable();
  }, []);

  return (
    <StyledPage>
      <Tab handleAdd={handleAddTable} handleRemove={handleRemoveTable} />
    </StyledPage>
  );
}
