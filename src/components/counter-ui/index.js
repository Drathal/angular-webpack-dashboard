var angular = require('angular');

module.exports = angular
    .module('component.ui.counter', [])
    .directive('counter', function () {
        return {
            scope: {},
            controller: require('./counter.ctrl'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./counter.html')
        };
    })
    .name;
