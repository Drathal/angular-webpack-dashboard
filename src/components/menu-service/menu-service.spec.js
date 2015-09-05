var MenuService = require('./menu-service');

describe('component', function () {
    describe('menu service', function () {

        describe('handle document-body css on state change', function () {
            var controller;
            var document;
            var $scope;
            var body;

            beforeEach(function () {
                angular.mock.inject(function ($rootScope, $document) {

                    $scope = $rootScope;
                    document = $document;
                    body = angular.element(document[0].body);
                    controller = new MenuService.component($rootScope, $document);

                });

            });

            it('should add the new state', function () {
                $scope.$emit('$stateChangeSuccess', {name: 'toState.test'}, 'toParams', {name: 'fromState.test'});
                expect($(body).hasClass('page-toState-test')).to.equal(true);
            });

            it('should remove the old state', function () {
                $(body).addClass('page-fromState-test');
                expect($(body).hasClass('page-fromState-test')).to.equal(true);
                $scope.$emit('$stateChangeSuccess', {name: 'toState.test'}, 'toParams', {name: 'fromState.test'});
                expect($(body).hasClass('page-fromState-test')).to.equal(false);
            });

        });

        describe('service', function () {
            var service;

            beforeEach(function () {
                angular.mock.inject(function ($rootScope, $document) {
                    service = new MenuService.component($rootScope, $document);
                });
            });

            it('should add a menu', function () {

                var menu = {
                    name: 'CHARTTEST.HOME',
                    icon: 'equalizer',
                    state: 'app.charttest',
                    type: 'link'
                };

                expect(service.addMenu).to.be.a('function');
                expect(service.getMenu).to.be.a('function');
                service.addMenu(menu);
                expect(service.getMenu()).to.deep.equal([menu]);

            });

            it('should traverseMenu a menu', function () {
                var menuItems = [];
                var menu = {
                    name: 'TEST'
                };
                var menu3 = {
                    name: 'TEST3'
                };
                var menu2 = {
                    name: 'TEST2',
                    children: [
                        menu3
                    ]
                };

                expect(service.traverseMenu).to.be.a('function');

                service.addMenu(menu);
                service.addMenu(menu2);
                service.traverseMenu(function (item) {
                    menuItems.push(item.name);
                });

                expect(menuItems).to.deep.equal(['TEST', 'TEST2', 'TEST3']);

            });

        });

    });

});
