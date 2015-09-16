describe('component', function () {
    describe('bind-html-file', function () {

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(angular.mock.module('component.service.translationLoader'));
            beforeEach(angular.mock.module(require('./index.js')));
            beforeEach(inject(function ($rootScope, $compile) {
                element = angular.element('<span bind-html-compile="teststring"></span>');
                $scope = $rootScope;
                $scope.teststring = 'test <b>test <span bind-html-compile="teststring2"></span></b>';
                $scope.teststring2 = 'test <b class="testclass">test2</b>';
                $compile(element)($scope);
                $scope.$digest();
            }));

            it('should render the app directive', function () {
                expect($(element).find('b.testclass').length).to.equal(1);
            });

        });

    });

});
