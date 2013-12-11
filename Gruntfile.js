'use strict';

module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pck: grunt.file.readJSON('package.json'),

    clean: {
      all: ['typebase.css']
    },

    watch: {
      less: {
        files: ['src/{,*/}*.less'],
        tasks: ['less:dev']
      }
    },

    less: {
      dev: {
        files: {
          "typebase.css": "src/typebase.less"
        }
      }
    }
  });

  grunt.registerTask('dev', [
    'watch'
  ]);

  grunt.registerTask('default', [
    'clean',
    'less',
  ]);

};