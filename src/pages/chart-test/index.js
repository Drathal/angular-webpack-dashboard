var angular = require('angular');
require('imports?this=>window!chart.js');
require('imports?define=>false!angular-chart.js');
require('../../../node_modules/angular-chart.js/dist/angular-chart.css');

module.exports = angular
    .module('app.charttest', [
        require('../../components/menu-service'),
        'chart.js'
    ])
    .config(require('./chart-test.route.js').config)
    .run(require('./chart-test.route.js').run)
    .name;
