import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './my-button';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MyButton> = {
  component: MyButton,
  title: 'MyButton',
};
export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary = {
  args: {
    text: '',
    padding: 0,
    disabled: false,
  },
};

export const Heading: Story = {
  args: {
    text: '',
    padding: 0,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MyButton!/gi)).toBeTruthy();
  },
};
