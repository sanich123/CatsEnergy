import gulp from 'gulp';
import browser from 'browser-sync';
import pug from 'gulp-pug';

export const pugToHtml = () => {
  return gulp.src('source/pug/pages/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('source'))
  .pipe(browser.stream());
}
