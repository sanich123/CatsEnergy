import gulp from 'gulp';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';

export const createSprite = () => {
  return gulp.src('source/img/svg/icons/*.svg')
  .pipe(svgmin())
  .pipe(svgstore())
  .pipe(rename('icons.svg'))
  .pipe(gulp.dest('public/img/svg'));
}
