var webpackConfig = require('./webpack/webpack.test.js')();

module.exports = function karmaConfig(config) {
    config.set({

        basePath: '',
        port: 9999,
        runnerPort: 9998,

        frameworks: [
            'mocha',
            'sinon-chai',
            'phantomjs-shim'
        ],

        reporters: [
            'spec',
            'coverage',
            'coveralls'
        ],

        files: [
            {pattern: 'webpack/test.bundle.js', watched: false}
        ],

        preprocessors: {
            'webpack/test.bundle.js': ['webpack', 'sourcemap']
        },

        browsers: ['PhantomJS'],

        captureTimeout: 60000,
        browserDisconnectTimeout: 60000,
        browserNoActivityTimeout: 200000,

        autoWatch: false,
        singleRun: true,

        webpack: webpackConfig,

        webpackServer: {
            noInfo: true
        },

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
            'karma-coveralls',
            'karma-mocha',
            'karma-sinon-chai',
            'karma-spec-reporter',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-sourcemap-loader',
            'karma-phantomjs-shim',
            'isparta-instrumenter-loader',
            'json-loader'
        ],

        colors: true,

        // values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG

    });
};
