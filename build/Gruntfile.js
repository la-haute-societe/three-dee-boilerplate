// ----------------------------------------------------------------------------- FILES

var config = {

    // Path to the main typescript app file
    typescriptAppFile: 'src/app/App',

    input: {

        libs: [
            // Include TweenLite
            '../lib/gsap/src/minified/TweenLite.min.js',
            '../lib/gsap/src/minified/TimelineLite.min.js',
            '../lib/gsap/src/minified/easing/*.js',
            '../lib/gsap/src/minified/plugins/*.js',

            // Include require
            '../lib/requirejs/require.js',

            // Include three
            '../lib/three.js/three.min.js'
        ],

        // Compiled typescript files (not included if not imported in App code)
        typescript: [
            '../lib/**/*.ts',
            '../src/**/*.ts'
        ]
    },

    output: {
        // Single javascript output big boy file
        javascript: '../deploy/script.js',

        // Temporary typescript folder (before optimisation)
        // and output file (optimised)
        typescript: {
            folder: 'temp/typescript/',
            file: 'temp/typescript.js'
        }
    }
};

// ----------------------------------------------------------------------------- PLUGINS
module.exports = function (grunt)
{
    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-clean-ts-extends');
    grunt.loadNpmTasks('grunt-contrib-requirejs');


    // Project and plugins configuration
    grunt.initConfig({

    	// --------------------------------------------------------------------- SERVER
    	
    	connect: {
    		server: {
    			options: {
    				useAvailablePort: true,
    				base: '../deploy/',
    				livereload: true,
    				open: true
    			}
    		}
    	},

        // --------------------------------------------------------------------- UTILS

        // Clean folders / files before transpiling
        clean: {
            typescript: [
                config.output.typescript.folder
            ]
        },

        // --------------------------------------------------------------------- SCRIPTS

        // Configure typescript to javascript compilation
        typescript: {
            all: {
                options: {
                    module: 'amd',
                    target: 'es5',
                    rootDir: '../',

                    sourceMap: false,
                    declaration: false,
                    noResolve: false,

                    references: [
                        // TSD definitions
                        "typings/**/*.d.ts"
                    ]
                },
                src: config.input.typescript,
                dest: config.output.typescript.folder
            }
        },

        // Optimize commonjs modules from typescript
        requirejs: {
            all: {
                options: {
                    baseUrl: config.output.typescript.folder,

                    // Name of the app file
                    name: config.typescriptAppFile,

                    // Output typescript file
                    out: config.output.typescript.file,

                    // Other stuff
                    paths: {},
                    findNestedDependencies: false,
                    wrap: true,
                    optimize: "none"
                }
            }
        },

        // Clean extends statements added by typescript compiler
        cleanTsExtends: {
            src: config.output.typescript.file
        },

        // Concat all javascript files in one
        concat: {
            options: {
                separator: ';\n',
                stripBanners: true
                //banner: '"use strict";\n'
            },

            js: {
                src: [config.input.libs].concat([
                    config.output.typescript.file
                ]),
                dest: config.output.javascript
            }
        },

        // Obfuscate, compress and disable logs on concatenated javascript file
        uglify: {
            options: {
                mangle: false,
                footer: ""
            },
            js: {
                src: config.output.javascript,
                dest: config.output.javascript
            }
        },

        // --------------------------------------------------------------------- WATCH

        // Configure watch to auto-recompile when a file is updated
        watch: {
            options: {
                livereload  : true,
                interrupt   : false
            },

            // Watch script sources files
            script: {
                files: config.input.typescript,
                tasks: ['script']
            },

            // Watch changes on this file
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['default']
            }
        }
    });

    // ------------------------------------------------------------------------- TASKS

    // Get all scripts in one JS file
    grunt.registerTask('script', ['clean:typescript', 'typescript:all', 'requirejs:all', 'cleanTsExtends', 'concat:js']);

    // Local dev task (without code compression / obfuscation)
    grunt.registerTask('dev', ['script']);

    // Production task (with code compression / obfuscation)
    grunt.registerTask('dist', ['dev', 'uglify:js']);

    // Run "dev" and watch on default
    grunt.registerTask('default', ['dev', 'connect:server', 'watch']);
};