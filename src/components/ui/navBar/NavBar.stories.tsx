import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NavBar from "./NavBar";
import { mockNavBarProps } from "./NavBar.mocks";

const meta = {
  component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...mockNavBarProps.base },
};
