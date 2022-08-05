const gulp = require("gulp");
const { nwbuild } = require("nw-builder");

gulp.task("build-dev", (done) => {
  nwbuild({
    files: "./app/**/*.*",
    version: "0.66.1",
    mode: "build",
    platforms: ["osx64"]
  });
  done();
});
