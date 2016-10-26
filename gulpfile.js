"use strict";

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
  iconfont = require('gulp-iconfont'),
  runTimestamp = Math.round(Date.now()/1000);


gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
	.pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
  	.pipe(sourcemaps.write())
    .pipe(browserSync.reload({
    	stream: true
	}))
    .pipe(gulp.dest('app/css'))

});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/*.php', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
})

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('Iconfont', function(){
  return gulp.src(['app/images/*.svg'])
    .pipe(iconfont({
      fontName: 'myfont', // required
      prependUnicode: true, // recommended option
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g.
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('app/fonts/'));
});
