# Zoltan

Zoltan is a polyphonic browser-based synthesizer written in Javascript using React. The project is currently in the early alpha stages, so expect breaking changes to be frequent.

## Live Demo

You can try the [live demo here](https://dreamy-meitner-5c7e1c.netlify.app/) which is built from the master branch.

Note: Audio doesn't work on iOS at the moment due to [an issue](https://github.com/markjamesm/zoltan/issues/3) with the way mobile browsers handle starting and stopping audio contexts. 

## Libraries Used
* [Reactronica](https://reactronica.com/) - An awesome library which “aims to treat music as a function of state, rendering sound instead of UI.”
* [Material UI](https://mui.com/) - For component UI design.
* [React Dial Knob](https://www.npmjs.com/package/react-dial-knob) - A great component to model synth knobs with.
* [Styled Components](https://www.styled-components.com/) - For writing CSS from within Javascript.


## Build Log ##

I've created a build log which explains how Zoltan was developed:

* [Part One](https://markjames.dev/2021-12-25-writing-a-music-synthesizer-react/)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\