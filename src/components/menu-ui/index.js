var angular = require('angular');
require('./menu.scss');

module.exports = angular
    .module('component.ui.menu', [
        require('../menu-service')
    ])
    .directive('uiMenu', function() {
        return {
            controller: require('./menu.ctrl'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./menu.html')
        };
    })
    .name;
