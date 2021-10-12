var gulp = require('gulp');
var scss = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');

// 소스 파일 경로 
var PATH = {
  HTML: './workspace/html',
  ASSETS: {
    FONTS: './workspace/assets/fonts',
    IMAGES: './workspace/assets/images',
    STYLE: './workspace/assets/css',
  }
},
// 산출물 경로 
DEST_PATH = {
  HTML: './dist',
  ASSETS: {
    FONTS: './dist/assets/fonts',
    IMAGES: './dist/assets/images',
    STYLE: './dist/assets/css',
  }
};

gulp.task('scss:compile', () => {
	return new Promise(resolve => {
		var options = {
			outputStyle: 'compact', // nested, expanded, compact, compressed 
			indentType: 'space', // space, tab 
			indentWidth: 4,
      precision: 8,
			sourceComments: false, // 코멘트 제거 여부 
		};

		gulp.src(PATH.ASSETS.STYLE + '/*.scss')
      .pipe(sourcemaps.init())
      .pipe(scss(options))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(DEST_PATH.ASSETS.STYLE));
		resolve();
	});
});

//html
gulp.task( 'html', () => { 
  return new Promise( resolve => { 
    gulp.src( PATH.HTML + '/*.html' )
      .pipe( gulp.dest( DEST_PATH.HTML)); 
    resolve(); 
  }); 
});

//서버
gulp.task('nodemon:start', () => { 
  return new Promise( resolve => { 
    nodemon({ 
      script: 'app.js',
      watch: 'app',
    }); 
    resolve(); 
  }); 
});

gulp.task('default', gulp.series(['scss:compile', 'html', 'nodemon:start']));