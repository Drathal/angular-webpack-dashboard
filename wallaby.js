var babel = require('babel');
var wallabyWebpack = require('wallaby-webpack');
var webpackTestConfig = require('./webpack/webpack.test.js')();
var path = require('path');

module.exports = function (wallaby) {

    delete webpackTestConfig.devtool;

    webpackTestConfig.entryPatterns = [
        'webpack/test.bundle.js',
        'src/**/*.spec.js'
    ];

    return {
        files: [
            {pattern: 'node_modules/karma-sinon-chai/node_modules/chai/chai.js', instrument: false},
            {pattern: 'node_modules/karma-sinon-chai/node_modules/sinon/lib/sinon.js', instrument: false},
            {pattern: 'node_modules/karma-sinon-chai/node_modules/sinon-chai/lib/sinon-chai.js', instrument: false},

            {pattern: 'src/assets/**/*', instrument: false},

            {pattern: 'node_modules/**/*.scss', load: false},
            {pattern: 'node_modules/**/*.css', load: false},
            {pattern: 'src/**/*.spec.js', ignore: true},
            {pattern: 'src/**/*.js', load: false},
            {pattern: 'src/**/*.scss', load: false},
            {pattern: 'src/**/*.css', load: false},
            {pattern: 'src/**/*.html', load: false},

            {pattern: 'webpack/test.bundle.js', instrument: false}
        ],

        tests: [
            {pattern: 'src/**/*.spec.js', load: false}
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({babel: babel, stage: 0})
        },

        postprocessor: wallabyWebpack(webpackTestConfig),

        env: {
            type: 'browser'
        },

        testFramework: 'mocha',

        debug: false,

        bootstrap: function () {
            window.expect = chai.expect;
            window.__moduleBundler.loadTests();
        }
    };
};
