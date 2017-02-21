
var gulp = require('gulp');
var wstream = require('webpack-stream');
var webpack = require('webpack');


gulp.task('default', function() {
  return gulp.src('app/index.js')
    .pipe(wstream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('src/'));
});
