describe('component', function () {
    describe('hello-react ui', function () {

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(function () {
                angular.mock.module(require('./index.js'));
                angular.mock.inject(function ($rootScope, $compile) {
                    element = angular.element('<hello-react myname="test"></hello-react>');
                    $scope = $rootScope;
                    $compile(element)($scope);
                    $scope.$digest();
                });
            });

            it('should render the counter directive', function () {
                expect($(element).text()).to.equal('hello test! I am a react.js component.');
            });

        });

    });

});
