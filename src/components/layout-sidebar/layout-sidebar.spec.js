var { LayoutSidebar } = require('./layout-sidebar');

describe('component', function () {
    describe('layout-sidebar', function () {

        describe('controller', function () {
            var layout;
            var rootScope;
            var scope;
            var controller;
            var mdSidenav;
            var toggle;
            var close;

            beforeEach(function () {
                angular.mock.module(require('angular-material'));
                angular.mock.module(require('angular-ui-router'));
                angular.mock.module(require('./index.js'));
                angular.mock.inject(function ($rootScope, $compile, $mdSidenav) {
                    rootScope = $rootScope.$new();
                    scope = $rootScope.$new();
                    toggle = sinon.stub();
                    close = sinon.stub();
                    $mdSidenav = () => {
                        return {
                            toggle: toggle,
                            close: close
                        };
                    };
                    mdSidenav = $mdSidenav;
                    layout = new LayoutSidebar();
                    controller = new layout.controller($rootScope, scope, $mdSidenav);
                    $rootScope.$digest();
                });
            });

            it('should have a toggleSidebar function', function () {
                expect(controller.toggleSidebar).to.be.a('function');
                controller.toggleSidebar();
                expect(toggle.called).to.equal(true);
            });

            it('should close the sidenav on $locationChangeSuccess', function () {
                rootScope.$emit('$locationChangeSuccess');
                expect(close.called).to.equal(true);
            });

            it('should unbind $locationChangeSuccess event', function () {
                scope.$broadcast('$destroy');
                scope.$digest();
                rootScope.$emit('$locationChangeSuccess');
                expect(close.called).to.equal(false);
            });

        });

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(function () {
                angular.mock.module(require('angular-material'));
                angular.mock.module(require('angular-ui-router'));
                angular.mock.module(require('./index.js'));
                angular.mock.inject(function ($rootScope, $compile) {
                    element = angular.element('<layout-sidebar></layout-sidebar>');
                    $scope = $rootScope;
                    $compile(element)($scope);
                    $scope.$digest();
                });
            });

            it('should render the app directive', function () {
                expect($(element).find('md-sidenav').length).to.equal(1);
                expect($(element).find('md-content').length).to.equal(2);
            });

        });

    });

});
