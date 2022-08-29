import gulp from 'gulp';

export const copyFonts = () => {
  return gulp.src('source/fonts/*.{woff,woff2}')
  .pipe(gulp.dest('public/fonts'))
}
