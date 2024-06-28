import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { InputComponent, InputComponentProps } from './Input';

const meta: Meta<typeof InputComponent> = {
  title: 'Components/InputComponent',
  component: InputComponent,
  argTypes: {
    initialValue: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    warning: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof InputComponent>;

export const Default: Story = {
  args: {
    initialValue: '',
    disabled: false,
    error: false,
    success: false,
    warning: false,
  },
};

export const Disabled: Story = {
  args: {
    initialValue: 'Disabled Input',
    disabled: true,
    error: false,
    success: false,
    warning: false,
  },
};

export const Error: Story = {
  args: {
    initialValue: 'Error Input',
    disabled: false,
    error: true,
    success: false,
    warning: false,
  },
};

export const Success: Story = {
  args: {
    initialValue: 'Success Input',
    disabled: false,
    error: false,
    success: true,
    warning: false,
  },
};

export const Warning: Story = {
  args: {
    initialValue: 'Warning Input',
    disabled: false,
    error: false,
    success: false,
    warning: true,
  },
};
