exports.config = {

    getPageTimeout: 60000,

    allScriptsTimeout: 60000,

    specs: ['../src/**/*.feature'],

    framework: 'cucumber',

    baseUrl: 'http://localhost:8080',

    cucumberOpts: {
        require: [
            '../src/**/stepDefinitions.js',
            'stepDefinitions.js'
        ],
        format: 'pretty'

        //tags: '@dev',
    },

    multiCapabilities: [{
        selemiumAddress: 'http://localhost:4444/wd/hub',
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path
    }],

    onPrepare: function () {

        browser.ignoreSynchronization = false;

        // browser.driver.manage().window().maximize();
        // browser.driver.manage().window().setSize(1600, 800);

        // disable animations for testing
        var disableNgAnimate = function () {
            angular.module('disableNgAnimate', []).run(function ($animate) {
                $animate.enabled(false);
            });
        };

        browser.addMockModule('disableNgAnimate', disableNgAnimate);

        require('protractor-linkuisref-locator')(protractor);
    }
};
