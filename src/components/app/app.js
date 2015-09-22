export default class App {

    constructor($compile) {
        this.restrict = 'A';
        this.controllerAs = 'app';
        this.terminal = true;
        this.priority = 1001;

        this.$compile = $compile;
    }

    compile($element) {
        $element.addClass('layout');
        $element.addClass('layout-fill');
        $element.attr('ui-view', 'layout');

        $element.removeAttr('app');
        var fn = this.$compile($element);
        return function (scope) {
            fn(scope);
        };
    }

    static /* @ngInject */ directive($compile) {
        return App.instance = new App($compile);
    }

}
