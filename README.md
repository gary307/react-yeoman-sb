#React test dev stack

##summary

This project has been setup to act as a playground where we can play with a development stack for future react application.

This project is bootstrapped from CRA (create react app), has Storybook for a pattern library and

Setup

-   run npm install -g yo to install yeoman globally

##react

React is being used as to build our SPA.

Usage

-   run npm / yarn start to begin development enviroment
-   run npm / yarn build for a compiled version of the app

##Yeoman

https://yeoman.io/

Yeoman is a command line scaffolding tool for creating blocks of code. It can befor any kind of file / code gneration. In this project I am using it as a way to create React components.

Setup / Usage

-   run npm install -g yo to install yeoman globally
-   run yo react:component (answer all the questions asked)
-   run yo react:view (answer all the questions asked)

currently it is setup to generate a class component or a functional component based on whats needed. You can also generate a new view if needed.

##Storybook

https://storybook.js.org/

Storybook Is a component / pattern library for your project.

Usage

-   Run yarn / npm run storybook

This will spin up a new dev server which allows you to view all of your components and views in isolation. There are many plugins but I have added Knobs which allows you to load your component with different possible states.

##Styleguidist

An alternative component / pattern library to use with react.

Usage

-   Run npx styleguidist server to start a style guide dev server.

You can use markdown files in each component folder for documentation and examples. Currently the storybook files are been render as they are js files. If we were to use this these files would be removed. Also we would need to setup a seperate webpack config as be default it will only show stuff inside the component folder.
