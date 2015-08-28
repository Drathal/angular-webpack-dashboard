var template = require('./tpl.html');

module.exports.config = /*@ngInject*/ function($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add('featurea', __dirname);

    $stateProvider.state('app.feature-a', {
        url: '/feature-a',
        controller: require('./controller.js').controller,
        controllerAs: require('./controller.js').name,
        template: template
    });

};

module.exports.run = /*@ngInject*/ function(menuService) {

    menuService.addMenu({
        name: 'FEATUREA.HOME',
        icon: 'icon-home',
        state: 'app.feature-a',
        type: 'link',
        priority: 2.1
    });

};
