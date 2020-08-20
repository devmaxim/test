var gulp = require('gulp');
var bs = require('browser-sync').create();
var sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function(done){
	gulp.src('src/css/*.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('src/css'));

		done();
});

gulp.task('sass', function(done) {
    gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("src/css"))
        .pipe(bs.stream());

    done();
});

gulp.task('serve', function(done) {

    bs.init({
        server: "src/"
    });

    gulp.watch("src/scss/*.scss", gulp.series('sass'));
    gulp.watch("src/*.html").on('change', () => {
      bs.reload();
      done();
    });
  

    done();
});


gulp.task('default', gulp.series('sass','autoprefixer', 'serve'));
