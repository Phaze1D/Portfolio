
var gulp = require('gulp');
var wstream = require('webpack-stream');
var webpack = require('webpack');
var clean = require('gulp-clean');
var imageResize = require('gulp-image-resize');
var runSequence = require('run-sequence');
var rename = require("gulp-rename");





gulp.task('clean', function() {
  return gulp.src('build', {read: false})
    .pipe(clean());
})

gulp.task('clean-images', function() {
  return gulp.src('src/images', {read: false})
    .pipe(clean());
})


gulp.task('images-large', function() {
  return gulp.src("init_images/*169.jpg")
  .pipe(imageResize({
    width: 800,
    quality: 0.7,
    imageMagick: true
  }))
  .pipe(rename(function (path) { path.basename += "-large"; }))
  .pipe(gulp.dest('src/images'));
})

gulp.task('images-medium', function() {
  return gulp.src("init_images/*169.jpg")
  .pipe(imageResize({
    width: 550,
    quality: 0.7,
    imageMagick: true
  }))
  .pipe(rename(function (path) { path.basename += "-medium"; }))
  .pipe(gulp.dest('src/images'));
})

gulp.task('images-land', function() {
  return gulp.src("init_images/*169.jpg")
  .pipe(imageResize({
    width: 450,
    heigth: 450,
    crop: true,
    quality: 0.7,
    imageMagick: true
  }))
  .pipe(rename(function (path) { path.basename += "-land"; }))
  .pipe(gulp.dest('src/images'));
})

gulp.task('images-beauty-lg', function() {
  return gulp.src("init_images/beauty.jpg")
  .pipe(imageResize({
    width: 1224,
    quality: 0.6,
    imageMagick: true
  }))
  .pipe(rename(function (path) { path.basename += "-large"; }))
  .pipe(gulp.dest('src/images'));
})

gulp.task('images-beauty-md', function() {
  return gulp.src("init_images/beauty.jpg")
  .pipe(imageResize({
    width: 924,
    quality: 0.6,
    imageMagick: true
  }))
  .pipe(rename(function (path) { path.basename += "-medium"; }))
  .pipe(gulp.dest('src/images'));
})

gulp.task('images-beauty-sm', function() {
  return gulp.src("init_images/beauty.jpg")
  .pipe(imageResize({
    width: 624,
    quality: 0.7,
    imageMagick: true
  }))
  .pipe(rename(function (path) { path.basename += "-small"; }))
  .pipe(gulp.dest('src/images'));
})

gulp.task('move-svg', function() {
  return gulp.src("init_images/stackoverflow.svg")
  .pipe(gulp.dest('src/images'));
})

gulp.task('webpack', function() {
  return gulp.src('src/js/index.js')
    .pipe(wstream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('build/'))
});


gulp.task('build', function(callback) {
  runSequence(['clean', 'clean-images', 'images-large', 'images-medium', 'images-land', 'images-beauty-lg', 'images-beauty-md', 'images-beauty-sm'],
              'move-svg', 'webpack',
              callback);
});


gulp.task('default', ['build']);
