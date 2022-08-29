import gulp from 'gulp';
import gulpSquoosh from 'gulp-libsquoosh';


export const optimizeImages = () => {
  return gulp.src(['source/img/**/*.{jpg,png}', '!source/img/favicons/*.{png,ico}'])
  .pipe(gulpSquoosh())
  .pipe(gulp.dest('public/img'))
}
