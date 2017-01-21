/* New page

write on console: gulp new-page --page your-some-page --title your-some-title

*/
var gulp = require('gulp'),
		config = require('./config'),
		gutil = require('gulp-util'),
		template = require('gulp-template'),
		rename = require('gulp-rename'),
		insert = require('gulp-inject-string');

gulp.task('new-page', function () {

	gulp.src(config.pathTo.Templates.Page.Jade)
		.pipe(template({page: (gutil.env.page ? gutil.env.page : 'new-page'), title: (gutil.env.title ? gutil.env.title : 'Новая страница')}))
		.pipe(rename({ basename: (gutil.env.page ? gutil.env.page : 'new-page') }))
		.pipe(gulp.dest(config.pathTo.Templates.Dest.Jade));

	gulp.src(config.pathTo.Templates.Page.Less)
		.pipe(rename({ basename: (gutil.env.page ? gutil.env.page : 'new-page')+'-style' }))
		.pipe(gulp.dest(config.pathTo.Templates.Dest.Less));

	gulp.src(config.pathTo.Templates.Page.Js)
		.pipe(rename({ basename: (gutil.env.page ? gutil.env.page : 'new-page')+'-script' }))
		.pipe(gulp.dest(config.pathTo.Templates.Dest.Js));

	gulp.src(config.pathTo.Src.PagesList)
		.pipe(insert.append('\n\t\tli: a(href="'+(gutil.env.page ? gutil.env.page : 'new-page')+'.html" target="_blank") '+(gutil.env.title ? gutil.env.title : 'Новая страница') ))
		.pipe(gulp.dest(config.pathTo.Templates.Dest.Jade));
});