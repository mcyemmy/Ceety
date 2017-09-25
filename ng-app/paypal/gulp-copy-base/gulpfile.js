var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();

var paths = {
  baseCopy: {
    src: '../../../ng-base/**',
    dest: '../'
  }
};
gulp.task('baseToDev', () => {
  return gulp.src(paths.baseCopy.src)
    .pipe(gulp.dest(paths.baseCopy.dest));
});

gulp.task('default', ['baseToDev']);
