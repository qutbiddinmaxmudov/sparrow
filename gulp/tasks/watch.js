module.exports = ()=>
  $.gulp.task('watch',()=>{
    for(const key in $.path.watch){
      const path = $.path.watch[key]
      $.gulp.watch(path, $.gulp.series(key))
    }
  })