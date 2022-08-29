import gulp from 'gulp';

export const copyManifest = () => {
  return gulp.src('source/*.{webmanifest,ico}')
  .pipe(gulp.dest('public'))
}
