import SearchField from 'components/SearchField'
import Section, { SectionPropType } from 'components/Section'
import { useState } from 'react'

type SearchableListPropType = {
  /**
   * The list of sections each containing a header a list of contacts to display.
   */
  sections: SectionPropType[]
  /**
   * The placeholder used in the search field. If not provided, defaults to "Search".
   */
  placeholder?: string
}

/**
 * Display a list of sections, each containing a header and list of contacts that are filtered based on the entered search term.
 */
const SearchableList = ({
  sections,
  placeholder = 'Search',
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
        <Section key={i} {...section} />
      ))}
    </div>
  )
}

export default SearchableList
