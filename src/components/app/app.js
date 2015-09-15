import template from './app.html';

export default class App {

    /* @ngInject */
    constructor() {
        this.restrict = 'AE';
        this.transclude = true;
        this.template = template;
        this.controllerAs = 'app';
    }

    static directive() {
        return App.instance = new App();
    }

}
