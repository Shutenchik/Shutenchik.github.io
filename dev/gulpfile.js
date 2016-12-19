var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	sync = require('gulp-sync')(gulp);

gulp.task('mySass', function() {
	return gulp.src('app/scss/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
});

gulp.task('myWatch', function() {
	gulp.watch('app/scss/*.scss', ['mySass']);
});

gulp.task('default', sync.sync(['mySass', 'myWatch']));