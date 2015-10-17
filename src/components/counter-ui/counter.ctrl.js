module.exports = /* @ngInject */ function () {

    this.count = 0;

    this.increment = () => {
        this.count++;
    };

    this.decrement = () => {
        if (this.count < 1) {
            return;
        }
        this.count--;
    };

};
