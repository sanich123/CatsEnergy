import gulp from 'gulp';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';
import { deleteAsync } from 'del';

export const createSprite = () => {
  return gulp.src('source/img/svg/icons/*.svg')
  .pipe(svgmin())
  .pipe(svgstore())
  .pipe(rename('icons.svg'))
  .pipe(gulp.dest('public/img/svg'));
}

export const clearIcons = () => {
  return deleteAsync('source/img/svg/icons.svg')
}

export const createSpriteDev = () => {
  return gulp.src('source/img/svg/icons/*.svg')
  .pipe(svgstore({inlineSvg: true}))
  .pipe(rename('icons.svg'))
  .pipe(gulp.dest('source/img/svg'));
}
