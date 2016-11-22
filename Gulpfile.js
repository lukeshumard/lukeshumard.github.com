var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');

var globalConfig = {
  css: 'css'
};

gulp.task('watch', function() {
  gulp.watch(globalConfig.css + '/*.scss',['styles']);
})

gulp.task('styles', function() {
  gulp.src(globalConfig.css + '/style.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./' + globalConfig.css + '/'));
});

gulp.task('serve', serve('./'));

gulp.task('default', ['watch', 'serve']);
