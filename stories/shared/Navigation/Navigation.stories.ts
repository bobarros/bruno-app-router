import type { Meta, StoryObj } from "@storybook/react";

import Navigation from ".";

const meta: Meta<typeof Navigation> = {
  title: "Shared/Navigation",
  component: Navigation,
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
