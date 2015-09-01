var angular = require('angular');

module.exports = angular
    .module('component.service.translationLoader', [])

    .filter('htmlSafe', function($sce) {
        return function(htmlCode) {
            return $sce['trustAsHtml'](htmlCode);
        };
    })

    .directive('bindHtmlCompile', ['$compile', function($compile) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(function() {
                    return scope.$eval(attrs['bindHtmlCompile']);
                }, function(value) {

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

    .provider('translationLoader', function() {

        var self = this;
        self.parts = {};
        self.translations = {};
        self.handler = [];

        this.add = function(part, where) {
            self.parts[part] = {
                _where: where.replace(/\\/g, '/'),
                _name: part
            };
        };

        this.$get = function($q) {

            return function(options) {
                var deferred = $q.defer();
                var langPart;

                self.translations[options.key] = {};

                /**
                 * Actual behavior : make multi requests to all language resources (that are referenced)
                 * todo: bundle all requests for the same language (make one require with multiple bundle calls)
                 */
                for (langPart in self.parts) {
                    self.handler.push(function() {
                        var k;
                        var d = $q.defer();
                        require('bundle!../../' + self.parts[langPart]._where + '/i18n/' + options.key + '.json')(function(data) {
                            for (k in data) {
                                self.translations[options.key][k] = data[k];
                            }

                            d.resolve(data[k]);
                        });

                        return d.promise;
                    }());
                }

                $q.all(self.handler).then(function() {
                    deferred.resolve(self.translations[options.key]);
                });

                return deferred.promise;
            };

        };

    })
    .name;

