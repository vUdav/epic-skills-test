/* Copy pure plain-text files */
var gulp = require('gulp'),
		config = require('./config');

gulp.task('txt', function() {
	gulp.src(config.pathTo.Src.Txt)
		.pipe(gulp.dest(config.pathTo.Build.Txt))
});