import gulp from 'gulp';
import svgmin from 'gulp-svgmin';

export const minifySvg = () => {
  return gulp.src(['source/img/svg/*.svg', '!source/img/svg/icons/*.svg', '!source/img/svg/icons.svg'])
  .pipe(svgmin())
  .pipe(gulp.dest('public/img/svg'))
}
