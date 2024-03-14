'use client';

import styled from 'styled-components';
import { Button } from '@shared-ui';
import MenuLeft from '../components/Menu';

const StyledPage = styled.div`
  .page {
  }
`;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Button />
      <MenuLeft />
    </StyledPage>
  );
}
