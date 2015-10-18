describe('page', function () {
    describe('feature-b', function () {

        describe('directive feature-b-ui', function () {

            var element;
            var $scope;

            beforeEach(function () {
                require('angular-gettext');
                angular.mock.module('gettext');
                angular.mock.module(require('./index.js'));
                angular.mock.inject(function ($rootScope, $compile) {
                    element = angular.element('<feature-b></feature-b>');
                    $scope = $rootScope.$new();
                    $compile(element)($scope);
                    $scope.$digest();
                });
            });

            it('should render the template', function () {
                expect($(element).find('md-button').length).to.equal(1);
            });

        });

    });

});
