import gulp from 'gulp';
import browser from 'browser-sync';
import gulpSquoosh from 'gulp-libsquoosh';
import { minifyHtml } from './source/gulp/minify-html.js';
import { minifyStyles } from './source/gulp/minify-styles.js';
import { pugToHtml } from './source/gulp/pug-to-html.js';
import { minifyJs } from './source/gulp/minify-js.js';
import { optimizeImages } from './source/gulp/optimize-img.js';
import { copyImages } from './source/gulp/copy-images.js';
import { createWebP } from './source/gulp/create-webp.js';
import { copyFonts } from './source/gulp/copy-fonts.js';

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
  gulp.watch('source/less/**/*.less', gulp.series(minifyStyles));
  gulp.watch('source/*.html').on('change', browser.reload);
}
export const build = gulp.series(
  minifyStyles,
  minifyHtml,
  minifyJs,
  copyFonts,
  optimizeImages,
  createWebP);
  
export const dev = gulp.series(
  pugToHtml,
  minifyStyles,
  server,
  watcher);


