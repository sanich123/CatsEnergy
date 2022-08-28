import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import pug from 'gulp-pug';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import gulpSquoosh from 'gulp-squoosh';

// Styles
export const styles = () => {
  return gulp.src('source/less/styles.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([autoprefixer(), csso()]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

//Minify html

export const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'))
}
// Html
export const pugToHtml = () => {
  return gulp.src('source/pug/pages/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('source'))
  .pipe(browser.stream());
}

//JS

export const js = () => {
  return gulp.src('source/js/*.js')
  .pipe(terser())
  .pipe(gulp.dest('build/js'))
}

//Images

export const images = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(gulpSquoosh())
  .pipe(gulp.dest('build/img'))
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
  pugToHtml, html, js, images, styles, server, watcher
);
