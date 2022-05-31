# Optimize Performance of your React App

Some ways through which developers can solve the performance related problems in React based web app. 

# Optimizing list rendering with React Virtualized List

 Instead of rendering the whole bunch of components, it lets you render just 30 components.
Or 40, or 10. Whatever the number, at the end of the day you will render a small subset of the components.

"react-window" is popular library, that help us to do that. //https://github.com/bvaughn/react-window

# Optimizing React list performance by using correct keys for components

React uses the Key attribute to decide which elements can be reused for the next rendering phase.
 These keys are important for updating elements in dynamic lists.

# Improving the app’s loading time by lazy loading Images
Images are the heaviest resources that your user may never see until a web page is fully loaded.
They might degrade React app performance.

In order to improve app-loading time, a rule of thumb is to load the images
 at the moment of need instead of loading them while the app’s page is loading.
This is referred to as Lazy loading of Images. 

- Lazy Loading of Images in a React app can be implemented
by using "React Lazyload library". // https://github.com/twobin/react-lazyload

- Browser-level image lazy-loading for the web
https://web.dev/browser-level-image-lazy-loading/

- Lazy Loading Images in React
https://dev.to/shubhamreacts/progressively-loading-images-in-react-40lg


# Optimizing useless Renders in React Application (Wasted Renders)

React leverages a diff algorithm in order to minimize the operations to be done at nodes.
 However, the algorithm in its own sense is not perfect.
 React goes on rendering the whole subtrees instead of rendering the relevant component.
 When these unnecessary renders are left idle in a React application,
 they can eat up unnecessary CPU and memory resources which can be fatal for your React application.

 - Detecting unnecessary rendering of components by using Profiler API.
  // https://reactjs.org/docs/profiler.html#gatsby-focus-wrapper

  - React.memo is a higher order component. If your component renders the same result given the same props,
   you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result.
   This means that React will skip rendering the component, and reuse the last rendered result.
   // https://reactjs.org/docs/react-api.html#reactmemo

- (useCallback) Every time a component re-renders, its functions get recreated. Because of something called "referential equality".
 To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.
 https://www.w3schools.com/react/react_usecallback.asp


# React Performance – 13 Ways to Optimize Performance of your React App 

https://www.simform.com/blog/react-performance/#section3

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
