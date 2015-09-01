module.exports = /*@ngInject*/ function () {

    var self = this;
    this.count = 0;
    this.property = 'My Component Property';

    this.increment = function () {
        self.count++;
    };

};

