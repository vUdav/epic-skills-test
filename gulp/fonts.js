/* Fonts */
var gulp = require('gulp'),
		config = require('./config'),
		gutil = require('gulp-util'),
		browserSync = require("browser-sync"),
		reload = browserSync.reload,
		plumber = require('gulp-plumber');

gulp.task('fonts', function() {
	return gulp.src(config.pathTo.Src.Fonts)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(gulp.dest(config.pathTo.Build.Fonts))
		.pipe(reload({stream: true}));
});