var angular = require('angular');

module.exports = angular
    .module('component.service.translationLoader', [])

    .filter('htmlSafe', function ($sce) {
        return function (htmlCode) {
            return $sce['trustAsHtml'](htmlCode);
        };
    })

    .directive('bindHtmlCompile', ['$compile', function ($compile) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(function () {
                    return scope.$eval(attrs['bindHtmlCompile']);
                }, function (value) {

                    element.html(value && value.toString());
                    var compileScope = scope;
                    if (attrs['bindHtmlScope']) {
                        compileScope = scope.$eval(attrs['bindHtmlScope']);
                    }

                    $compile(element.contents())(compileScope);
                });
            }
        };
    }])

    .provider('translationLoader', function () {

        var self = this;
        self.parts = {};
        self.translations = {};
        self.handler = [];

        this.add = function (part, where) {
            self.parts[part] = {
                _where: where.replace(/\\/g, '/'),
                _name: part
            };
        };

        this.bundle = function (langPart, key, $q) {
            var k;
            var d = $q.defer();
            require('bundle!../../' + self.parts[langPart]._where + '/i18n/' + key + '.json')(function (data) {
                for (k in data) {
                    if (data.hasOwnProperty(k)) {
                        self.translations[key][k] = data[k];
                    }
                }

                d.resolve(data[k]);
            });

            return d.promise;
        };

        this.$get = function ($q) {

            return function (options) {
                var deferred = $q.defer();
                var langPart;

                self.translations[options.key] = {};

                for (langPart in self.parts) {
                    if (self.parts.hasOwnProperty(langPart)) {
                        self.handler.push(self.bundle(langPart, options.key, $q));
                    }
                }

                $q.all(self.handler).then(function () {
                    deferred.resolve(self.translations[options.key]);
                });

                return deferred.promise;
            };

        };

    })
    .name;

