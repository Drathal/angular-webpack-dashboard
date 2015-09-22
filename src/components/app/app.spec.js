describe('component', function () {
    describe('app', function () {

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(angular.mock.module(require('./index.js')));
            beforeEach(inject(function ($rootScope, $compile) {
                element = angular.element('<div app></div>');
                $scope = $rootScope;
                $compile(element)($scope);
                $scope.$digest();
            }));

            it('should render the app directive', function () {
                expect($(element).attr('ui-view')).to.equal('layout');
            });

        });

    });

});
