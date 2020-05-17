# Webpack browser-field demo 

This is a demo for Webapck using browser field in package.json file:
```
  "browser": {
    "./src/node.js": "./src/browser.js"
  }
```

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
