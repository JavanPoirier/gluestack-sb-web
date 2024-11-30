import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "./stories/**/*.mdx",
    "./stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          '@gluestack-ui/button',
          '@gluestack-ui/overlay',
          '@gluestack-ui/toast',
          '@gluestack-ui/utils',
          '@gluestack-ui/nativewind-utils',
          'react-native-reanimated',
          'react-native-css-interop',
          'nativewind',
        ],
      }
    }
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
