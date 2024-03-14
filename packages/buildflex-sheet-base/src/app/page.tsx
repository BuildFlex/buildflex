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
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <div>aaaaaa</div>
    </StyledPage>
  );
}
