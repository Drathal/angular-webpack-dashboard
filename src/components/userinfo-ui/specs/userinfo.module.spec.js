var Module = require('../module.js').component;

describe('components', function () {
    describe('user info', function () {

        var controller;

        before(function () {
            var module = new Module();
            controller = new module.controller();
        });

        it('should have a default name', function () {
            expect(controller.name).to.be.a('string');
        });

    });
});
