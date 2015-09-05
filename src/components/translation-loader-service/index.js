var angular = require('angular');
var _ = require('lodash');
var loadAsync = require('./webpack.loadAsync');

module.exports = angular
    .module('component.service.translationLoader', [])

    .provider('translationLoader', function () {

        var self = this;
        self.parts = [];
        self.translations = {};

        this.add = function (where) {
            self.parts.push(where.replace(/\\/g, '/'));
        };

        this.addLang = function (result, lang, n, deferred) {
            _.merge(self.translations[lang], result);

            if (n === self.parts.length - 1) {
                deferred.resolve(self.translations[lang]);
            }
        };

        this.$get = function ($q) {

            return function (options) {
                var deferred = $q.defer();
                var i;

                self.translations[options.key] = {};

                for (i = 0; i < self.parts.length; i++) {
                    loadAsync(self.parts[i], options.key, i, deferred, self.addLang);
                }

                return deferred.promise;
            };

        };

    })
    .name;

