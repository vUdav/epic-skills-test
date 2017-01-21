/* Jade */
var gulp = require('gulp'),
		config = require('./config'),
		prettify = require('gulp-prettify'),
		jade = require('gulp-jade'),
		cached = require('gulp-cached'),
		gutil = require('gulp-util'),
		browserSync = require("browser-sync"),
		reload = browserSync.reload,
		plumber = require('gulp-plumber');

gulp.task('jade', function() {
	return gulp.src(config.pathTo.Src.Jade)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(jade({
			pretty: true
		}))
		.pipe(prettify({indent_size: 2}))
		.pipe(cached('jade'))
		.pipe(gulp.dest(config.pathTo.Build.Html))
		.pipe(reload({stream: true}));
});