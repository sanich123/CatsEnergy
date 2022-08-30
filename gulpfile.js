import gulp from 'gulp';
import browser from 'browser-sync';
import { minifyHtml } from './source/gulp/minify-html.js';
import { minifyStyles, stylesDev } from './source/gulp/minify-styles.js';
import { pugToHtml } from './source/gulp/pug-to-html.js';
import { minifyJs } from './source/gulp/minify-js.js';
import { optimizeImages } from './source/gulp/optimize-img.js';
import { createWebP, webPDev } from './source/gulp/create-webp.js';
import { copyFonts } from './source/gulp/copy-fonts.js';
import { minifySvg } from './source/gulp/minify-svg.js';
import { cleanBuild } from './source/gulp/clean-build.js';
import { clearIcons, createSprite, createSpriteDev } from './source/gulp/create-sprite.js';
import { copyIcons, copyManifest } from './source/gulp/copy-manifest.js';

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

const build = gulp.series(
  cleanBuild,
  minifyStyles,
  optimizeImages,

  gulp.parallel(
  copyManifest,
  copyIcons,
  minifyHtml,
  minifyJs,
  minifySvg,
  createSprite,
  copyFonts,
  createWebP,
  )
);

const dev = gulp.series(
  // webPDev,
  // clearIcons,
  gulp.parallel(
  pugToHtml,
  stylesDev,
  // createSpriteDev
  ),
  server,
  watcher
  );

  export {build, dev}

