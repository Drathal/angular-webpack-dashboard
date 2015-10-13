var LanguageSelectCtrl = require('./language-select.ctrl');

describe('component', function () {
    describe('language select', function () {

        describe.skip('controller', function () {
            var controller;
            var langKey;
            var open;

            before(function () {
                controller = new LanguageSelectCtrl();
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

        describe.skip('directive', function () {

            var element;
            var $scope;

            beforeEach(function () {
                angular.mock.module(require('./index.js'));
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
