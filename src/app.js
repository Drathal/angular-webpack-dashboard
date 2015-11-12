require('../node_modules/angular-material/angular-material.scss');
require('../node_modules/angular-loading-bar/build/loading-bar.css');
require('../node_modules/material-design-icons-iconfont/dist/material-design-icons.scss');
require('../node_modules/nvd3/build/nv.d3.css');
require('jquery');
require('lodash');

import { } from 'angular-gettext';
import { } from 'angular-local-storage';

var angular = require('angular');

var modules = [
    'gettext',
    'LocalStorageModule',
    require('angular-material'),
    require('angular-ui-router'),
    require('angular-sanitize'),
    require('angular-cookies'),
    require('angular-messages'),
    require('angular-loading-bar'),
    require('./components'),
    require('./pages')
];

angular.element(document).ready(function() {
    angular.module('bootstrap', modules)
        .constant('APPCONFIG', require('./config.languages.js'))
        .config(require('./config.theme.js'))
        .config(require('./config.loading-bar.js'))
        .run(/* @ngInject */ function (languageService) {
            languageService.init();
        });
    angular.bootstrap(document, ['bootstrap']);
});
