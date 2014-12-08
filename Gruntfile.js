module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ['app/**/*.js']
    },

    jscs: {
      src: ['app/**/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/server-test.js']
    },

    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/test.js'],
        dest: 'test/test-build/test-bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    }
  });

  grunt.registerTask('lint', ['jshint', 'jscs']);
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
  grunt.registerTask('test', ['build:dev', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
