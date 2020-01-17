# Autopilot-list

The Autopilot-list project is a small application with the goal of displaying a lit of people. The list of people needs to
be loaded via a button on the main page. Loading initially 20 people, the user can see more of them by scrolling to the bottom of the list.
The user can also highlight row by hovering them with the mouse.

## To run the application

After being downloaded, open a terminal and go into the root folder of the app, then run these commands:

- `npm install`
- `npm run build`
- `serve -s build`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Then run `serve -s build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

# Project information

## Folder configuration

The project has all the source code under the `src` folder.

- `index.js` is the entry point where React bootstrap the application
- `assets` maintain the list of images and mock data used in the application
- `components` regroup the components used in the application. Meant to be reusable, they should have a named folder for each of them, including a `test` folder if applicable
- `redux` hold the files related to the redux state management library.
  To be more scalable if we have to add lots of reducers and actions, I separated these under a single folder representing the business terminology.
  (Eg. People: All the reducers, thunks and actions related to the people data will be here)

## State management

Redux was the library chosen to handle the state of the app. Redux is a library of renown in the domain, is well tested and well maintained. It also got a huge community and a lot of resources. The last versions also includes hooks for react which makes it even easier for the integration.
The redux implementation in autopilot-list follow certain rules under the redux folder
As reducers functions are written as pure functions, each of them is tested entirely.
I also used `redux-thunk` in the app to simplify the call process when dealing with async calls.

More infos here: https://redux.js.org/basics/usage-with-react/ and https://github.com/reduxjs/redux-thunk

## Styling

The project use a css-in-js library called `styled-components`. This is a library usefull to create reusable styled components, based on a theme.
Due to the small project that is `autopilot-list`, no theme was created yet.
https://styled-components.com/

## Testing

The tests libraries used are jest and enzyme

- All the pure functions (Eg. utility functions) must be fully tested
- Components with some view logic should have a snapshot representing few if not all the states of the component.

More infos on : https://jestjs.io/docs/en/tutorial-react
And : https://airbnb.io/enzyme/

## Other libraries

- `react-intersection-observer` was used to detect when the user reach the end of the list. This is the react library over the new Intersection Observer API.
  When this happens, a callback is fired, letting the application to call the next page of people.
- `prop-types` is used across the app to give some structure on the attributes given to the components. It also will help maintain the readability of the app later on. It also
  helps the newcomers with the components APIs.
- `eslint` and `prettier` are used to maintain a clean code across the app. By enforcing rules and code style, it's easier to read the code and understand it.
