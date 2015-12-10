var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
// Static Server + watching scss/html files
gulp.task('default', ['sass', 'js'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/style/*.sass", ['sass']);
    gulp.watch("./src/components/*.jsx", ['js']);
    gulp.watch("./src/app.jsx", ['js']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/style/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});


gulp.task('js', function(){
    browserify('./src/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});




gulp.task('images', () => {
    return gulp.src('./src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});



var realFavicon = require ('gulp-real-favicon');
var fs = require('fs');

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

// Generate the icons. This task takes a few seconds to complete. 
// You should run it at least once to create the icons. Then, 
// you should run it whenever RealFaviconGenerator updates its 
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicon', function(done) {
    realFavicon.generateFavicon({
        masterPicture: './src/images/256-2.png',
        dest: './',
        iconsPath: './',
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#ffffff',
                margin: '0%',
                appName: 'Yu Chien'
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#da532c',
                onConflict: 'override',
                appName: 'Yu Chien'
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: '#000000',
                manifest: {
                    name: 'Yu Chien',
                    display: 'browser',
                    orientation: 'notSet',
                    onConflict: 'override'
                }
            },
            safariPinnedTab: {
                pictureAspect: 'blackAndWhite',
                threshold: 62.5,
                themeColor: '#828282'
            }
        },
        settings: {
            compression: 1,
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
    gulp.src([ 'TODO: List of the HTML files where to inject favicon markups' ])
        .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
        .pipe(gulp.dest('TODO: Path to the directory where to store the HTML files'));
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