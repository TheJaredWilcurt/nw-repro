var gui = nw;
var rmenu = new gui.Menu();
rmenu.append(
  new gui.MenuItem({
    label: "lock pos",
    click: function () {
      alert("lock pos OK!");
    },
  })
);

document.body.addEventListener("contextmenu", function (ev) {
  alert("test"); //here not work, then set frame true it's can work
  ev.preventDefault();
  rmenu.popup(ev.x, ev.y);
  return false;
});
