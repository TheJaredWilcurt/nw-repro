const gulp = require("gulp");
const NwBuilder = require("nw-builder");

const nw = new NwBuilder({
  files: ["package.json", "client//", "public//", "node_modules/"],
  mode: "build",
  version: "0.66.1",
  flavor: "sdk",
  zip: true,
  platforms: ["win32", "win64", "osx64"],
  buildType: "versioned",
  buildDir: "./builds/sdk/", // Where the build version is saved
  macIcns: "./public/images/ae.icns",
});

gulp.task("build-dev", (done) => {
  nw.options.flavor = "sdk";
  nw.options.buildDir = "./builds/sdk/";
  nw.build(() => {});
  done();
});
