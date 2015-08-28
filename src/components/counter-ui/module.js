var template = require('./tpl.html');

module.exports.name = 'counter';

module.exports.component = /*@ngInject*/ function() {
    return {
        scope: {},
        controller: CounterController,
        controllerAs: 'ctrl',
        bindToController: true,
        template: template
    };
};

var CounterController = function() {

    var self = this;
    this.count = 0;
    this.property = 'My Component Property';

    this.increment = function() {
        self.count++;
    };

};

