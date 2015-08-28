require('../../node_modules/angular-material/angular-material.scss');
require('../../node_modules/angular-loading-bar/build/loading-bar.css');
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
    require('../components'),
    require('../pages')
];

module.exports = angular
    .module('app', modules)
    .constant(require('./constants').name, require('./constants').value)
    .config(require('./config'))
    .name;
