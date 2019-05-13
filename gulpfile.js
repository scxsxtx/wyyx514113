//1. 引入所需插件
const gulp = require('gulp'),
	//压缩js
	 // uglify = require('gulp-uglify'),
	  //重命名	
	 rename = require('gulp-rename'),
	  //压缩图片
	 // imagemin = require('gulp-imagemin'),
	  //合并js文件
	//  concat = require('gulp-concat')
	  //编译ssass
	  sass = require('gulp-sass')
	  //压缩css
	  cssnano = require('gulp-cssnano');

//2. 发布任务


gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(rename({'suffix' : '.min'}))
	.pipe(cssnano())
	.pipe(gulp.dest('./css'));
})
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['sass']);
})
//sass编译

// gulp.task('img',()=>{
// 	gulp.src('./src/img/*.*')
// 	.pipe(imagemin())
// 	.pipe(gulp.dest('./dist/img'))
// })

