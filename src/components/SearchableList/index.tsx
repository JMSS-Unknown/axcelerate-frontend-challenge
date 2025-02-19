import { ContactDetails } from 'components/ContactListItem'
import SearchField from 'components/SearchField'
import Section, { SectionPropType } from 'components/Section'
import { useState } from 'react'

type SearchableListPropType = {
  /**
   * The list of sections each containing a header a list of contacts to
   * display.
   */
  sections: Exclude<SectionPropType, 'onClick'>[]
  /**
   * The placeholder used in the search field. If not provided, defaults to
   * "Search".
   */
  placeholder?: string
  /**
   * Called with the name and email of the contact list item that was clicked
   *
   * @param contact The name and email of the clicked contact
   */
  onClick?: (contact: ContactDetails) => void
}

/**
 * Display a list of sections, each containing a header and list of contacts
 * along with a search box.
 *
 * The header for each section is collapsible and when clicked will hide
 * the contacts within that section.
 *
 * When no search term is provided all contacts are
 * displayed. After entering a search term, it will display contacts within the
 * expanded sections whose name begin with the entered search term. This is
 * case sensitive.
 *
 * Any contacts marked as enabled will be highlighted in purple. Additionally
 * provide an onClick handler to be able to register a callback when the user
 * clicks on a specific contact list item.
 */
const SearchableList = ({
  sections,
  placeholder = 'Search',
  onClick,
}: SearchableListPropType) => {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredSections = sections.map((section) => ({
    header: section.header,
    contacts: section.contacts.filter((contact) =>
      contact.name.startsWith(searchTerm)
    ),
  }))

  return (
    <div>
      <SearchField
        text={searchTerm}
        setText={setSearchTerm}
        placeholder={placeholder}
      />
      {filteredSections.map((section, i) => (
        <Section key={i} {...section} onClick={onClick} />
      ))}
    </div>
  )
}

export default SearchableList
