import React, { useState } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { useTheme } from '@themes/ThemeProvider';

interface InputComponentProps {
  initialValue?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  warning?: boolean;
}

const StyledInput = styled(Input)<{
  isFocused: boolean;
  isHovered: boolean;
  isFilled: boolean;
  disabled: boolean;
  error: boolean;
  success: boolean;
  warning: boolean;
  theme: any;
}>`
  border-color: ${({
    isFocused,
    isHovered,
    isFilled,
    disabled,
    error,
    success,
    warning,
    theme,
  }) => {
    if (disabled) return theme.secondary;
    if (error) return 'red';
    if (success) return 'green';
    if (warning) return 'orange';
    if (isFocused) return theme.primary;
    if (isHovered) return 'blue';
    if (isFilled) return 'purple';
    return theme.secondary;
  }};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.secondary : 'white'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
`;

const InputComponent: React.FC<InputComponentProps> = ({
  initialValue = '',
  disabled = false,
  error = false,
  success = false,
  warning = false,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <StyledInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isFocused={isFocused}
      isHovered={isHovered}
      isFilled={value !== ''}
      disabled={disabled}
      error={error}
      success={success}
      warning={warning}
      theme={theme}
    />
  );
};

export { InputComponent, InputComponentProps };
