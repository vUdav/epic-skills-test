/* LESS */
var gulp = require('gulp'),
		config = require('./config'),
		less = require('gulp-less'),
		cssnano = require('gulp-cssnano'),
		autoprefixer = require('gulp-autoprefixer'),
		cached = require('gulp-cached'),
		gutil = require('gulp-util'),
		rename = require('gulp-rename'),
		browserSync = require("browser-sync"),
		reload = browserSync.reload,
		plumber = require('gulp-plumber');

gulp.task('less', function () {
	gulp.src(config.pathTo.Src.Styles)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(less())
		.pipe(autoprefixer(config.autoprefixerBrowsers))
		.pipe(cssnano({ minifyFontValues: false, discardUnused: false }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(cached('less'))
		.pipe(gulp.dest(config.pathTo.Build.Styles))
		.pipe(reload({stream: true}));
});