const { src, dest, series, parallel, watch } = require('gulp');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

// Lint CSS
const lintCSS = () => src('main.css')
  .pipe(stylelint({ reporters: [{ formatter: 'string', console: true }] }));

// Lint JavaScript
const lintJS = () => src('main.js')
  .pipe(eslint())
  .pipe(eslint.format());

// Transpile JavaScript
const transpileJS = () => src('main.js')
  .pipe(babel({ presets: ['@babel/preset-env'] }))
  .pipe(dest('prod'));

// Minify CSS
const minifyCSS = () => src('main.css')
  .pipe(cleanCSS())
  .pipe(dest('prod'));

// Minify JS
const minifyJS = () => src('main.js')
  .pipe(terser())
  .pipe(dest('prod'));

// Watch files
const watchFiles = () => {
  browserSync.init({ server: './' });
  watch('main.css', series(lintCSS)).on('change', browserSync.reload);
  watch('main.js', series(lintJS, transpileJS)).on('change', browserSync.reload);
};

// Development task
exports.default = series(parallel(lintCSS, lintJS), watchFiles);

// Production task
exports.build = series(parallel(minifyCSS, minifyJS, transpileJS));
