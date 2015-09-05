var angular = require('angular');
var _ = require('lodash');

module.exports = angular
    .module('component.service.translationLoader', [])

    .provider('translationLoader', function () {

        var self = this;
        self.parts = [];
        self.translations = {};
        self.handler = [];

        this.add = function (where) {
            self.parts.push(where.replace(/\\/g, '/'));
        };

        this.bundle = function (where, key, $q) {
            var d = $q.defer();

            require.ensure([], function (require) {
                require('bundle!../../' + where + '/i18n/' + key + '.json')(function (data) {
                    d.resolve(data);
                });
            });

            return d.promise;
        };

        this.$get = function ($q) {

            return function (options) {
                var deferred = $q.defer();
                var i;

                self.translations[options.key] = {};

                for (i = 0; i < self.parts.length; i++) {
                    self.handler.push(self.bundle(self.parts[i], options.key, $q));
                }

                $q.all(self.handler).then(function (translation) {
                    for (i = 0; i < translation.length; i++) {
                        _.merge(self.translations[options.key], translation[i]);
                    }

                    deferred.resolve(self.translations[options.key]);
                });

                return deferred.promise;
            };

        };

    })
    .name;

