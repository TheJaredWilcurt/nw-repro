# nw-repro

## Steps to reproduce

1. Install Node using [volta](https://volta.sh/) or [nvm](https://github.com/nvm-sh/nvm)

1. Switch to Node `v16.16.0` and launch the NW.js app by executing `npm start` in the editor of your choice

1. Copy the code below once DevTools opens up:

```javascript
var startTime = new Date();
console.info(startTime);
window.navigator.webkitGetUserMedia(
  { video: false, audio: true },
  function (stream) {
    endTime = new Date();
    console.info("Stream", stream, [endTime - startTime + "ms"]);
  },
  function (err) {
    console.info("error");
  }
);
```

1. `window.navigator.webkitGetUserMedia` does not return a response

1. Click on the NW.js Repro app to bring it into the foreground

1. The `window.navigator.webkitGetUserMedia` returns a response