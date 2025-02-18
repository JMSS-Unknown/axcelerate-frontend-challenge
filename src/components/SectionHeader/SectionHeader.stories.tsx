import type { Meta, StoryObj } from '@storybook/react'

import SectionHeader from '.'

type Story = StoryObj<typeof SectionHeader>

const meta: Meta<typeof SectionHeader> = {
  component: SectionHeader,
}

export const Collapsed: Story = {
  args: {
    text: 'Absent',
    expanded: false,
  },
}

export const Expanded: Story = {
  args: {
    text: 'Absent',
    expanded: true,
  },
}

export default meta
