import template from './layout-full.html';

export default class LayoutFull {

    /* @ngInject */
    constructor() {
        this.restrict = 'AE';
        this.transclude = true;
        this.template = template;
    }

    static directive() {
        return LayoutFull.instance = new LayoutFull();
    }

}
