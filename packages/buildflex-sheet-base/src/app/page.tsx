'use client';

import styled from 'styled-components';
import { Button } from '@shared-ui';
import MenuLeft from '../components/Menu';
import Table from '../components/Table';

const StyledPage = styled.div`
  .page {
    flex: 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default function Index() {
  return (
    <StyledPage>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button />
      <MenuLeft />
      <Table />
    </StyledPage>
  );
}
