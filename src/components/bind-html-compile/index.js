var angular = require('angular');

module.exports = angular
    .module('component.ui.bindHtmlCompile', [])
    .directive('bindHtmlCompile', require('./bind-html-compile.ctrl'))
    .name;
