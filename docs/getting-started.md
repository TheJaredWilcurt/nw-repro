# Getting Started

## Installation

Download the NW.js binary locally in your Node projects:

```shell
npm install nw
```

You can also download the binary directly from the official website [here](https://dl.nwjs.io/).

## Write your first NW.js application

Create a folder such as `nw` with a `package.json` explicitly for your NW app. This keeps your Node application config and NW application config seperate. The manifest should at the least have a `name`, `version` and `main`. The `main` property is the entry point in your Node application. This can be an HTML or JavaScript file.

```json
"name":"nw-demo"
"version":"0.1.0"
"main":"./index.html"
```

Here's an exmaple on how to use a JavaScript file as the entry point:

```json
"name":"nw-demo"
"version":"0.1.0"
"main":"./main.js"
```

```javascript
nw.Window.open("./index.html", {}, () => {});
```

More information can be found in the [API section](./api).

## Run your first NW.js application

```shell
/path/to/nw /path/to/app

# On Linux this can look like
./node_modules/nw/bin/nw .

# On Mac this can look like
./node_modules/nw/bin/nwjs.app/Contents/MacOS/nwjs .

# On Windows this can look like
./node_modules/nw/bin/nw.exe .
```

The above command executes if your `package.json` is in the above mentioned file path and it has the `main` property pointing to the entry point of the NW application.

## Build your first NW.js application

Coming soon! For now refer to the [original documentation](http://docs.nwjs.io/en/latest/).
