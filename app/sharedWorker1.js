onconnect = function (e) {
  const bc = new BroadcastChannel("bus");
  bc.onmessage = (m) => {
    console.log(m.data);
  };
  let i = 0;
  setInterval(function () {
    bc.postMessage("ping from worker 1" + i);
    i += 1;
  }, 2000);
};
