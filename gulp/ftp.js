/* FTP upload*/
var gulp = require('gulp'),
		config = require('./config'),
		gutil = require('gulp-util'),
		ftp = require("gulp-ftp");

gulp.task('ftp', function () {
	return gulp.src(config.pathTo.Build.FTP)
		.pipe(ftp(config.ftp))
		.pipe(gutil.noop());
});
