import ContactListItem, {
  ContactDetails,
  ContactListItemPropType,
} from 'components/ContactListItem'
import SectionHeader from 'components/SectionHeader'
import { useState } from 'react'

import classes from './section.module.css'

export type SectionPropType = {
  /**
   * If provided, the value of the header to render.
   * The section is only collapsible if this is provided.
   */
  header?: string
  /**
   * The list of contacts to display
   */
  contacts: Exclude<ContactListItemPropType, 'onClick'>[]
  /**
   * Called with the name and email of the contact list item that was clicked
   *
   * @param contact The name and email of the clicked contact
   */
  onClick?: (contact: ContactDetails) => void
}

/**
 * Display a collapsible header containing a list of contacts
 */
const Section = ({ header, contacts, onClick }: SectionPropType) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className={classes.container}>
      {header && (
        <SectionHeader
          text={header}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      )}
      {expanded && contacts.length > 0 && (
        <div className={classes.contacts}>
          {contacts.map((contact, i) => (
            <ContactListItem key={i} {...contact} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Section
