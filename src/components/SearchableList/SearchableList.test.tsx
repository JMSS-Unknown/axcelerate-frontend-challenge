import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import thumbnailAbstract from 'assets/images/thumbnail_abstract.png'

import SearchableList from '.'

test('Contact name renders correctly', async () => {
  render(
    <SearchableList
      sections={[
        { contacts: [{ imageSrc: thumbnailAbstract, name: 'John Smith' }] },
      ]}
    />
  )

  expect(screen.getByRole('button')).toHaveTextContent('John Smith')
  expect(screen.getAllByRole('button')).toHaveLength(1)
})

test('Section header is not rendered if header not provided', async () => {
  render(
    <SearchableList
      sections={[
        { contacts: [{ imageSrc: thumbnailAbstract, name: 'John Smith' }] },
        {
          header: 'Absent',
          contacts: [{ imageSrc: thumbnailAbstract, name: 'David Jones' }],
        },
      ]}
    />
  )

  expect(screen.getAllByRole('button')).toHaveLength(3)
})

test('Clicking section header hides contacts in section', async () => {
  render(
    <SearchableList
      sections={[
        {
          header: 'Contacts',
          contacts: [
            {
              imageSrc: thumbnailAbstract,
              name: 'John Smith',
            },
          ],
        },
        {
          header: 'Other',
          contacts: [
            {
              imageSrc: thumbnailAbstract,
              name: 'David Jones',
            },
          ],
        },
      ]}
    />
  )

  expect(screen.getByText('John Smith')).toBeInTheDocument()
  expect(screen.getByText('David Jones')).toBeInTheDocument()

  await userEvent.click(screen.getByText('Contacts'))

  expect(screen.queryByText('John Smith')).not.toBeInTheDocument()
  expect(screen.getByText('David Jones')).toBeInTheDocument()
})

test('Searching filters contact name by prefix across all sections', async () => {
  render(
    <SearchableList
      sections={[
        {
          header: 'Attended',
          contacts: [
            { imageSrc: thumbnailAbstract, name: 'Dianne Russell' },
            { imageSrc: thumbnailAbstract, name: 'Ronald Richards' },
            { imageSrc: thumbnailAbstract, name: 'Arlene McCoy' },
            { imageSrc: thumbnailAbstract, name: 'Kathryn Murphy' },
            { imageSrc: thumbnailAbstract, name: 'Savannah Nyugen' },
            { imageSrc: thumbnailAbstract, name: 'Albert Flores' },
          ],
        },
        {
          header: 'Absent',
          contacts: [
            { imageSrc: thumbnailAbstract, name: 'Jenny Wilson' },
            { imageSrc: thumbnailAbstract, name: 'Wade Warren' },
            { imageSrc: thumbnailAbstract, name: 'Bessie Cooper' },
            { imageSrc: thumbnailAbstract, name: 'Ralph Edwards' },
          ],
        },
      ]}
    />
  )

  // Additional two buttons for the collapsible header sections
  expect(screen.getAllByRole('button')).toHaveLength(12)

  await userEvent.type(screen.getByRole('textbox'), 'R')

  expect(screen.getAllByRole('button')).toHaveLength(4)
  expect(screen.getByText('Ronald Richards')).toBeInTheDocument()
  expect(screen.getByText('Ralph Edwards')).toBeInTheDocument()
  expect(screen.queryByText('Dianne Russel')).not.toBeInTheDocument()
})

test('Searching is case sensitive', async () => {
  render(
    <SearchableList
      sections={[
        {
          header: 'First',
          contacts: [
            { imageSrc: thumbnailAbstract, name: 'test1' },
            { imageSrc: thumbnailAbstract, name: 'Test2' },
          ],
        },
        {
          header: 'Second',
          contacts: [
            { imageSrc: thumbnailAbstract, name: 'test3' },
            { imageSrc: thumbnailAbstract, name: 'Test4' },
          ],
        },
      ]}
    />
  )

  // Additional two buttons for the collapsible header sections
  expect(screen.getAllByRole('button')).toHaveLength(6)

  await userEvent.type(screen.getByRole('textbox'), 'T')

  expect(screen.getAllByRole('button')).toHaveLength(4)
  expect(screen.getByText('Test2')).toBeInTheDocument()
  expect(screen.getByText('Test4')).toBeInTheDocument()
  expect(screen.queryByText('test1')).not.toBeInTheDocument()
  expect(screen.queryByText('test3')).not.toBeInTheDocument()
})

