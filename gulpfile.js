/**
 * @author lixue
 * @version [beta 1.0.0]
 */
var gulp = require('gulp')
  , react = require('gulp-react')
  , uglify = require('gulp-uglify')
  , sass = require('gulp-sass')
  , minifycss = require('gulp-minify-css')
  , autoprefixer = require('gulp-autoprefixer')
  , concatScript = require('gulp-file-concat')
  , clean = require('gulp-clean')
  , cache = require('gulp-cache')
  , imagemin = require('gulp-imagemin')
  , livereload = require('gulp-livereload')
  , rename = require('gulp-rename')
  , plumber = require('gulp-plumber')
  , rev = require('gulp-rev')
  , revCollector = require('gulp-rev-collector')
  , template = require('gulp-template')
  , replace = require('gulp-replace')
  , bsmain = require('browser-sync').create('bsmain')
  , bsapi = require('browser-sync').create('bsapi')
  , nodemon = require('gulp-nodemon')
  , BROWSER_SYNC_RELOAD_DELAY = 500
  , DEV_PORT = 3050
  , MAIN_PORT = 4050
  , API_PORT = 4051
  , API_SERVER = "m.mtime.cn";

var date_rev = new Date()
  , y, m, d, hh, mm, ss;
y = date_rev.getFullYear();
m = date_rev.getMonth() + 1;
d = date_rev.getDate();
hh = date_rev.getHours();
mm = date_rev.getMinutes();
ss = date_rev.getSeconds();

m = m > 10 ? m : '0' + m;
d = d > 10 ? d : '0' + d;
date_rev = [y, m, d, hh, mm, ss].join('');

/*文件路径配置*/
var fpath = {
  src: 'static',
  dest: 'public'
};

/*报错处理*/
function handleError(err) {
  gutil.beep();
  gutil.log(err);
};

/*编译sass文件*/ 
gulp.task('css', function() {
  return gulp.src(fpath.src + '/scss/**/*.{sass,scss}')
    .pipe(plumber({errorHandler: handleError}))
    .pipe(sass())
    .pipe(minifycss({compatibility: 'ie7'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(fpath.dest + '/css'))
    .pipe(bsmain.stream())
});

/*压缩图片*/
gulp.task('images', function() {
  return gulp.src(fpath.src + '/images/**/')
    .pipe(plumber())
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(fpath.dest + '/images'));
});

gulp.task('favicon', function() {
  return gulp.src(fpath.src + '/favicon/**/')
    .pipe(plumber())
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(fpath.dest + '/favicon'));
});

/*编译字体*/
gulp.task('fonts', function() {
  return gulp.src(fpath.src + '/fonts/**/*')
    .pipe(plumber())
    .pipe(gulp.dest(fpath.dest + '/fonts'));
});

/*编译bower_components*/
gulp.task('bowerjs', function() {
  return gulp.src(fpath.src + '/bower_components/**/*')
    .pipe(plumber())
    .pipe(gulp.dest(fpath.dest + '/bower_components'));
});

/*合并、压缩script*/
gulp.task('concatScript', function() {
  return gulp.src(fpath.src + '/merge/**/*.js')
    .pipe(plumber())
    .pipe(concatScript({relativeUrls: fpath.src}))
    .pipe(gulp.dest(fpath.dest + '/js'))
});

/* build */
gulp.task('build', function(){
  return gulp.src('app/react/components/**/*.js')
    .pipe(react())
    .pipe(gulp.dest('app/react/build'));
});

/*线上css文件生成*/
gulp.task('css_online', function() {
  return gulp.src(fpath.src + '/scss/**/*.{sass,scss}')
    .pipe(plumber({errorHandler: handleError}))
    .pipe(sass())
    .pipe(minifycss({compatibility: 'ie7'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest(fpath.dest + '/' + date_rev + '/css/'))
});

/*线上合并、压缩script*/
gulp.task('concatScript_online', function() {
  return gulp.src(fpath.src + '/merge/**/*.js')
    .pipe(plumber())
    .pipe(concatScript({relativeUrls: fpath.src}))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest(fpath.dest + '/' + date_rev + '/js/'))
});
/*线上压缩图片*/
gulp.task('images_online', function() {
  return gulp.src(fpath.src + '/images/**/')
    .pipe(plumber())
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(fpath.dest + '/' + date_rev + '/images/'));
});

