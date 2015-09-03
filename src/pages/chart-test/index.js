var angular = require('angular');
require('chart.js/Chart.js');

module.exports = angular
    .module('app.charttest', [
        require('../../components/menu-service')

        //,require('angular-chart.js')
    ])
    .config(require('./chart-test.route.js').config)
    .run(require('./chart-test.route.js').run)
    .name;
