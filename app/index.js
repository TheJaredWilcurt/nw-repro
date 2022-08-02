const win = nw.Window.get();

win.open("index.html");

setTimeout(() => win.close((force = true)), 10000);
