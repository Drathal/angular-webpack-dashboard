var babel = require('babel');
var wallabyWebpack = require('wallaby-webpack');
var webpackTestConfig = require('./webpack/webpack.test.js')();
var path = require('path');

module.exports = function (wallaby) {

    delete webpackTestConfig.devtool;

    // no need to load other instrumentors and linters
    delete webpackTestConfig.module.preLoaders;

    // removing babel-loader, we will use babel compiler instead
    webpackTestConfig.module.loaders.shift();

    // setting wallaby cache context for __dirname/__filename resolution
    webpackTestConfig.context = path.join(wallaby.projectCacheDir, 'src');

    webpackTestConfig.entryPatterns = [
        'webpack/test.bundle.js',
        'src/**/*.spec.js'
    ];

    return {
        files: [
            {pattern: 'node_modules/karma-sinon-chai/node_modules/chai/chai.js', instrument: false},
            {pattern: 'node_modules/karma-sinon-chai/node_modules/sinon/pkg/sinon.js', instrument: false},
            {pattern: 'node_modules/karma-sinon-chai/node_modules/sinon-chai/lib/sinon-chai.js', instrument: false},

            {pattern: 'src/assets/**/*', instrument: false},

            // Faster start than with scanning all node modules for style files
            {pattern: 'node_modules/angular-material/angular-material.scss', load: false},
            {pattern: 'node_modules/angular-loading-bar/build/loading-bar.css', load: false},
            {pattern: 'node_modules/material-design-icons-iconfont/dist/material-design-icons.scss', load: false},
            {pattern: 'node_modules/angular-chart.js/dist/angular-chart.css', load: false},

            {pattern: 'src/**/*.spec.js', ignore: true},
            {pattern: 'src/**/*.js', load: false},
            {pattern: 'src/**/*.scss', load: false},
            {pattern: 'src/**/*.css', load: false},
            {pattern: 'src/**/*.html', load: false},
            {pattern: 'src/**/*.json', load: false},

            {pattern: 'webpack/test.bundle.js', instrument: false, load: false}
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

        bootstrap: function (w) {
            // Otherwise mocha filters stack entries that contain 'components'
            // see https://github.com/wallabyjs/atom-wallaby/issues/6
            var mocha = w.testFramework;
            mocha.fullTrace();

            window.expect = chai.expect;
            window.__moduleBundler.loadTests();
        }
    };
};
