var webpackConfig = require('./webpack/webpack.test.js')();

module.exports = function karmaConfig(config) {
    config.set({

        basePath: '',

        frameworks: [
            'mocha',
            'sinon-chai',
            'phantomjs-shim'
        ],

        reporters: [
            'spec',
            'coverage'
        ],

        files: [
            {pattern: 'node_modules/angular/angular.js', watched: false},
            {pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false},
            {pattern: 'node_modules/bardjs/dist/bard.js', watched: false},
            {pattern: 'webpack/test.bundle.js', watched: false}
        ],

        preprocessors: {
            'webpack/test.bundle.js': ['webpack', 'sourcemap']
        },

        browsers: ['PhantomJS'],

        captureTimeout: 60000,

        autoWatch: false,

        singleRun: true,

        webpack: webpackConfig,

        coverageReporter: {
            reporters: [
                {type: 'html', dir: 'coverage/', subdir: './html'},
                {type: 'text-summary'},
                {type: 'cobertura', dir: 'coverage/', subdir: './'},
                {type: 'lcovonly', dir: 'coverage/', subdir: './'}
            ]
        },

        plugins: [
            'karma-webpack',
            'karma-coverage',
            'karma-mocha',
            'karma-sinon-chai',
            'karma-spec-reporter',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-phantomjs-shim',
            'istanbul-instrumenter-loader',
            'json-loader'
        ],

        colors: true,

        // values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR

    });
};
