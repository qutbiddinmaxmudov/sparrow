module.exports = ()=>
  $.gulp.task('css',()=>
    $.gulp.src($.path.src.css)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.plumber())
      .pipe($.gp.sass())
      .pipe($.gp.groupCssMediaQueries())
      .pipe($.gp.autoprefixer())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.path.dist.css))
      .on('end',$.bs.reload)
    )