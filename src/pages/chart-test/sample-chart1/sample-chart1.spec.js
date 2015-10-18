describe('page', function () {
    describe('chart-test', function () {

        describe('sample-chart1', function () {
            describe('directive', function () {

                var element;
                var $scope;

                beforeEach(function () {
                    angular.mock.module(require('./index.js'));
                    angular.mock.inject(function ($rootScope, $compile) {

                        element = angular.element('<sample-chart1></sample-chart1>');
                        $scope = $rootScope;

                        $compile(element)($scope);
                        $scope.$digest();

                    });
                });

                it('should render a nvd3 chart', function () {
                    expect($(element).find('nvd3').length).to.equal(1);
                });

            });

            describe('controller', function () {
                var Controller = require('./sample-chart1.ctrl.js');
                var controller;
                var _$interval;
                var updateCalled;
                var $scope;

                beforeEach(function () {
                    angular.mock.inject(function ($rootScope, $interval) {
                        _$interval = $interval;
                        $scope = $rootScope.$new();
                        controller = new Controller($scope, $interval);
                        controller.api = {
                            update: function() {
                                updateCalled = true;
                            }
                        };
                    });
                });

                it('should set chart options', function () {
                    expect(controller.options).to.be.an('object');
                });

                it('should set chart data', function () {
                    expect(controller.data).to.be.an('array');
                });

                it('should add data every second', function () {
                    expect(controller.data[0].values.length).to.equal(0);
                    _$interval.flush(1000);
                    expect(controller.data[0].values.length).to.equal(30);
                    expect(updateCalled).to.equal(true);
                });

                it('should destroy the update method on $scope $destroy', function () {
                    controller.data[0].values = [];
                    $scope.$broadcast('$destroy');
                    $scope.$digest();
                    _$interval.flush(1000);
                    expect(controller.data[0].values.length).to.equal(0);
                });

            });
        });
    });

});
