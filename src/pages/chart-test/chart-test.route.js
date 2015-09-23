require('./chart-test.scss');

module.exports.config = /*@ngInject*/ function ($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add(__dirname);

    $stateProvider.state('app.layout-sidebar.charttest', {
        url: '/charttest',
        views: {
            'toolbar-title': {
                template: '{{ "CHARTTEST.HEADING" | translate }}'
            },
            '': {
                controller: function ($scope, data1, data2, $timeout, $interval, $mdMedia, $window, $document) {

                    $scope.$watch(function () {
                        return $mdMedia('gt-md');
                    }, function () {
                        $timeout(function () {
                            jQuery($document.find('body')[0]).trigger('resize');
                        }, 400);
                    });

                    var self = this;

                    var random = function () {
                        return Math.floor((Math.random() * 100) + 1);
                    };

                    $timeout(function () {
                        self.data1 = data1;
                        self.data2 = data2;
                    }, 100);

                    $interval(function () {
                        self.data1.data = [
                            [random(), random(), random(), random(), random(), random(), random()],
                            [random(), random(), random(), random(), random(), random(), random()]
                        ];
                    }, 5000);

                    $interval(function () {
                        self.data2.data[0].push(random());
                        self.data2.data[0].shift(random());
                        self.data2.data[1].push(random());
                        self.data2.data[1].shift(random());
                    }, 1000);

                },

                controllerAs: 'chartTestState',
                template: require('./chart-test.page.html'),
                resolve: {
                    data1: function () {
                        return {
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            series: ['Series A', 'Series B'],
                            data: [
                                [65, 59, 80, 81, 56, 55, 100],
                                [0, 48, 40, 19, 86, 27, 90]
                            ],
                            options: {
                                datasetFill: false,
                                maintainAspectRatio: false,
                                responsive: true,
                                animation: true
                            }
                        };
                    },

                    data2: function () {
                        return {
                            labels: ['-60', '-55', '-50', '-45', '-40', '-35', '-30', '-25', '-20', '-15', '-10', '-5', 'now'],
                            series: ['Series A', 'Series B'],
                            data: [
                                [65, 59, 100, 81, 56, 55, 40, 65, 59, 100, 81, 56, 55, 40],
                                [28, 48, 40, 19, 0, 27, 90, 28, 48, 40, 19, 0, 27, 90]
                            ],
                            options: {
                                datasetFill: true,
                                maintainAspectRatio: false,
                                responsive: true,
                                animation: false
                            }
                        };
                    }
                }
            }
        }
    });

};

module.exports.run = /*@ngInject*/ function (menuService) {

    menuService.addMenu({
        name: 'CHARTTEST.HOME',
        icon: 'equalizer',
        state: 'app.layout-sidebar.charttest',
        type: 'link'
    });

};
