var webpackConfig = require('../webpack/webpack.test');

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
            '../node_modules/angular/angular.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            '../node_modules/bardjs/dist/bard.js',
            '../test/tests.webpack.js'
        ],

        preprocessors: {
            '../test/tests.webpack.js': ['webpack', 'sourcemap']
        },

        browsers: [
            'PhantomJS'
        ],

        captureTimeout: 60000,

        autoWatch: false,

        singleRun: true,

        webpack: webpackConfig,

        webpackMiddleware: {

            // suppress all output
            noInfo: true,

            // With console colors
            colors: true,

            // add the hash of the compilation
            hash: false,

            // add webpack version information
            version: false,

            // add timing information
            timings: true,

            // add assets information
            assets: false,

            // add chunk information
            chunks: false,

            // add built modules information to chunk information
            chunkModules: false,

            // add built modules information
            modules: false,

            // add also information about cached (not built) modules
            cached: false,

            // add information about the reasons why modules are included
            reasons: false,

            // add the source code of modules
            source: true,

            // add details to errors (like resolving log)
            errorDetails: true,

            // add the origins of chunks and chunk merging info
            chunkOrigins: true,

            // Add messages from child loaders
            children: false
        },

        coverageReporter: {
            reporters: [
                {type: 'html', dir: '../build/coverage/', subdir: './'},
                {type: 'text-summary'},
                {type: 'cobertura', dir: '../coverage/', subdir: './'},
                {type: 'lcovonly', dir: '../coverage/', subdir: './'}
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
            'istanbul-instrumenter-loader',
            'json-loader',
            'karma-phantomjs-shim'
        ],

        colors: true,

        // values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG

    });
};
