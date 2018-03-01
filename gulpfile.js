const gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  sassLint = require('gulp-sass-lint');

const BASE = 'src';
const SCSS_FILES = [`${BASE}/**/*.scss`];

gulp.task('lint:styles', () => {
  return gulp.src(SCSS_FILES)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('build:styles', () => {
  return gulp.src(SCSS_FILES)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(BASE));
});

gulp.task('watch:styles', ['build:styles'], () => {
  gulp.watch(SCSS_FILES, ['build:styles']);
});


