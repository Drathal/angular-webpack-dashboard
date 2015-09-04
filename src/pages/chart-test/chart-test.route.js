module.exports.config = /*@ngInject*/ function ($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add('charttest', __dirname);

    $stateProvider.state('app.charttest', {
        url: '/charttest',
        views: {
            'toolbar-title@': {
                template: '{{ "CHARTTEST.HEADING" | translate }}'
            },
            '@': {
                controller: function ($scope, data1, data2, $timeout, $interval) {

                    var self = this;
                    var charts = [];

                    $scope.$on('create', function (event, chart) {
                        //( charts.push(chart);

                    });

                    var r = function () {
                        return Math.floor((Math.random() * 100) + 1);
                    };

                    $timeout(function () {
                        self.data1 = data1;
                        self.data2 = data2;
                    }, 100);

                    $interval(function () {
                        self.data1.data = [
                            [r(), r(), r(), r(), r(), r(), r()],
                            [r(), r(), r(), r(), r(), r(), r()]
                        ];

                        self.data2.data = [
                            [r(), r(), r(), r(), r(), r(), r()],
                            [r(), r(), r(), r(), r(), r(), r()]
                        ];

                    }, 5000);

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
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            series: ['Series A', 'Series B'],
                            data: [
                                [65, 59, 100, 81, 56, 55, 40],
                                [28, 48, 40, 19, 0, 27, 90]
                            ],
                            options: {
                                datasetFill: true,
                                maintainAspectRatio: false,
                                responsive: true,
                                animation: true
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
        state: 'app.charttest',
        type: 'link'
    });

};
