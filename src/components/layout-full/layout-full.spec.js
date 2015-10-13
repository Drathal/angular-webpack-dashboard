describe('component', function () {
    describe('layout-full', function () {

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(angular.mock.module('ui.router'));
            beforeEach(angular.mock.module(require('./index.js')));
            beforeEach(inject(function ($rootScope, $compile) {
                element = angular.element('<layout-full></layout-full>');
                $scope = $rootScope;
                $compile(element)($scope);
                $scope.$digest();
            }));

            it('should render the app directive', function () {
                expect($(element).find('md-content').length).to.equal(1);
            });

        });

    });

});
