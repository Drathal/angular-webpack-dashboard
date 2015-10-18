var angular = require('angular');
require('./sample-chart1.scss');

module.exports = angular
    .module('component.ui.samplechart1', [])
    .directive('sampleChart1', function() {
        return {
            scope: {},
            controller: require('./sample-chart1.ctrl.js'),
            controllerAs: 'chart',
            bindToController: true,
            template: require('./sample-chart1.html')
        };
    })
    .name;
