module.exports = function (gulp, plugins, config) {
  plugins.browserSync.init(Object.assign({ notify: false }, config.proxy ? {
    proxy: {
      target: config.proxy
    }
  } : { server: config.server || './' }));

  gulp.watch(config.source + '/assets/icons/*.svg', ['icons']);
  gulp.watch(config.source + '/styles/**/*', ['styles']);
  gulp.watch(config.source + '/scripts/**/*', ['scripts']);
  gulp.watch(config.source + '/assets/**/*', ['assets']);
  gulp.watch(config.source + '/templates/**/*.{twig,html}', ['templates']);
}
