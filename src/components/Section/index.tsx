import ContactListItem, {
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
  contacts: ContactListItemPropType[]
}

/**
 * Display a collapsible header containing a list of contacts
 */
const Section = ({ header, contacts }: SectionPropType) => {
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
            <ContactListItem key={i} {...contact} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Section
