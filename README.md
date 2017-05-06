Crossover demo
==============


Demo app built with Backbone.js

## Featuring
- Backbone.js for client-side code structure.
- Webpack with Babel-loader for building ES6 modules into single bundle.
- PureCSS for responsive grid system.
- Running on node.js/express server.


## Quick start
1. Install dependencies:

    cd code
    npm install

2. Start Node server:

    npm start

3. Open in browser:

    http://localhost:3000/


## Changing data
App uses data from single json file:

    build/data.json


## Building new bundle
If you changed source code and want to build new bundle.js:

1. install webpack globally

    npm install webpack -g

2. start webpack in app root folder

    cd code
    webpack
