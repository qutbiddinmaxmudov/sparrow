module.exports = () =>
  $.gulp.task('css', () =>
    $.mode
      ? $.gulp
          .src($.path.src.css)
          .pipe($.gp.sourcemaps.init())
          .pipe($.gp.plumber())
          .pipe($.gp.sass())
          .pipe($.gp.groupCssMediaQueries())
          .pipe($.gp.autoprefixer())
          .pipe($.gp.sourcemaps.write())
          .pipe($.gulp.dest($.path.dist.css))
          .on('end', $.bs.reload)
      : $.gulp
          .src($.path.src.css)
          .pipe($.gp.sass())
          .pipe($.gp.groupCssMediaQueries())
          .pipe($.gp.autoprefixer())
          .pipe($.gp.sass({outputStyle: 'compressed'}))
          .pipe($.gulp.dest($.path.dist.css))
  )
