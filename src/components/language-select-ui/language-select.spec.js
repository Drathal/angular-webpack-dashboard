var LanguageSelectCtrl = require('./language-select.ctrl');

describe('component', function () {
    describe('language select', function () {

        describe('controller', function () {
            var controller;
            var langKey;
            var open;

            beforeEach(function () {
                var languageService = {
                    getLanguages: function () {
                        return [
                            {
                                name: 'English',
                                key: 'en',
                                icon: 'gb'
                            }, {
                                name: 'German',
                                key: 'de'
                            }
                        ];
                    },
                    getCurrentLanguage: function () {
                        return 'de';
                    },
                    setCurrentLanguage: function (lang) {
                        langKey = lang;
                    }

                };

                controller = new LanguageSelectCtrl(languageService);

            });

            it('should have a changeLanguage function', function () {
                expect(controller.changeLanguage).to.be.a('function');
            });

            it('should have a openLanguageMenu function', function () {
                expect(controller.openLanguageMenu).to.be.a('function');
            });

            it('should open the language menu', function () {
                controller.openLanguageMenu(function () {
                    open = true;
                }, 'event');

                expect(open).to.equal(true);
            });

            it('should have a change the languae on changeLanguage call', function () {
                controller.changeLanguage('de');
                expect(langKey).to.equal('de');
                controller.changeLanguage('en');
                expect(langKey).to.equal('en');
            });

        });

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(function () {
                require('angular-gettext');
                angular.mock.module('gettext');
                require('angular-local-storage');
                angular.mock.module('LocalStorageModule');
                angular.mock.module(require('../language-service/index.js'));
                angular.mock.module(require('./index.js'));
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

                });
                angular.mock.inject(function ($rootScope, $compile) {
                    element = angular.element('<ui-language-select></ui-language-select>');
                    $scope = $rootScope;
                    $compile(element)($scope);
                    $scope.$digest();
                });
            });

            it('should render the ui-language-select directive', function () {
                expect($(element).find('md-menu').length).to.equal(1);
            });

        });
    });
});
