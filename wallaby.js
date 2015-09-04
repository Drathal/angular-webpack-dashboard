var wallabyWebpack = require('wallaby-webpack');
var webpackTestConfig = require('./webpack/webpack.test.js')();

delete webpackTestConfig.devtool;

var webpackPostprocessor = wallabyWebpack(webpackTestConfig);

module.exports = function(wallaby) {
    return {
        files: [
            {
                pattern: 'src/**/*.spec.js',
                ignore: true
            },
            {
                pattern: 'node_modules/karma-sinon-chai/node_modules/chai/chai.js',
                instrument: false
            },
            {
                pattern: 'node_modules/karma-sinon-chai/node_modules/sinon/lib/sinon.js',
                instrument: false
            },
            {
                pattern: 'node_modules/karma-sinon-chai/node_modules/sinon-chai/lib/sinon-chai.js',
                instrument: false
            },
            {
                pattern: 'src/**/*.*',
                load: false
            }

        ],

        tests: [
            {
                pattern: 'src/**/*.spec.js',
                load: false
            }
        ],

        env: {
            type: 'browser'
        },

        testFramework: 'mocha',

        debug: false,

        postprocessor: webpackPostprocessor,

        resolve: {
            modulesDirectories: [
                'node_modules'
            ]
        },

        bootstrap: function() {

            var mocha = wallaby.testFramework;
            mocha.ui('bdd');

            window.expect = chai.expect;
            window.assert = chai.assert;
            window.should = chai.should();

            window.__moduleBundler.loadTests();
        }
    };
};
