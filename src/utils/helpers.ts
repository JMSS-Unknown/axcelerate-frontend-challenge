/**
 * A helper function to join a list of strings as classnames.
 * It will filter out empty and undefined values
 */
export const joinClassNames = (...classes: (string | undefined)[]) =>
  classes.filter((cls) => Boolean(cls)).join(' ')
