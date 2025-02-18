import { joinClassNames } from 'utils/helpers'
import classes from './contact-list-item.module.css'

export type ContactDetails = {
  name: string
  email?: string
}

export type ContactListItemPropType = {
  /**
   * A path to the image representing the contact
   */
  imageSrc: string
  /**
   * The full name of the contact
   */
  name: string
  /**
   * The email address of the contact
   */
  email?: string
  /**
   * Whether the contact is enabled, filling the background with a primary hue
   */
  enabled?: boolean
  /**
   * Called with the name and email of the contact list item that was clicked
   *
   * @param contact The name and email of the clicked contact
   */
  onClick?: (contact: ContactDetails) => void
}

/**
 * Displays the profile, name and optionally email of a contact
 */
const ContactListItem = ({
  imageSrc,
  name,
  email,
  enabled,
  onClick,
}: ContactListItemPropType) => {
  return (
    <button
      className={joinClassNames(
        classes.container,
        enabled ? classes.enabled : classes.interactive
      )}
      onClick={() => onClick?.({ name, email })}
    >
      <img src={imageSrc} alt="Contact Profile Picture" />
      <div>
        <div className={classes.name}>{name}</div>
        {email && <div className={classes.email}>{email}</div>}
      </div>
    </button>
  )
}

export default ContactListItem
