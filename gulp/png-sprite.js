/* PNG Sprite */
var gulp = require('gulp'),
		config = require('./config'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
		spritesmith = require('gulp.spritesmith'),
		buffer = require('vinyl-buffer'),
		gutil = require('gulp-util'),
		browserSync = require("browser-sync"),
		reload = browserSync.reload,
		plumber = require('gulp-plumber');

gulp.task('png-sprite', function () {
	var spriteData =
		gulp.src(config.pathTo.Src.PngSprite) //выберем откуда брать изображения для объединения в спрайт
			.pipe(spritesmith({
				padding: 1,
				imgName: 'sprite.png', //имя спрайтового изображения
				cssName: 'sprite-position.less', //имя стиля где храним позиции изображений в спрайте
				imgPath: '../img/sprite.png', //путь где лежит спрайт
				cssFormat: 'less', //формат в котором обрабатываем позиции
				cssTemplate: 'template.mustache', //файл маски
				cssVarMap: function(sprite) {
						sprite.name = 's-' + sprite.name //имя каждого спрайта будет состоять из имени файла и конструкции 's-' в начале имени
					}
				}));
		spriteData.img
			.pipe(plumber(function(error) {
				gutil.log(gutil.colors.red(error.message));
				this.emit('end');
			}))
			.pipe(buffer())
			.pipe(imagemin({
				progressive: true,
				optimizationLevel: 5,
				use: [pngquant()],
				interlaced: true
			}))
			.pipe(gulp.dest(config.pathTo.Build.PngSprite))
			.pipe(reload({stream: true}));
		spriteData.css
			.pipe(plumber(function(error) {
				gutil.log(gutil.colors.red(error.message));
				this.emit('end');
			}))
			.pipe(gulp.dest(config.pathTo.Build.PngSpriteCSS))
			.pipe(reload({stream: true}));
});