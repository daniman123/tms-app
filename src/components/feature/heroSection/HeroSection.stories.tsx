import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeroSection from "./HeroSection";
import { mockHeroSectionProps } from "./HeroSection.mocks";

const meta = {
  component: HeroSection,
  parameters: { layout: "centered" },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...mockHeroSectionProps.base },
};
