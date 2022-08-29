import gulp from 'gulp';

export const copyManifest = () => {
  return gulp.src('source/*.{webmanifest,ico}')
  .pipe(gulp.dest('public'))
}

export const copyIcons = () => {
  return gulp.src('source/img/favicons/*.{svg,ico}')
  .pipe(gulp.dest('public/img/favicons'))
}
