import remarkGfm from "remark-gfm";

export const framework = {
  name: "@storybook/react-vite",
  options: { fastRefresh: true },
};

export const core = {
  disableTelemetry: true,
};

export const stories = [
  "../src/stories/**/*.mdx",
  "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
];

export const docs = {
  defaultName: "Overview",
};

export const staticDirs = ["../public"];

export const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  {
    name: "@storybook/preset-create-react-app",
    options: {
      scriptsPackageName: "react-scripts",
    },
  },
  "@storybook/addon-a11y",
  "@storybook/addon-postcss",
];

export const typescript = {
  reactDocgen: "react-docgen-typescript",
  reactDocgenTypescriptOptions: {
    compilerOptions: {
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
    },
  },
};
