module.exports = () =>
  $.gulp.task("server", () =>
    $.bs.init({
      server: {
        baseDir: $.path.serverDir,
      },
    })
  );
