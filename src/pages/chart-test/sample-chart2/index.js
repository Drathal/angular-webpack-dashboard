var angular = require('angular');

module.exports = angular
    .module('component.ui.samplechart2', [])
    .directive('sampleChart2', function() {
        return {
            scope: {},
            controller: require('./sample-chart2.ctrl.js'),
            controllerAs: 'chart',
            bindToController: true,
            template: require('./sample-chart2.html')
        };
    })
    .name;
