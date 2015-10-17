var CounterCtrl = require('./counter.ctrl');

describe('component', function () {
    describe('counter ui', function () {

        describe('controller', function () {
            var controller;

            before(function () {
                controller = new CounterCtrl();
            });

            it('should increment the counter', function () {
                expect(controller.increment).to.be.a('function');
                expect(controller.count).to.equal(0);
                controller.increment();
                expect(controller.count).to.equal(1);
            });
        });

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(function () {
                require('angular-gettext');
                angular.mock.module('gettext');
                angular.mock.module(require('./index.js'));
                angular.mock.inject(function ($rootScope, $compile) {
                    element = angular.element('<span counter></span>');
                    $scope = $rootScope;
                    $compile(element)($scope);
                    $scope.$digest();
                });
            });

            it('should render the counter directive', function () {
                expect($(element).find('md-button').length).to.equal(2);
            });

        });

    });

});
