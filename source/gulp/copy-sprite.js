import gulp from 'gulp';

export const copySprite = () => {
  return gulp.src('source/img/svg/icons.svg')
  .pipe(gulp.dest('public/img/svg'))
}
