var CounterCtrl = require('./counter.ctrl');

describe('components', function () {
    describe('counter ui', function () {

        var controller;

        before(function () {
            controller = new CounterCtrl();
        });

        it('should have a demo property', function () {
            expect(controller.property).to.be.a('string');
        });

        it('should increment the counter', function () {
            expect(controller.increment).to.be.a('function');
            expect(controller.count).to.equal(0);
            controller.increment();
            expect(controller.count).to.equal(1);
        });

    });
});
