# Webpack browser-field demo 

This is a demo for Webapck using browser field in package.json file:
```
  "browser": {
    "./src/node.js": "./src/browser.js"
  }
```
It shows 2 things:
1. Webpack **replaces** the *node.js* implementation with *browser.js* implementation
2. Webpack **does not** pack the lodah that is used only by the *node.js* implementation


Running
```
node ./src/cli.js
```

Results with:
```
Hello webpack for node
```


Running
```
npm run build
```
and opening "./dist/index.html" in a browser window

Results with
```
Hello webpack for browser
```
