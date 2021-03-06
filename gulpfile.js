"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("browser-sync").create();
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task("css", function () {
  return gulp.src("src/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("src/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "src/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("src/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("src/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));

const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () =>
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);
