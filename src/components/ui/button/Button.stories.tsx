import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";
import { mockButtonProps } from "./Button.mocks";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...mockButtonProps.base },
};
