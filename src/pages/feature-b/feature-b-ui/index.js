var angular = require('angular');

module.exports = angular
    .module('component.ui.featureb', [])
    .directive('featureB', function () {
        return {
            controller: require('./feature-b-ui.ctrl.js'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./feature-b-ui.html')
        };
    })
    .name;
