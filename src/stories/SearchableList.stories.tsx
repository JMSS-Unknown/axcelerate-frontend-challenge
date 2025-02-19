import type { Meta, StoryObj } from '@storybook/react'

import SearchableList from 'components/SearchableList'

import thumbnail1 from 'assets/images/thumbnail_person_1.png'
import thumbnail2 from 'assets/images/thumbnail_person_2.png'
import thumbnail3 from 'assets/images/thumbnail_person_3.png'
import thumbnail4 from 'assets/images/thumbnail_person_4.png'
import thumbnail5 from 'assets/images/thumbnail_person_5.png'
import thumbnail6 from 'assets/images/thumbnail_person_6.png'
import thumbnail7 from 'assets/images/thumbnail_person_7.png'
import thumbnail8 from 'assets/images/thumbnail_person_8.png'
import thumbnail9 from 'assets/images/thumbnail_person_9.png'
import thumbnail10 from 'assets/images/thumbnail_person_10.png'

type Story = StoryObj<typeof SearchableList>

const meta: Meta<typeof SearchableList> = {
  component: SearchableList,
}

export const WithoutEmail: Story = {
  args: {
    sections: [
      {
        header: 'Attended',
        contacts: [
          { imageSrc: thumbnail1, name: 'Dianne Russell' },
          { imageSrc: thumbnail2, name: 'Ronald Richards' },
          { imageSrc: thumbnail3, name: 'Arlene McCoy' },
          { imageSrc: thumbnail4, name: 'Kathryn Murphy', enabled: true },
          { imageSrc: thumbnail5, name: 'Savannah Nyugen' },
          { imageSrc: thumbnail6, name: 'Albert Flores' },
        ],
      },
      {
        header: 'Absent',
        contacts: [
          { imageSrc: thumbnail7, name: 'Jenny Wilson' },
          { imageSrc: thumbnail8, name: 'Wade Warren' },
          { imageSrc: thumbnail9, name: 'Bessie Cooper' },
          { imageSrc: thumbnail10, name: 'Ralph Edwards' },
        ],
      },
    ],
  },
}

export const WithEmail: Story = {
  args: {
    sections: [
      {
        header: 'Attended',
        contacts: [
          {
            imageSrc: thumbnail1,
            name: 'Dianne Russell',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail2,
            name: 'Ronald Richards',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail3,
            name: 'Arlene McCoy',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail4,
            name: 'Kathryn Murphy',
            email: 'jane@hotmail.com',
            enabled: true,
          },
          {
            imageSrc: thumbnail5,
            name: 'Savannah Nyugen',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail6,
            name: 'Albert Flores',
            email: 'jane@hotmail.com',
          },
        ],
      },
      {
        header: 'Absent',
        contacts: [
          {
            imageSrc: thumbnail7,
            name: 'Jenny Wilson',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail8,
            name: 'Wade Warren',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail9,
            name: 'Bessie Cooper',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail10,
            name: 'Ralph Edwards',
            email: 'jane@hotmail.com',
          },
        ],
      },
    ],
  },
}

export const NoEnabled: Story = {
  args: {
    sections: [
      {
        header: 'Attended',
        contacts: [
          {
            imageSrc: thumbnail1,
            name: 'Dianne Russell',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail2,
            name: 'Ronald Richards',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail3,
            name: 'Arlene McCoy',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail4,
            name: 'Kathryn Murphy',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail5,
            name: 'Savannah Nyugen',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail6,
            name: 'Albert Flores',
            email: 'jane@hotmail.com',
          },
        ],
      },
      {
        header: 'Absent',
        contacts: [
          {
            imageSrc: thumbnail7,
            name: 'Jenny Wilson',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail8,
            name: 'Wade Warren',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail9,
            name: 'Bessie Cooper',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail10,
            name: 'Ralph Edwards',
            email: 'jane@hotmail.com',
          },
        ],
      },
    ],
  },
}

export const NoHeader: Story = {
  args: {
    sections: [
      {
        contacts: [
          {
            imageSrc: thumbnail1,
            name: 'Dianne Russell',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail2,
            name: 'Ronald Richards',
            email: 'jane@hotmail.com',
          },
          {
            imageSrc: thumbnail3,
            name: 'Arlene McCoy',
            email: 'jane@hotmail.com',
          },
        ],
      },
    ],
  },
}

export default meta
