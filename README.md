# aXcelerate Frontend Challenge

This repository contains the code for the aXcelerate frontend challenge, which involves implementing a searchable dropdown list containing contacts.

![Searchable List in Storybook](./documentation/searchable_list_storybook.png)
_Story of Searchable List_

## Setup

1. Install [node](https://nodejs.org/en) if not already available. This repository was tested with version v22.14.0
2. Clone the repository `git clone https://github.com/JMSS-Unknown/axcelerate-frontend-challenge.git`
3. Navigate into the project `cd axcelerate-frontend-challenge`
4. Install dependencies `npm i`

## Running

- To start the dev server `npm run dev` - This contains a test page with the Searchable List component and can be accessed at http://localhost:5173/ after starting.
- To start Storybook `npm run storybook` - View the component library along with usage documentation at http://localhost:6006 after starting.
- To run tests `npm run test` - Run all tests and watch for changes. To avoid watching for changes run `npm run test run`.
- To run linters `npm run lint` - Check for issues with Prettier, TSC and ESLint.

## Notes

- The main component can be found in `src/components/SearchableList/index.tsx`
- Design tokens can be found in `src/assets/css`
- The React app is bundled by Vite and the test runner is Vitest
- Styling is done through CSS modules natively supported by Vite
