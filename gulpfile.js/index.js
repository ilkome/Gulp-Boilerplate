/*
  ilkome frontend
  Version 4.2.1

  Ilya Komichev
  https://ilko.me
  https://github.com/ilkome/frontend
*/
const gulp = require('gulp')
const requireDir = require('require-dir')
const runSequence = require('run-sequence')
const watch = require('gulp-watch')
const paths = require('./paths')

requireDir('./tasks') // Require all tasks

// Development
gulp.task('default', (done) => {
  runSequence(
    ['clean'],
    ['images', 'jade', 'stylus', 'assets'],
    ['browserSync'],
    ['watcher'],
    done
  )
})

// Build
gulp.task('build', (done) => {
  runSequence(
    ['clean'],
    ['images', 'jade', 'stylus', 'assets'],
    ['html'],
    done
  )
})


// Watch
gulp.task('watcher', () => {
  watch(paths.assets.src, () => runSequence('assets', 'browserSync-reload'))
  watch(paths.images.src, () => runSequence('images', 'browserSync-reload'))
  watch(paths.jade.src, () => runSequence('jade', 'browserSync-reload'))
  watch(paths.stylus.src, () => gulp.start('stylus'))
})
