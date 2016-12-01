var gulp = require('gulp');
var clean = require('gulp-rimraf');
var path = require('path');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleancss = new LessPluginCleanCSS({ advanced: true });
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var babel       = require("gulp-babel");
var sourcemaps  = require("gulp-sourcemaps");
var uglify      = require('gulp-uglify');

gulp.task('clean', function() {
    return gulp.src(['./dist'], {
        read: false
    })
        .pipe(clean());
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './',
            directory: true // 显示目录
        },
        startPath: './'
    })
});

// gulp.task('compressJS', function() {
//     gulp.src(['js/*'])
//         .pipe(sourcemaps.init())
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(uglify())
//         .pipe(rename({
//             suffix: ".min"
//         }))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('dist'))
//         .pipe(browserSync.stream());
// });

// gulp.task('compressCss', function () {
//      gulp.src('style/style.less')
//         .pipe(less({
//             plugins: [cleancss],
//             paths: [path.join(__dirname, 'less', 'includes')]
//         }))
//         .pipe(minifyCSS())
//         .pipe(gulp.dest('build/style/'))
//          .pipe(reload({stream: true}));
// });

gulp.task('copyImg', function() {
      gulp.src(['img/*'])
        .pipe(gulp.dest('dist/img/'))
          .pipe(reload({stream: true}));
});

gulp.task('watch', function() {
    gulp.watch(['img/*'], ['copyImg']);
    // gulp.watch(['style/*.less'], ['compressCss']);
    gulp.watch('*/*').on('change', browserSync.reload);
});

gulp.task('build', ['clean'], function () {
    gulp.start('copyImg', 'browser-sync', 'watch');
});

gulp.task('default', function () {
    gulp.start('copyImg', 'browser-sync', 'watch');
});
