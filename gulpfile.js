'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename'),
    rimraf = require('gulp-rimraf'),
    concat = require('gulp-concat'),
    svgmin = require('gulp-svgmin'),
    svgSymbols = require('gulp-svg-symbols'),
    fileinclude = require('gulp-file-include')


//SASS
gulp.task('styles', function() {
  return sass('production/sass/styles.scss', {
        style: 'expanded',
        "sourcemap=none": true //hack to allow autoprefixer to work
    })
    .on('error', function (err) { console.log(err.message); })
    .pipe(autoprefixer({
        browsers: ['last 10 version', 'ie 9', 'ios 6', 'ios 7', 'ios 8', 'android 4']
    }))
    .pipe(gulp.dest('dist/css/'));
});


// JS build tasks
gulp.task('compile:js', function() {
    return gulp.src(['production/js/**/*.js', '!production/js/init.js'])
        .pipe(concat('all.js'));
});

gulp.task('js', ['compile:js'], function() {
    return gulp.src('production/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});


// Build markup
gulp.task('markup', function() {
  gulp
    .src('production/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: 'true'
    }))
    .pipe(gulp.dest('dist/'));
});

// Images
gulp.task('images', function () {
  return gulp.src('production/images/**/*.*')
    .pipe(cache(imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});


// Icons
gulp.task('icons', function() {
  return gulp.src('production/icons/*.svg')
    .pipe(svgmin({
      plugins: [{
        cleanupIDs: false
      }]
    }))
    .pipe(svgSymbols({
      templates: ['default-svg']
    }))
    .pipe(rimraf())
    .pipe(rename('icons.svg'))
    .pipe(gulp.dest('dist/icons'));
});

// Fonts
gulp.task('fonts', function() {
  return gulp.src('production/fonts/*.*')
    .pipe(gulp.dest('dist/fonts'))
});

//WATCH
gulp.watch('production/**/**/*.html', ['markup']);
gulp.watch('production/sass/**/*.scss', ['styles']);
gulp.watch('production/js/**/*.js', ['js']);
gulp.watch('production/icons/**/*', ['icons']);
gulp.watch('production/images/**/*', ['images']);
gulp.watch('production/fonts/**/*', ['fonts']);


// LIVERELOAD
gulp.task('watch', function() {
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);

});


//DEFAULT
gulp.task('default', ['styles', 'js', 'markup', 'images', 'icons', 'fonts', 'watch'], function() {
    gulp.start('styles', 'js', 'markup', 'images', 'icons', 'fonts', 'watch');
});