require('./app.scss');

var angular = require('angular');

import { App } from './app';

module.exports = angular
    .module('app', [])
    .config(require('./app.config'))
    .directive('app', App.directive)
    .name;
