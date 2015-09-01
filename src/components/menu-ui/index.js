var angular = require('angular');

module.exports = angular
    .module('component.ui.menu', [
        require('../menu-service')
    ])
    .directive('uiStateMenu', function() {
        return {
            controller: require('./menu.ctrl'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./menu.html')
        };
    })
    .name;
