var Route = require('./login.route.js');

describe('page', function () {
    describe('login', function () {

        describe('route', function () {

            var route;
            var defaultroute;
            var _$stateProvider;
            var _$urlRouterProvider;
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
                    _$urlRouterProvider =  {
                        otherwise: function (dr) {
                            defaultroute = dr;
                        }
                    };
                    route = new Route(_$stateProvider, _$urlRouterProvider);
                });
            });

            it('should set a route', function () {
                expect(state).to.be.a('string');
                expect(stateconfig.url).to.be.a('string');
                expect(stateconfig.views).to.be.a('object');
            });

            it('should set a default route', function () {
                expect(defaultroute).to.be.a('string');
            });

        });
    });

});
