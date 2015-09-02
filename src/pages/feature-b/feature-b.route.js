module.exports.config = /*@ngInject*/ function($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add('featureb', __dirname);

    $stateProvider.state('app.feature-b', {
        url: '/feature-b',
        views: {
            'toolbar-title@': {
                template: '{{ "FEATUREB.HEADING" | translate }}'
            },
            '@': {
                template: '<feature-b></feature-b>'
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
