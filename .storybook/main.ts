import type { StorybookConfig } from "@storybook/vue3-vite";
const config: StorybookConfig = {
  stories: [],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  features: {
    buildStoriesJson: true, // 👈 Enable this to build the stories.json file
  },
  docs: {
    autodocs: "tag",
  }
};
export default config;
