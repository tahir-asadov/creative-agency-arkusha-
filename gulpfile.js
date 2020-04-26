var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
const babel = require('gulp-babel');
var concat = require('gulp-concat');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
var sass = require('gulp-sass');

// const watcher = gulp.watch(['src/js/*.js'])

gulp.task('js', function(){
  return gulp.src('src/js/*.js')
  .pipe(babel())
  .pipe(concat('all.js'))
  .pipe(gulp.dest('js/'))
  .pipe(minify())
  .pipe(gulp.dest('js/'));
});

gulp.task('css', function(){
  return gulp.src('src/scss/*.scss')
  .pipe(sass())
  .pipe(concat('main.max.css'))
  .pipe(gulp.dest('css/'))
  .pipe(cssnano())
  .pipe(concat('main.min.css'))
  .pipe(gulp.dest('css/'));
});
gulp.task('css_single_files', function(){
  return gulp.src('src/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css/'));
});


gulp.task('watch', function(){
  gulp.watch('src/js/*.js', gulp.series('js'));
  gulp.watch('src/scss/*.scss', gulp.series('css'));
  gulp.watch('src/scss/*.scss', gulp.series('css_single_files'));
});

gulp.task('default', gulp.series('css', 'js', 'css_single_files', 'watch'));

