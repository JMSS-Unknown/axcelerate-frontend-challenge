import type { Preview } from '@storybook/react'

import '../src/assets/css/colours.css'
import '../src/assets/css/styles.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'Dark', value: '#444444' },
        { name: 'Light', value: '#F7F9F2' },
      ],
      default: 'Dark',
    },
  },
  tags: ['autodocs'],
}

export default preview
