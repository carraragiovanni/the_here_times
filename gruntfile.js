const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'public/main.css': 'app/css/main.scss'
                }
            }
        },
        
        handlebars: {
            compile: {
                options: {
                    processName: function (filePath) {
                        var pieces = filePath.split('/');
                        return pieces[pieces.length - 1].split('.')[0];
                    }
                },
                files: {
                    "app/js/templates.js": ["app/hbs/*.hbs"]
                }
            }
        },
        
        
        concat: {
            customjs: {
                src: 'app/js/**/*.js',
                dest: 'public/main.js',
            },
            libs: {
                src: [
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/moment/moment.js',
                    'node_modules/dexie/dist/dexie.js',
                    'node_modules/underscore/underscore.js',
                    'node_modules/axios/dist/axios.js',
                    'node_modules/webfontloader/webfontloader.js',
                    'node_modules/handlebars/dist/handlebars.js',
                ],
                dest: 'public/libs.js'
            }
        },
        // uglify: {
        //     my_target: {
        //         files: {
        //             'banana.js': ["public/libs.js"]
        //         }
        //     }
        // },
        
        watch: {
            // uglify: {
            //     files: 'app/js/**/*.js',
            //     tasks: 'default'
            // },
            customjs: {
                files: 'app/js/**/*.js',
                tasks: 'concat:customjs'
            },
            hbs: {
                files: ['app/hbs/*.hbs'],
                tasks: ['handlebars', 'concat:customjs'],
                options: {
                    nospawn: true
                }
            },
            customcss: {
                files: 'app/css/**/*.scss',
                tasks: 'sass'
            },
            grunt: {
                files: 'gruntfile.js',
                tasks: 'default'
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['concat', 'handlebars', 'sass', 'watch', 'uglify']);
};