var CounterCtrl = require('./counter.ctrl');

describe('component', function () {
    describe('counter ui', function () {

        describe('controller', function () {
            var controller;

            before(function () {
                controller = new CounterCtrl();
            });

            it('should have a demo property', function () {
                expect(controller.property).to.be.a('string');
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

            beforeEach(angular.mock.module('component.service.translationLoader'));
            beforeEach(angular.mock.module(require('./index.js')));
            beforeEach(inject(function ($rootScope, $compile) {
                element = angular.element('<counter></counter>');
                $scope = $rootScope;
                $compile(element)($scope);
                $scope.$digest();
            }));

            it('should render the counter directive', function () {
                expect($(element).find('md-button').length).to.equal(1);
            });

        });

    });

});
