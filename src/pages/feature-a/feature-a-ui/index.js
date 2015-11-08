var angular = require('angular');
import LocalCSS from '../../../components/local-css/index';
var css = require('./feature-a-ui.scss');
var html = require('./feature-a-ui.html');

module.exports = angular
    .module('component.ui.featurea', [])
    .directive('featureA', function () {
        return {
            scope: {
                data: '='
            },
            replace: true,
            controller: require('./feature-a-ui.ctrl'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: LocalCSS(css, html)
        };
    })
    .name;
