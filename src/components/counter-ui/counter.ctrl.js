module.exports = /*@ngInject*/ function () {

    var self = this;
    this.count = 0;

    this.increment = function () {
        self.count++;
    };

};

