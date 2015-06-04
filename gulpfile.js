(function () {
  'use strict';
  var gulp = require('gulp');
  var usemin = require('gulp-usemin');
  var uglify = require('gulp-uglify');
  var minifyHtml = require('gulp-minify-html');
  var minifyCss = require('gulp-minify-css');
  var rev = require('gulp-rev');
  var del = require('del');
  var compass = require('gulp-compass');
  var livereload = require('gulp-livereload');

  gulp.task('compass', function() {
    gulp.src('sass/*.scss')
    .pipe(compass({
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
  });

  gulp.task('usemin', function () {
    return gulp.src('app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      html: [minifyHtml({empty: true, conditionals: true})],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('dist/'));
  });

  gulp.task('build', ['clean', 'usemin', 'copy'], function() {
    // place code for your default task here
  });
  // Watch Files For Changes
  gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('sass/*.scss', ['compass']);
  });
  gulp.task('default', ['compass', 'watch']);
}());
