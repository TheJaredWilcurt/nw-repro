const { nwbuild } = require("nw-builder");

nwbuild({
    files: ["./app/**", "./app/**/\.*"],
    mode: "run"
});