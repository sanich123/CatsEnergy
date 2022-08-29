import gulp from 'gulp';
import gulpSquoosh from 'gulp-libsquoosh';

export const createWebP = () => {
  return gulp.src('source/img/**/*.{jpeg,png}')
  .pipe(gulpSquoosh({
    webp: {},
  }))
  .pipe(gulp.dest('public/img'))
}
