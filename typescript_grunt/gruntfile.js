module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-ts');

	grunt.initConfig({
		//tasks grunt can run
		ts: {
			//different configurations
			main: {
				src: ['typescript/*.ts'],
				//dest: 'javascript/' //where our TS files will go when they are turned into JS files
				out: 'javascript/main.js'
			}
		}
	});

	grunt.registerTask('default', ['ts']);
}