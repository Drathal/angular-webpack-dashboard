var angular = require('angular');
import { } from 'd3';
import { } from 'nvd3';
import { } from 'angular-nvd3';

module.exports = angular
    .module('app.charttest', [
        'nvd3',
        require('../../components/menu-service'),
        require('./sample-chart1'),
        require('./sample-chart2')
    ])
    .config(require('./chart-test.route.js'))
    .run(require('./chart-test.menu.js'))
    .name;
