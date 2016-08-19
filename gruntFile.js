module.exports = function (grunt) {
    //配置参数
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {},
            dist: {
                files: {
                    'dist/aniAuto.min.js': 'aniAuto.js'
                }
            }
        }
    });

    //载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-uglify');


    //注册任务
    grunt.registerTask('default', ['uglify']);

}