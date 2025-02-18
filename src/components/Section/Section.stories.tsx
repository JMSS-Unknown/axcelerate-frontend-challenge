import type { Meta, StoryObj } from '@storybook/react'

import Section from '.'

import thumbnailAbstract from 'assets/images/thumbnail_abstract.png'

type Story = StoryObj<typeof Section>

const meta: Meta<typeof Section> = {
  component: Section,
}

export const WithoutEmail: Story = {
  args: {
    contacts: [
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
    ],
  },
}

export const WithEmail: Story = {
  args: {
    contacts: [
      {
        imageSrc: thumbnailAbstract,
        name: 'Jane Doe',
        email: 'jane@hotmail.com',
      },
      {
        imageSrc: thumbnailAbstract,
        name: 'Jane Doe',
        email: 'jane@hotmail.com',
      },
      {
        imageSrc: thumbnailAbstract,
        name: 'Jane Doe',
        email: 'jane@hotmail.com',
      },
      {
        imageSrc: thumbnailAbstract,
        name: 'Jane Doe',
        email: 'jane@hotmail.com',
      },
      {
        imageSrc: thumbnailAbstract,
        name: 'Jane Doe',
        email: 'jane@hotmail.com',
      },
      {
        imageSrc: thumbnailAbstract,
        name: 'Jane Doe',
        email: 'jane@hotmail.com',
      },
      {
        imageSrc: thumbnailAbstract,
        name: 'Jane Doe',
        email: 'jane@hotmail.com',
      },
      {
        imageSrc: thumbnailAbstract,
        name: 'Jane Doe',
        email: 'jane@hotmail.com',
      },
    ],
  },
}

export const WithHeader: Story = {
  args: {
    header: 'Absent',
    contacts: [
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
      { imageSrc: thumbnailAbstract, name: 'Jane Doe' },
    ],
  },
}

export default meta
