require('../../../node_modules/angular-material/angular-material.scss');
require('../../../node_modules/angular-loading-bar/build/loading-bar.css');
require('../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.scss');
require('./app.scss');
require('jquery');
require('lodash');

var angular = require('angular');

var modules = [
    require('angular-material'),
    require('angular-ui-router'),
    require('angular-sanitize'),
    require('angular-cookies'),
    require('angular-translate'),
    require('angular-translate-storage-cookie'),
    require('angular-translate-storage-local'),
    require('angular-loading-bar'),
    require('../../components'),
    require('../../pages')
];

module.exports = angular
    .module('app', modules)
    .constant(require('./app.constants').name, require('./app.constants').value)
    .config(require('./app.config'))
    .directive('app', function () {
        return {
            restrict: 'E',
            transclude: true,
            template: require('./app.html'),
            controller: require('./app.ctrl.js'),
            controllerAs: 'app'
        };
    })
    .name;
