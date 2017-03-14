var gulp = require('gulp'),
    less = require('gulp-less'),//less编译css文件
    concat = require('gulp-concat'),//合并
    rev = require('gulp-rev');//- 对文件名加MD5后缀
    clean = require('gulp-clean'),//清理
    runSequence = require('run-sequence');//顺序执行任务
// 样式
gulp.task('testLess', function() {
    gulp.src('src/less/master.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(concat('master.min.css')) 
        .pipe(rev())
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/less/layout.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(concat('layout.min.css'))
        .pipe(rev())
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/less/sm.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(concat('sm.min.css'))
        .pipe(rev())
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/less/columns.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(concat('columns.min.css'))
        .pipe(rev())
        .pipe(gulp.dest('dist/css'));
});
// 脚本
gulp.task('scripts', function() {
     gulp.src(['src/js/lib/*.js'])
         .pipe(gulp.dest('dist/js/lib'));
     gulp.src(['src/js/*.js'])
         .pipe(gulp.dest('dist/js'));
});
//html
gulp.task('html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});
// 清理
gulp.task('clean', function() {
    return gulp.src(['dist/css','dist/js'], { read: false })
        .pipe(clean());
});
// 预设任务
gulp.task('default', function(callback) {
    runSequence('clean', 'testLess', 'scripts','html', callback);
});
