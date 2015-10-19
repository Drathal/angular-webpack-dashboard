var angular = require('angular');

module.exports = angular
    .module('app.pages', [
        require('./feature-a'),
        require('./feature-b'),
        require('./feature-c'),
        require('./chart-test'),
        require('./login')
    ])
    .name;