/*线上图标*/
gulp.task('favicon_online', function() {
  return gulp.src(fpath.src + '/favicon/**/')
    .pipe(plumber())
    .pipe(cache(imagemin({optimizationLevel:3, progressive:true, interlaced:true})))
    .pipe(gulp.dest(fpath.dest + '/' + date_rev + '/favicon'));
});

/*改变版本号*/
gulp.task('rev', function() {
  return gulp.src([fpath.dest + "/rev/**/*.json", fpath.src + '/views/**/*'])
    .pipe(revCollector({replaceReved: true}))
    .pipe(gulp.dest(fpath.dest + '/views'))
});

/* 版本号增加到config.js文件 */
gulp.task('configsrc', function() {
  return gulp.src('app/config/config.src.js')
    .pipe(rename('config.js'))
    .pipe(gulp.dest('app/config/'));
});

/* 版本号增加到config.js文件 */
gulp.task('configsrc_online', function() {
  return gulp.src('app/config/config.src.js')
    .pipe(template({date_rev: date_rev}))
    .pipe(rename('config.js'))
    .pipe(gulp.dest('app/config/'));
});

/**
 * gulp-nodemon配置
 */
// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon

gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
      // nodemon our expressjs server
      script: 'app.js',
      // watch core server file(s) that require server restart on change
      watch: ['app/**/*', 'static/**/*', 'utils/**/*', 'app.js'],
      ext: 'js ejs',
      env: {
        'PORT': DEV_PORT,
        'MAINPORT': MAIN_PORT,
        'APIPORT': API_PORT
      }
    })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) {
        cb();
      }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        bsmain.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});
/**
 * browser-sync配置
 */
function initBrowsersyncMain() {
  bsmain.init({
    port: MAIN_PORT,
    proxy: 'localhost:' + DEV_PORT,
    browser: ['google-chrome']
  });
}

function initBrowsersyncApi() {
  bsapi.init({
    ui: false,
    port: API_PORT,
    proxy: {
      target: API_SERVER,
      proxyRes: [
        function(res) {
          res.headers["Access-Control-Allow-Origin"] = '*';
        }
      ]
    },
    browser: ['google-chrome']
  }, initBrowsersyncMain);
}

gulp.task('browser-sync',['nodemon'], initBrowsersyncApi);

gulp.task('js-watch', ['concatScript'], function() {
  bsmain.reload()
});


/*文件改动监听*/
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(fpath.src + '/scss/**/*.{sass,scss}', ['css']);
  gulp.watch(fpath.src + '/images/**/', ['images']);
  gulp.watch(fpath.src + '/fonts/**/*', ['fonts']);
  gulp.watch(fpath.src + '/components/**/*.js', ['js-watch']);
  gulp.watch(fpath.src + '/merge/**/*.js', ['js-watch']);
  gulp.watch(fpath.src + '/bower_components/**/*', ['bowerjs']);
  gulp.watch('app/react/components/**/*.js', ['build']);
  gulp.watch('app/config/config.src.js', ['configsrc'])
});

/*任务执行*/
gulp.task('output', ['css', 'images', 'favicon', 'fonts', 'concatScript', 'bowerjs', 'build'], function() {
  gulp.start('configsrc');
});

/*任务执行*/
gulp.task('output_online', ['css_online', 'images_online', 'favicon_online', 'fonts', 'concatScript_online', 'bowerjs', 'build'], function() {
  gulp.start('configsrc_online');
});

/*清空*/
gulp.task('clean', function() {
  return gulp.src([fpath.dest], {read: false})
    .pipe(plumber())
    .pipe(clean());
});

/*在线清空*/
gulp.task('clean_online', function() {
  return gulp.src([fpath.dest], {read: false})
    .pipe(plumber())
    .pipe(clean());
});

/*启动*/
gulp.task('default', ['clean'], function() {
  gulp.start('output');
  gulp.start('watch');
});

/*线上启动*/
gulp.task('online', ['clean_online'], function() {
  gulp.start('output_online');
});
