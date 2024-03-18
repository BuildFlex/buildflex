import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';

const _Button = () => <StyledButton>Click me</StyledButton>;
const StyledButton = styled(AntButton)`
  background-color: #4dabd1;
  &:hover {
    background-color: #e1e8ed;
  }
  color: white;
`;
export const Button = forwardRef(_Button);
