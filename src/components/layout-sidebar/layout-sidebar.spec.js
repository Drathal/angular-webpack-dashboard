var { LayoutSidebar } = require('./layout-sidebar');

describe('component', function () {
    describe('layout-sidebar', function () {

        describe('controller', function () {
            var layout;
            var rootScope;
            var controller;
            var mdSidenav;
            var toggle;
            var close;

            beforeEach(angular.mock.module('ngMaterial'));
            beforeEach(inject(function ($rootScope, $mdSidenav) {
                rootScope = $rootScope;
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
                controller = new layout.controller($rootScope, $mdSidenav);
                $rootScope.$digest();
            }));

            it('should have a toggleSidebar function', function () {
                expect(controller.toggleSidebar).to.be.a('function');
                controller.toggleSidebar();
                expect(toggle.called).to.equal(true);
            });

            it('should close the sidenav on $locationChangeSuccess', function () {
                rootScope.$emit('$locationChangeSuccess');
                expect(close.called).to.equal(true);
            });

            it('should set a title', function () {
                expect(controller.title).to.be.a('string');
            });

        });

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(angular.mock.module('ui.router'));
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
