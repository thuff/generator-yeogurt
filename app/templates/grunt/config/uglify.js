/**
 * uglify.js
 * Configuration for uglify task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('uglify', {
        dist: {
            options: {
                mangle: true,
                preserveComments: 'some',
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            expand: true,
            cwd: '<%%= yeogurt.dist %>/bower_components/',
            dest: '<%%= yeogurt.dist %>/bower_components/',
            src: [<% if (jsOption === 'RequireJS') { %>
                'requirejs/require.js',<% } %>
                'modernizr/modernizr.js'
            ],
            ext: '.js'
        },<% if (jsOption !== 'None (Vanilla JavaScript)') { %>
        distJS: {
            options: {
                mangle: true,
                preserveComments: 'some',
                sourceMap: true,
                sourceMapIncludeSources: true
            },
            expand: true,
            cwd: '<%%= yeogurt.dev %>/scripts/',
            dest: '<%%= yeogurt.dist %>/scripts/',
            src: ['{,*/}{,*/}*.js', '!*.js'],
            ext: '.js'
        }<% } %><% if (jsOption === 'Browserify') { %>,
        distBrowserify: {
            options: {
                mangle: true,
                preserveComments: 'some',
            },
            expand: true,
            cwd: '<%%= yeogurt.dist %>/scripts/',
            dest: '<%%= yeogurt.dist %>/scripts/',
            src: ['main.js']
        }<% } %>
    });

    // grunt.loadNpmTasks('grunt-contrib-uglify');
};