describe('component', function () {
    describe('menu-ui', function () {

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(function () {
                require('angular-gettext');
                angular.mock.module('gettext');
                angular.mock.module('component.service.menu');
                angular.mock.module(require('./index.js'));
                angular.mock.inject(function ($rootScope, $compile, menuService) {

                    menuService.addMenu({
                        name: 'TEST1',
                        icon: 'testicon1',
                        state: 'teststate1',
                        type: 'link'
                    });

                    menuService.addMenu({
                        name: 'TEST2',
                        icon: 'testicon2',
                        state: 'teststate2',
                        type: 'link'
                    });

                    element = angular.element('<ui-menu></ui-menu>');
                    $scope = $rootScope;

                    $compile(element)($scope);
                    $scope.$digest();

                });
            });

            it('should render the app directive and add two menu items', function () {
                expect($(element).find('md-button').length).to.equal(2);
            });

        });

    });

});
