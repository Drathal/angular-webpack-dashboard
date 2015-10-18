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
            duration: 1000,
            yDomain: [0,10],
            interpolate: 'cardinal'
        }
    };

    this.data = [
        {values: [], key: 'Sample 1', area: true, color: '#F98806'},
        {values: [], key: 'Sample 2', area: true, color: '#007286'}
    ];

    var updateData = function() {
        self.data[0].values = [];
        self.data[1].values = [];
        var i;
        for (i = 0; i < 30; i++) {
            self.data[0].values.push({x: i, y: Math.random() * 10});
            self.data[1].values.push({x: i, y: Math.random() * 5});
        }
    };

    var u = $interval(function () {
        updateData();
        self.api.update();
    }, 1000);

    $scope.$on('$destroy', function () {
        $interval.cancel(u);
    });

};
