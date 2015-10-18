var angular = require('angular');

module.exports = angular
    .module('app.charttest', [
        require('../../components/menu-service'),
        require('./sample-chart1'),
        require('./sample-chart2')
    ])
    .config(require('./chart-test.route.js'))
    .run(require('./chart-test.menu.js'))
    .name;
