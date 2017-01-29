/* Main watcher */
var gulp = require('gulp'),
		config = require('./config');

gulp.task('watch', ['webserver'],function() {
	gulp.watch(config.pathTo.Watch.Styles, ['less']);
	gulp.watch(config.pathTo.Watch.Jade, ['jade']);
	gulp.watch(config.pathTo.Watch.Images, ['images']);
	gulp.watch(config.pathTo.Watch.PngSprite, ['png-sprite']);
	gulp.watch('bower.json', ['bower']);
	gulp.watch(config.pathTo.Watch.Txt, ['txt']);
	gulp.watch(config.pathTo.Watch.JS, ['js']);
	gulp.watch(config.pathTo.Watch.Fonts, ['fonts']);
});