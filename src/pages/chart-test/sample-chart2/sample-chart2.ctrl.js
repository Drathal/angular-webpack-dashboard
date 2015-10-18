module.exports = /*@ngInject*/ function($scope, $interval) {

    var self = this;

    this.options = {
        chart: {
            type: 'lineChart',
            height: 250,
            margin: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 25
            },
            useInteractiveGuideline: true,
            duration: 1,
            yDomain: [0,10]
        }
    };

    this.data = [
        {values: [], key: 'Sample 1', area: true, color: '#007286'},
        {values: [], key: 'Sample 2', area: true, color: '#F98806'}
    ];

    var x = 0;

    var u = $interval(function () {
        self.data[0].values.push({x: x, y: Math.random() * 10});
        self.data[1].values.push({x: x, y: Math.random() * 5});
        if (self.data[0].values.length > 30) {
            self.data[0].values.shift();
            self.data[1].values.shift();
        }
        x++;
        self.api.update();
    }, 1000);

    $scope.$on('$destroy', function () {
        $interval.cancel(u);
    });

};
