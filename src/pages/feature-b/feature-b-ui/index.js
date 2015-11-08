var angular = require('angular');
import LocalCSS from '../../../components/local-css/index';
var css = require('./feature-b-ui.scss');
var html = require('./feature-b-ui.html');

module.exports = angular
    .module('component.ui.featureb', [])
    .directive('featureB', function () {
        return {
            controller: require('./feature-b-ui.ctrl.js'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: LocalCSS(css, html),
            replace: true
        };
    })
    .name;
