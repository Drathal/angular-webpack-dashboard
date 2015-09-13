import template from './layout-full.html';

export default class LayoutFull {

    /* @ngInject */
    constructor() {
        this.restrict = 'AE';
        this.transclude = true;
        this.template = template;
        this.controllerAs = 'layoutFull';
    }

    link(scope, element) {

    }

    /* @ngInject */
    controller() {

    }

    static directive() {
        return LayoutFull.instance = new LayoutFull();
    }

}
