var angular = require('angular');

module.exports = angular
    .module('component.ui.featurea', [])
    .directive('featureA', function() {
        return {
            scope: {
                data: '='
            },
            controller: require('./feature-a-ui.ctrl'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./feature-a-ui.html')
        };
    })
    .name;
