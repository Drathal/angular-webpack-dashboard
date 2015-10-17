var angular = require('angular');

module.exports = angular
    .module('component.service.language', [])
    .service('languageService', require('./language-service').component)
    .name;
