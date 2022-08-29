import gulp from 'gulp';
import terser from 'gulp-terser';

export const minifyJs = () => {
  return gulp.src('source/js/*.js')
  .pipe(terser())
  .pipe(gulp.dest('public/js'))
}
