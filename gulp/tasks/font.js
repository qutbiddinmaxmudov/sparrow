module.exports = () =>
  $.gulp.task("font", () =>
    $.gulp
      .src($.path.src.font)
      .pipe($.gp.ttf2woff2())
      .pipe($.gulp.dest($.path.dist.font))
      .on("end", $.bs.reload)
  );
