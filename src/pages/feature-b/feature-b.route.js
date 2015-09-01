var template = require('./feature-b.html');

module.exports.config = /*@ngInject*/ function($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add('featureb', __dirname);

    $stateProvider.state('app.feature-b', {
        url: '/feature-b',
        views: {
            'toolbar-title@': {
                template: '{{ "FEATUREB.HEADING" | translate }}'
            },
            '@': {
                controller: require('./feature-b.ctrl.js').controller,
                controllerAs: require('./feature-b.ctrl.js').name,
                template: template
            }
        }
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
