var LanguageService = require('./language-service');

describe('component', function () {
    describe('language service', function () {

        var service;
        var _APPCONFIG;
        var _$window;
        var _gettextCatalog;
        var _localStorageService;
        var lang = false;

        beforeEach(function () {
            require('angular-gettext');
            angular.mock.module('gettext');
            require('angular-local-storage');
            angular.mock.module('LocalStorageModule');
            angular.mock.module(function ($provide) {
                $provide.value('APPCONFIG', {
                    languages: [
                        {
                            name: 'English',
                            key: 'en',
                            icon: 'gb'
                        }, {
                            name: 'German',
                            key: 'de'
                        }
                    ]
                });
                $provide.value('$window', {
                    navigator: {
                        language: 'de',
                        userLanguage: 'de'
                    }
                });

            });
            angular.mock.inject(function ($window, APPCONFIG, gettextCatalog) {
                _APPCONFIG = APPCONFIG;
                _$window = $window;
                _gettextCatalog = gettextCatalog;
                _localStorageService = {
                    get: function (prop) {
                        return lang;
                    },
                    set: function (prop, l) {
                        lang = l;
                    }
                };
                service = new LanguageService.component(gettextCatalog, APPCONFIG, _localStorageService, $window);
            });
        });

        it('should have a getLanguages method', function () {
            expect(service.getLanguages).to.be.a('function');
            expect(service.getLanguages()).to.deep.equal(_APPCONFIG.languages);
        });

        it('should have a getBrowserLanguage method', function () {
            expect(service.getBrowserLanguage).to.be.a('function');
            expect(service.getBrowserLanguage()).to.equal('de');
            var service2 = new LanguageService.component(_gettextCatalog, _APPCONFIG, _localStorageService, {
                navigator: {
                    language: false,
                    userLanguage: 'en'
                }
            });
            expect(service2.getBrowserLanguage()).to.equal('en');
        });

        it('should have a setCurrentLanguage method', function () {
            expect(service.setCurrentLanguage).to.be.a('function');
            service.setCurrentLanguage('fr');
            expect(_gettextCatalog.getCurrentLanguage()).to.equal('fr');
        });

        it('should have a getCurrentLanguage method', function () {
            expect(service.getCurrentLanguage).to.be.a('function');
            service.setCurrentLanguage('tr');
            expect(service.getCurrentLanguage()).to.equal('tr');
        });

        it('should have a markMissingTranslations method', function () {
            expect(service.markMissingTranslations).to.be.a('function');
            service.markMissingTranslations(true);
            expect(_gettextCatalog.debug).to.equal(true);
            service.markMissingTranslations(false);
            expect(_gettextCatalog.debug).to.equal(false);
        });

        it('should have a init method', function () {
            expect(service.init).to.be.a('function');

            lang = false;
            service.init();
            expect(service.getCurrentLanguage()).to.equal('de');

            lang = 'en';
            service.init();
            expect(service.getCurrentLanguage()).to.equal('en');
        });

    });

});
