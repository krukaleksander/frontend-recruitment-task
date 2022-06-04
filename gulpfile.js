const { src, dest, watch, series, parallel } = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const replace = require('gulp-replace');

const files = {
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js'
};

function scssTask(){    
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass([]))
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist')
    );
}

function cssLibs() {
 return src('node_modules/normalize.css/normalize.css')
     .pipe(concat('_libs.scss'))
     .pipe(dest('src/scss/parts'))
}

function jsTask(){
    return src([
        files.jsPath
        ])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist')
    );
}

const cbString = new Date().getTime();

function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

function watchTask(){
    watch([files.scssPath, files.jsPath], 
        parallel(scssTask,jsTask));
}

exports.default = series(
    parallel(scssTask,cssLibs, jsTask),
    cacheBustTask,
    watchTask
);