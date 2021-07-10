global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  path:{
    serverDir:'./app/dist',
    src:{
      html: './app/src/*.{pug,html}',
      css: './app/src/scss/*.scss',
      script: './app/src/scripts/*.ts',
      img: './app/src/images/**/*.{png,jpg,jpeg,tiff,jfif,webp}',
      font: './app/src/fonts/**/*.ttf',
    },
    dist:{
      html: './app/dist/',
      css: './app/dist/style/',
      script: './app/dist/scripts/',
      img: './app/dist/images/',
      font: './app/dist/fonts',
    },
    watch:{
      html: ['./app/src/*.{pug,html}','./app/src/components/*.{pug,html}'],
      css: './app/src/scss/**/*.scss',
      script: './app/src/scripts/*.ts',
      img: './app/src/images/**/*.{png,jpg,jpeg,tiff,jfif,webp}',
      font: './app/src/fonts/**/*.ttf',
    }
  }
}

require('./gulp/config')
  .forEach(task=>require(task)())
  
$.gulp.series($.gulp.parallel('html','css','script','img','font','server','watch'))()