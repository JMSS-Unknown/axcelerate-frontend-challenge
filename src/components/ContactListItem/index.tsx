import classes from './contact-list-item.module.css'

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
}

/**
 * Displays the profile, name and optionally email of a contact
 */
const ContactListItem = ({
  imageSrc,
  name,
  email,
}: ContactListItemPropType) => {
  return (
    <button className={classes.container}>
      <img src={imageSrc} alt="Contact Profile Picture" />
      <div>
        <div className={classes.name}>{name}</div>
        {email && <div className={classes.email}>{email}</div>}
      </div>
    </button>
  )
}

export default ContactListItem
