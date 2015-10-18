var Menu = require('./feature-b.menu.js');
var Route = require('./feature-b.route.js');

describe('page', function () {
    describe('feature-b', function () {
        describe('menu', function () {
            var text;
            var menu;
            var menuItem;
            var _menuService;
            var _gettext;

            beforeEach(function () {
                angular.mock.inject(function () {
                    _menuService = {
                        addMenu: function (mi) {
                            menuItem = mi;
                        }
                    };
                    _gettext = function (t) {
                        text = t;
                        return text;
                    };
                    menu = new Menu(_menuService, _gettext);
                });
            });

            it('should set a menu item', function () {
                expect(menuItem.name).to.be.a('string');
                expect(menuItem.icon).to.be.a('string');
                expect(menuItem.state).to.be.a('string');
                expect(menuItem.type).to.be.a('string');
            });
        });

        describe('route', function () {

            var route;
            var text;
            var _$stateProvider;
            var _gettext;
            var state;
            var stateconfig;

            beforeEach(function () {
                angular.mock.inject(function () {
                    _$stateProvider = {
                        state: function (s, sc) {
                            state = s;
                            stateconfig = sc;
                        }
                    };
                    _gettext = function (t) {
                        text = t;
                        return text;
                    };
                    route = new Route(_$stateProvider, _gettext);
                });
            });

            it('should set a route', function () {
                expect(state).to.be.a('string');
                expect(stateconfig.url).to.be.a('string');
                expect(stateconfig.views).to.be.a('object');
            });
        });
    });

});
