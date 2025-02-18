import type { Meta, StoryObj } from '@storybook/react'

import ContactListItem from '.'

import thumbnailAstract from 'assets/images/thumbnail_abstract.png'

type Story = StoryObj<typeof ContactListItem>

const meta: Meta<typeof ContactListItem> = {
  component: ContactListItem,
}

export const WithoutEmail: Story = {
  args: {
    imageSrc: thumbnailAstract,
    name: 'Jane Doe',
  },
}

export const WithEmail: Story = {
  args: {
    imageSrc: thumbnailAstract,
    name: 'Jane Doe',
    email: 'jane@hotmail.com',
  },
}

export default meta
