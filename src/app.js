var angular = require('angular');

angular.element(document).ready(function() {
    angular.module('bootstrap', [require('./components/app-ui')]);
    angular.bootstrap(document, ['bootstrap']);
});
