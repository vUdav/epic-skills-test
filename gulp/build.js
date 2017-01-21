/* Build */
var gulp = require('gulp'),
		runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(callback) {
	runSequence(
		'clean',
		'js',
		'png-sprite',
		'images',
		'fonts',
		'less',
		'txt',
		'jade',
		callback)
});