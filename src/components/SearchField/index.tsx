import { ChangeEventHandler } from 'react'

import classes from './search-field.module.css'
import SearchIcon from 'assets/icons/search.svg?react'

type SearchFieldPropType = {
  /**
   * The value to display when `text` is empty in a muted colour
   */
  placeholder?: string
  /**
   * The value to show in the search box
   */
  text: string
  /**
   * Called with the new text value when the user types into the search box
   *
   * @param text The new text value
   */
  setText: (text: string) => void
}

/**
 * A controlled text field with a search icon on the left.
 */
const SearchField = ({ placeholder, text, setText }: SearchFieldPropType) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newText = event.target.value
    setText(newText)
  }

  return (
    // Using a label to allow clicking anywhere in the container to focus on
    // the input element
    <label className={classes.container}>
      <SearchIcon />
      <input
        type="text"
        value={text}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  )
}

export default SearchField
