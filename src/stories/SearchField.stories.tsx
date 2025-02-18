import type { Meta, StoryObj } from '@storybook/react'

import SearchField from 'components/SearchField'

type Story = StoryObj<typeof SearchField>

const meta: Meta<typeof SearchField> = {
  component: SearchField,
}

export const Placeholder: Story = {
  args: {
    placeholder: 'Search',
    text: '',
    setText() {},
  },
}

export const WithText: Story = {
  args: {
    text: 'Jane',
    setText() {},
  },
}

export default meta
