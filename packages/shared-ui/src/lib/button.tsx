import React, { forwardRef } from "react";
import styled from 'styled-components'
import { Button as AntButton } from 'antd';

const _Button =  () => (
    <StyledButton>Click me</StyledButton>
);
const StyledButton = styled(AntButton)`
  background-color: #4DABD1;
  &:hover {
    background-color: #E1E8ED;
  }
  color: white
`
export const Button = forwardRef(_Button);
