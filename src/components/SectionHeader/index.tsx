import ChevronRight from 'assets/icons/chevron_right.svg?react'

import classes from './section-header.module.css'
import { joinClassNames } from 'utils/helpers'
import { Dispatch, SetStateAction } from 'react'

export type SectionHeaderPropType = {
  /**
   * The text to show in the header
   */
  text: string
  /**
   * Whether the header is representing expanded or collapsed content
   */
  expanded?: boolean
  /**
   * Called with the opposite value of `expanded` when the user clicks the
   * header
   */
  setExpanded: Dispatch<SetStateAction<boolean>>
}

/**
 * A header that has a chevron indicating if it is expanded or collapsed.
 * It does not manage rendering children based on the expanded state.
 */
const SectionHeader = ({
  text,
  expanded,
  setExpanded,
}: SectionHeaderPropType) => {
  const onClick = () => setExpanded((expanded) => !expanded)

  return (
    <button
      className={joinClassNames(
        classes.container,
        expanded ? classes.expanded : classes.collapsed
      )}
      onClick={onClick}
    >
      <span>{text}</span>
      <div className={classes.chevron}>
        <ChevronRight />
      </div>
    </button>
  )
}

export default SectionHeader
