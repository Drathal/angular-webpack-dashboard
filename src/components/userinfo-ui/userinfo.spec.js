var UserInfoCtrl = require('./userinfo.ctrl');

describe('component', function () {
    describe('user info', function () {

        describe('controller', function () {
            var controller;
            var open;

            beforeEach(function () {
                controller = new UserInfoCtrl();
            });

            it('should have a default name', function () {
                expect(controller.name).to.be.a('string');
            });

            it('should open the menu', function () {

                controller.openMenu(function () {
                    open = true;
                }, 'event');

                expect(open).to.equal(true);
            });

        });

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(function () {
                angular.mock.module(require('./index.js'));
                angular.mock.inject(function ($rootScope, $compile) {
                    element = angular.element('<ui-user-info></ui-user-info>');
                    $scope = $rootScope;
                    $compile(element)($scope);
                    $scope.$digest();
                });
            });

            it('should render the ui-user-info directive', function () {
                expect($(element).find('md-menu').length).to.equal(1);
            });

        });

    });
});
