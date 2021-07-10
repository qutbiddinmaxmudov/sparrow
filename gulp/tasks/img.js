module.exports = () =>
  $.gulp.task("img", () =>
    $.gulp
      .src($.path.src.img)
      .pipe($.gp.webp())
      .pipe($.gulp.dest($.path.dist.img))
      .on("end", $.bs.reload)
  );
