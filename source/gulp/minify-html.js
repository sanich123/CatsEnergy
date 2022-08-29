import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';

export const minifyHtml = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('public'))
}

export const minifyHtmlDev = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin())
  .pipe(gulp.dest)
}
