var gulp = require('gulp'),
		config = require('./config'),
		realFavicon = require ('gulp-real-favicon'),
		fs = require('fs')
		runSequence = require('run-sequence').use(gulp);

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicon', function(done) {
	realFavicon.generateFavicon({
		masterPicture: config.pathTo.Src.Favicon,
		dest: config.pathTo.Build.Favicon,
		iconsPath: '/img/favicons/',
		design: {
			ios: {
				pictureAspect: 'backgroundAndMargin',
				backgroundColor: config.faviconSettings.bgColor,
				margin: '30%',
				appName: config.faviconSettings.appName
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'whiteSilhouette',
				backgroundColor: config.faviconSettings.iconColor,
				onConflict: 'override',
				appName: config.faviconSettings.appName
			},
			androidChrome: {
				pictureAspect: 'shadow',
				themeColor: config.faviconSettings.bgColor,
				manifest: {
					name: config.faviconSettings.appName,
					display: 'browser',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				}
			},
			safariPinnedTab: {
				pictureAspect: 'silhouette',
				themeColor: config.faviconSettings.iconColor
			}
		},
		settings: {
			compression: 5,
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
		done();
	});
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('inject-favicon-markups', function() {
	gulp.src(config.pathTo.Build.FaviconInject)
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
		.pipe(gulp.dest('dist'));
});

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('check-for-favicon-update', function(done) {
	var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});

gulp.task('favicon', function(callback) {
	runSequence(
		'generate-favicon',
		'inject-favicon-markups',
		callback)
});