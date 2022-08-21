import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import pug from 'gulp-pug';

// Styles
export const styles = () => {
  return gulp.src('source/less/styles.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// Html
export const pugToHtml = () => {
  return gulp.src('source/pug/pages/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('source'))
  .pipe(browser.stream());
}


// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/pug/**/*.pug', gulp.series(pugToHtml));
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
  pugToHtml, styles, server, watcher
);
