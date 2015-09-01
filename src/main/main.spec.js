var Controller = require('./controller').controller;

describe('main', function () {
    describe('controller', function () {

        var $translate;
        var $scope;

        before(function () {
            $translate = function (translations) {

                var translate = {};
                translate[translations[0]] = 'test_translation';

                return {
                    then: function (callback) {
                        callback(translate);
                    }
                };
            };

            $scope = new Controller($translate);
        });

        it('should have a mini logo', function () {
            expect($scope.miniLogoUrl).to.be.a('string');
        });

        it('should translate the title', function () {
            expect($scope.title).to.equal('test_translation');
        });

    });
});
