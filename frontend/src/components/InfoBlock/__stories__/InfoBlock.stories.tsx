import type { Meta, StoryObj } from "@storybook/react";
import { InfoBlock } from "../InfoBlock";

const meta = {
  title: "Components/InfoBlock",
  component: InfoBlock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InfoBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 1,
    title: "Create test account",
    description:
      "Receive 1000 free tokens in your account for testing purposes",
  },
};

export const Step2: Story = {
  args: {
    number: 2,
    title: "Connect your wallet",
    description:
      "Use Phantom, Solflare, or any Solana compatible wallet to test the demo",
  },
};

export const Step3: Story = {
  args: {
    number: 3,
    title: "Transfer tokens confidentially",
    description:
      "Experience end-to-end encrypted transfers with zero knowledge proofs",
  },
};

export const InContainer: Story = {
  args: {
    number: 1,
    title: "Create test account",
    description:
      "Receive 1000 free tokens in your account for testing purposes",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", maxWidth: "100%" }}>
        <Story />
      </div>
    ),
  ],
};
