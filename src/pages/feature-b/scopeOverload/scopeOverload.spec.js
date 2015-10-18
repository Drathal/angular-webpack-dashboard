describe('page', function () {
    describe('feature-b', function () {

        describe('directive scopeOverload', function () {

            var element;
            var $scope;

            beforeEach(function () {
                angular.mock.module(require('./index.js'));
                angular.mock.module(require('../../../components/userinfo-ui'));
                angular.mock.inject(function ($rootScope, $compile) {
                    element = angular.element('<span ui-user-info scope-overload="' + '{ \'name\' : \'Lucy\' }' + '"></span>');
                    $scope = $rootScope.$new();
                    $compile(element)($scope);
                    $scope.$digest();
                });
            });

            it('should manipulate the user-info scope', function () {
                expect($scope.overload.name).to.equal('Lucy');
            });

        });

        describe('directive scopeOverload', function () {

            var element;
            var $scope;

            beforeEach(function () {
                angular.mock.module(require('./index.js'));
                angular.mock.module(require('../../../components/userinfo-ui'));
                angular.mock.inject(function ($rootScope, $compile) {
                    element = angular.element('<span ui-user-info scope-overload></span>');
                    $scope = $rootScope.$new();
                    $compile(element)($scope);
                    $scope.$digest();
                });
            });

            it('should manipulate the user-info scope to the default value', function () {
                expect($scope.overload.name).to.equal('Donald, Demo');
            });

        });

    });

});
