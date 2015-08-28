var template = require('./template.html');

module.exports.config = /*@ngInject*/ function($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add('featureb', __dirname);

    $stateProvider.state('app.feature-b', {
        url: '/feature-b',
        controller: require('./controller.js').controller,
        controllerAs: require('./controller.js').name,
        template: template
    });

};

module.exports.run = /*@ngInject*/ function(menuService) {

    menuService.addMenu({
        name: 'FEATUREB.HOME',
        icon: 'icon-home',
        state: 'app.feature-b',
        type: 'link',
        priority: 2.2
    });

};
