"use strict";

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps');


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

