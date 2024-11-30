import type { Preview } from "@storybook/react";
import { GluestackUIProvider } from '../components/ui/gluestack-ui-provider'

import '../global.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <GluestackUIProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </GluestackUIProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
