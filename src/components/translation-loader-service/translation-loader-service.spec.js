describe('component', function () {
    describe('translation-loader-service', function () {

        var element;
        var $scope;
        var translationLoaderProvider;

        function providerGetter(moduleName, providerName) {
            var provider;
            angular.mock.module(moduleName, [providerName, function (Provider) {
                provider = Provider;
            }]);
            return function () {
                angular.mock.inject();
                return provider;
            };
        }

        beforeEach(function () {
            angular.module('test', []);
            angular.mock.module(require('./index.js'));
            translationLoaderProvider = providerGetter('test', 'translationLoaderProvider')();
        });

        it('should a new translation', function () {
            expect(translationLoaderProvider.parts.length).to.equal(0);
            translationLoaderProvider.add(__dirname);
            expect(translationLoaderProvider.parts.length).to.equal(1);
        });

        it('should add the language object', function () {
            var res;
            translationLoaderProvider.translations.de = {};
            translationLoaderProvider.add(__dirname);
            translationLoaderProvider.addLang({ test: 1 }, 'de', 0, {
                resolve: (l)=> {
                    res = l;
                }
            });

            expect(res).to.deep.equal({ test: 1 });
        });

        it('should not return defered object when its not the last added lang ', function () {
            var res;
            translationLoaderProvider.translations.de = {};
            translationLoaderProvider.add(__dirname);
            translationLoaderProvider.addLang({ test: 1 }, 'de', 1, {
                resolve: (l)=> {
                    res = l;
                }
            });

            expect(res).to.not.deep.equal({ test: 1 });
        });

    });
});
