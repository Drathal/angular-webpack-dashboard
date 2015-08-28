var angular = require('angular');

angular.element(document).ready(function() {
    angular.module('bootstrap', [require('./main')]);
    angular.bootstrap(document, ['bootstrap']);
});
