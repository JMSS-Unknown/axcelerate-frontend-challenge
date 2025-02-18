import type { Meta, StoryObj } from '@storybook/react'

import ContactListItem from 'components/ContactListItem'

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

export const EnabledWithoutEmail: Story = {
  args: {
    imageSrc: thumbnailAstract,
    name: 'Jane Doe',
    enabled: true,
  },
}

export const EnabledWithEmail: Story = {
  args: {
    imageSrc: thumbnailAstract,
    name: 'Jane Doe',
    email: 'jane@hotmail.com',
    enabled: true,
  },
}

export default meta
