import template from './layout-full.html';

class LayoutFull {

    constructor() {
        this.restrict = 'AE';
        this.template = template;
        this.transclude = true;
    }

    link($scope, $element, $attrs) {
        $element.addClass('layout');
        $element.addClass('layout-fill');
    }

    static directive() {
        return LayoutFull.instance = new LayoutFull();
    }

}

LayoutFull.directive.$inject = [];

export { LayoutFull };