test('Searching does not show matches in collapsed sections', async () => {
  render(
    <SearchableList
      sections={[
        {
          header: 'Attended',
          contacts: [
            { imageSrc: thumbnailAbstract, name: 'Dianne Russell' },
            { imageSrc: thumbnailAbstract, name: 'Ronald Richards' },
            { imageSrc: thumbnailAbstract, name: 'Arlene McCoy' },
            { imageSrc: thumbnailAbstract, name: 'Kathryn Murphy' },
            { imageSrc: thumbnailAbstract, name: 'Savannah Nyugen' },
            { imageSrc: thumbnailAbstract, name: 'Albert Flores' },
          ],
        },
        {
          header: 'Absent',
          contacts: [
            { imageSrc: thumbnailAbstract, name: 'Jenny Wilson' },
            { imageSrc: thumbnailAbstract, name: 'Wade Warren' },
            { imageSrc: thumbnailAbstract, name: 'Bessie Cooper' },
            { imageSrc: thumbnailAbstract, name: 'Ralph Edwards' },
          ],
        },
      ]}
    />
  )

  await userEvent.click(screen.getByText('Absent'))
  await userEvent.type(screen.getByRole('textbox'), 'R')

  expect(screen.getByText('Ronald Richards')).toBeInTheDocument()
  expect(screen.queryByText('Ralph Edwards')).not.toBeInTheDocument()
})

test('Searching only filters based on name and not email', async () => {
  render(
    <SearchableList
      sections={[
        {
          contacts: [
            {
              imageSrc: thumbnailAbstract,
              name: 'Ronald',
              email: 'test@gmail.com',
            },
          ],
        },
      ]}
    />
  )

  await userEvent.type(screen.getByRole('textbox'), 'test')

  expect(screen.queryByText('Ronald')).not.toBeInTheDocument()
})

test('onClick returns selected contact', async () => {
  const onClickSpy = vi.fn()
  render(
    <SearchableList
      sections={[
        {
          header: 'Attended',
          contacts: [
            { imageSrc: thumbnailAbstract, name: 'Dianne Russell' },
            { imageSrc: thumbnailAbstract, name: 'Ronald Richards' },
            { imageSrc: thumbnailAbstract, name: 'Arlene McCoy' },
            { imageSrc: thumbnailAbstract, name: 'Kathryn Murphy' },
            { imageSrc: thumbnailAbstract, name: 'Savannah Nyugen' },
            {
              imageSrc: thumbnailAbstract,
              name: 'Albert Flores',
              email: 'albert@gmail.com',
            },
          ],
        },
        {
          header: 'Absent',
          contacts: [
            { imageSrc: thumbnailAbstract, name: 'Jenny Wilson' },
            { imageSrc: thumbnailAbstract, name: 'Wade Warren' },
            { imageSrc: thumbnailAbstract, name: 'Bessie Cooper' },
            { imageSrc: thumbnailAbstract, name: 'Ralph Edwards' },
          ],
        },
      ]}
      onClick={onClickSpy}
    />
  )

  await userEvent.click(screen.getByText('Wade Warren'))
  expect(onClickSpy).toBeCalledTimes(1)
  expect(onClickSpy).toHaveBeenLastCalledWith({
    name: 'Wade Warren',
    email: undefined,
  })

  await userEvent.click(screen.getByText('Albert Flores'))
  expect(onClickSpy).toBeCalledTimes(2)
  expect(onClickSpy).toHaveBeenLastCalledWith({
    name: 'Albert Flores',
    email: 'albert@gmail.com',
  })
})
