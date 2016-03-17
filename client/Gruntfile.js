module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['build/*'],
		concat: {
			js: {
				options: {sourceMap: true},
				src: ['src/js/persistence.js', 'src/js/startHere.js', 'src/js/**/*.js'],
				dest: 'build/js/min.js'
			},
			css: {
				src: 'src/css/**/*.css',
				dest: 'build/css/min.css'
			},
			weathericons: {
				src: 'src/dep/weathericonscss/*.css',
				dest: 'build/css/weathericons.min.css'
			}
		},
		copy: {
			html: {
				files: [{
					src: 'src/index.html',
					dest: 'build/index.html'
				}, {
					src: 'src/about/index.html',
					dest: 'build/about/index.html'
				}, {
					src: 'src/privacy/index.html',
					dest: 'build/privacy/index.html'
				}]
			},
			weathericons: {
				expand: true,
				cwd: 'src/dep/',
				src: 'font/*',
				dest: 'build/'
			},
			blockadblock: {
				src: 'src/dep/blockadblock/blockadblock.js',
				dest: 'build/js/blockadblock.js'
			},
			img: {
				expand: true,
				cwd: 'src/',
				src: 'img/*',
				dest: 'build/'
			}
		},
		watch: {
			js: {
				files: 'src/js/**/*.js',
				tasks: 'concat:js'
			},
			css: {
				files: 'src/css/**/*.css',
				tasks: 'concat:css'
			},
			html: {
				files: ['src/index.html', 'src/about/index.html', 'src/privacy/index.html'],
				tasks: 'copy:html'
			},
			img: {
				files: 'src/img/**/*',
				tasks: 'copy:img'
			},
			config: {
				files: 'Gruntfile.js',
				options: {
					reload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'concat', 'copy']);
};