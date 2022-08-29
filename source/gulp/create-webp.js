import gulp from 'gulp';
import gulpSquoosh from 'gulp-libsquoosh';

export const createWebP = () => {
  return gulp.src(['source/img/**/*.{jpeg,png}', '!source/img/favicons/*.{svg,png,ico}'])
  .pipe(gulpSquoosh({
    webp: {},
  }))
  .pipe(gulp.dest('public/img'))
}

export const webPDev = () => {
  return gulp.src(['source/img/**/*.{jpeg,png}', '!source/img/favicons/*.{svg,png,ico}'])
  .pipe(gulpSquoosh({
    webp: {}
  }))
  .pipe(gulp.dest('source/img'))
}
