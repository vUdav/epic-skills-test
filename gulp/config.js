module.exports = {
	// Path settings
	pathTo: {
		Src: {
			Styles: 'src/less/[^_]*.{less,css}',
			Jade: 'src/jade/**/[^_]*.jade',
			Images: ['src/img/**/*.*', '!src/img/sprite/*.*', '!src/img/favicon/*.*'],
			PngSprite: 'src/img/sprite/**/*.png',
			GHPages: 'dist/**/*',
			JS: 'src/js/**/*.*',
			Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess'],
			Fonts: 'src/fonts/**/*',
			PagesList: 'src/jade/pages.jade'
		},
		Build: {
			Styles: 'dist/css',
			Html: 'dist/',
			Jade: 'dist/*.html',
			Images: 'dist/img',
			PngSprite: 'dist/img',
			PngSpriteCSS: 'src/less/blocks',
			JS: 'dist/js',
			Txt: 'dist/',
			Clean: ['dist/**/*', '!dist/.gitignore'],
			Fonts: 'dist/fonts',
		},
		Watch: {
			Styles: 'src/less/**/*.{less,css}',
			Jade: 'src/jade/**/*.jade',
			Images: ['src/img/**/*.*', '!src/img/sprite/*.*', '!src/img/favicon/*.*'],
			PngSprite: 'src/img/sprite/**/*.png',
			Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess'],
			JS: 'src/js/**/*.*',
			Fonts: 'src/fonts/**/*',
		},
		Templates: {
			Page: {
				Jade: 'src/templates/page.jade',
				Less: 'src/templates/page.less',
				Js: 'src/templates/page.js'
			},
			Dest: {
				Jade: 'src/jade',
				Less: 'src/less',
				Js: 'src/js'
			}
		}
	},

	// GitHub Pages options ex. git@github.com:vUdav/gulp-starter.git
	ghpOptions: {
		remoteUrl: 'git@github.com:vUdav/epic-skills-test.git'
	},

	// Browser versions for automatically prefix
	autoprefixerBrowsers: ['last 3 versions', '> 1%', 'Firefox ESR'],

	// BrowserSync local web server settings
	browserSync: {
		server: './dist',
		baseDir: './dist',
		tunnel: false,
		host: 'localhost',
		port: 9000,
		injectChanges: true,
		delay: 100,
		logPrefix: 'EpicSkillsTest'
	}

};