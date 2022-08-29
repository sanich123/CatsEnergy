import gulp from 'gulp';
import svgo from 'gulp-svgo';

export const minifySvg = () => {
  return gulp.src('source/img/svg/*.svg')
  .pipe(svgo())
  .pipe(gulp.dest('public/img/svg'))
}
