import template from './layout-full.html';

export default class LayoutFull {

    /* @ngInject */
    constructor() {
        this.restrict = 'AE';
        this.template = template;
        this.transclude = true;
    }

    link($scope, $element, $attrs) {
        $element.addClass('layout');
        $element.addClass('layout-fill');
    }

    static /* @ngInject */ directive() {
        return LayoutFull.instance = new LayoutFull();
    }

}
