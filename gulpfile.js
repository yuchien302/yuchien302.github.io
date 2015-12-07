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