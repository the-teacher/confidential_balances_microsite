import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // Import Tailwind CSS

const customViewports = {
  mobile: {
    name: "Mobile (iPhone)",
    styles: {
      width: "390px",
      height: "724px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "840px",
      height: "100%",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1200px",
      height: "100%",
    },
  },
  largeDesktop: {
    name: "Large Desktop",
    styles: {
      width: "1440px",
      height: "100%",
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
