'use client';

import styled from 'styled-components';
import Tab from '../components/Tab';

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
      <Tab />
    </StyledPage>
  );
}
