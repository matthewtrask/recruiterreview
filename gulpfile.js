var gulp = require('gulp');
var sass = require('gulp-sass');


//Sass Task
gulp.task('styles', function(){
	gulp.src('/assets/scss/*.scss')
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest('/assets/css/'))

});

//watch task
gulp.task('default', function(){
	gulp.watch('/assets/scss/*.scss', ['styles']);
});