module.exports = () =>
  $.gulp.task("script", () =>
    $.gulp
      .src($.path.src.script)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.plumber())
      .pipe(
        $.gp.typescript({
          removeComments: true,
        })
      )
      .pipe(
        $.gp.babel({
          presets: [
            "@babel/env",
            [
              "minify",
              {
                builtIns: false,
                evaluate: false,
                mangle: false,
              },
            ],
          ],
        })
      )
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.path.dist.script))
      .on("end", $.bs.reload)
  );
