var Controller = require('../controller').controller;

describe('main', function() {
    describe('controller', function() {

        var langKey;
        var $translate;
        var $scope;

        before(function() {
            $translate = {
                use: function(key) {
                    langKey = key;
                    return langKey;
                }
            };
            $scope = new Controller($translate);
        });

        it('should have a mini logo', function() {
            expect($scope.miniLogoUrl).to.be.a('string');
        });

        it('should have a changeLanguage function', function() {
            expect($scope.changeLanguage).to.be.a('function');
        });

        it('should have a change the languae on changeLanguage call', function() {
            $scope.changeLanguage('de');
            expect(langKey).to.equal('de');
        });

    });
});
