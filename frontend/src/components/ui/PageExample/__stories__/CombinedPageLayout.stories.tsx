import type { Meta, StoryObj } from "@storybook/react";
import HolyGrailLayoutWithParams from "../../HolyGrailLayout/HolyGrailLayoutWithParams";
import { AppHeader } from "../../../AppHeader/AppHeader";
import React from "react";

import "./stories.scss";
import "../../../ui/themes/dark/styles.scss";
import "../../../ui/atoms/app-button.scss";
import "../../../ui/atoms/flex.scss";
import "../../../AppHeader/app-header.scss";
import "../../../ui/atoms/text-defaults.scss";

// Content components
const SimpleContent = () => (
  <div className="page-example--content">
    <h2>Confidential balances demo</h2>
    <p>
      Transfer tokens confidentially on Solana. An end-to-end demonstration of
      encrypted token transfers using Solana's Confidential Transfer extension
    </p>
    <p>
      Your encryption keys (ElGamal & AES) are generated securely from your
      wallet signature and used only during your session.They are never stored,
      logged, or shared — and are discarded immediately after use.
    </p>

    <div className="flex gap16 flex--vcenter">
      <h1 className="p-0 m-0">Wallet 1</h1>
      <p className="text-mono p-0 m-0">No wallet connected</p>
    </div>
  </div>
);

const LeftSidebar = () => (
  <div className="page-example--sidebar">
    <h3 className="page-example--text">Navigation</h3>
    <ul className="page-example--nav">
      <li>Home</li>
      <li>Transactions</li>
      <li>Tokens</li>
      <li>Settings</li>
    </ul>
  </div>
);

const MainContent = () => (
  <div className="page-example--content">
    <h2 className="page-example--text">Confidential Balances</h2>
    <p className="page-example--text">
      Demonstration of confidential balances service
    </p>
    <div className="page-example--card">
      <h3>Wallet Balance</h3>
      <p>SOL: 25.34</p>
      <p>USDC: 100.00</p>
    </div>
  </div>
);

const RightSidebar = () => (
  <div className="page-example--sidebar">
    <h3 className="page-example--text">Activity</h3>
    <div className="page-example--activity">
      <p>Recent Transactions</p>
      <ul>
        <li>SOL Sent</li>
        <li>USDC Received</li>
        <li>Token Swap</li>
      </ul>
    </div>
  </div>
);

const PageFooter = () => (
  <p className="page-example--text">© 2023 Solana Confidential Balances Demo</p>
);

const meta: Meta<typeof HolyGrailLayoutWithParams> = {
  title: "Examples/CombinedPageLayout",
  component: HolyGrailLayoutWithParams,
  parameters: {
    layout: "fullscreen",
    docs: { disable: true },
  },
};

export default meta;
type Story = StoryObj<typeof HolyGrailLayoutWithParams>;

// Basic page example with AppHeader as header
export const DefaultPage: Story = {
  render: () => (
    <HolyGrailLayoutWithParams
      layoutRoot="#storybook-root"
      header={<AppHeader />}
      content={<SimpleContent />}
      footer={<PageFooter />}
    />
  ),
};

// Example with sidebars
export const PageWithSidebars: Story = {
  render: () => (
    <HolyGrailLayoutWithParams
      layoutRoot="#storybook-root"
      header={<AppHeader />}
      leftSidebar={<LeftSidebar />}
      content={<MainContent />}
      rightSidebar={<RightSidebar />}
      footer={<PageFooter />}
    />
  ),
};
