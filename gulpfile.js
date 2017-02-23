
var gulp = require('gulp');
var wstream = require('webpack-stream');
var webpack = require('webpack');
var clean = require('gulp-clean');



gulp.task('clean', function() {
  return gulp.src('build', {read: false})
    .pipe(clean());
})

gulp.task('webpack', function() {
  return gulp.src('src/app/index.js')
    .pipe(wstream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('build/'))
});


gulp.task('default', ['clean', 'webpack']);
