const gulp = require("gulp");
const { nwbuild } = require("nw-builder");

gulp.task("build-dev", (done) => {
  nwbuild({
    files: "./app/**/*.*",
    mode: "build",
  });
  done();
});
