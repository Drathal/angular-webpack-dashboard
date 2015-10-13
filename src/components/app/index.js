require('../../../node_modules/angular-material/angular-material.scss');
require('../../../node_modules/angular-loading-bar/build/loading-bar.css');
require('../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.scss');
require('jquery');
require('lodash');
require('./app.scss');

var angular = require('angular');

import { App } from './app';
import { } from 'angular-gettext';
import { } from 'angular-local-storage';

var modules = [
    'gettext',
    'LocalStorageModule',
    require('angular-material'),
    require('angular-ui-router'),
    require('angular-sanitize'),
    require('angular-cookies'),
    require('angular-messages'),
    require('angular-loading-bar'),
    require('../../components'),
    require('../../pages')
];

module.exports = angular
    .module('app', modules)
    .constant(require('./app.constants').name, require('./app.constants').value)
    .config(require('./app.config'))
    .run(function (gettextCatalog, APPCONFIG, localStorageService, $window) {

        var userLang = $window.navigator.language || $window.navigator.userLanguage;

        gettextCatalog.debug = true;

        for (var i = 0; i < APPCONFIG.languages.length; i++) {
            var langIso = APPCONFIG.languages[i].key;
            gettextCatalog.setStrings(langIso, require('../../translation/' + langIso + '.po')[langIso]);

            if (langIso == userLang && !localStorageService.get('dashboardLang')) {
                gettextCatalog.setCurrentLanguage(langIso);
            }
        }

        if (!localStorageService.get('dashboardLang')) {
            localStorageService.set('dashboardLang', gettextCatalog.getCurrentLanguage());
        }

        gettextCatalog.setCurrentLanguage(localStorageService.get('dashboardLang'));

    })
    .directive('app', App.directive)
    .name;
