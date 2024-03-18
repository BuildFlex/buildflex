'use client';

import styled from 'styled-components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
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
      <DndProvider backend={HTML5Backend}>
        <Table />
      </DndProvider>
    </StyledPage>
  );
}
