describe('component', function () {
    describe('layout-sidebar', function () {

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(angular.mock.module('ui.router'));
            beforeEach(angular.mock.module('pascalprecht.translate'));
            beforeEach(angular.mock.module('ngMaterial'));
            beforeEach(angular.mock.module(require('./index.js')));
            beforeEach(inject(function ($rootScope, $compile) {
                element = angular.element('<layout-sidebar></layout-sidebar>');
                $scope = $rootScope;
                $compile(element)($scope);
                $scope.$digest();
            }));

            it('should render the app directive', function () {
                expect($(element).find('md-sidenav').length).to.equal(1);
                expect($(element).find('md-content').length).to.equal(2);
            });

        });

    });

});
