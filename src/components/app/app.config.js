module.exports = /* @ngInject */ function ($urlRouterProvider, $stateProvider, $mdThemingProvider, cfpLoadingBarProvider) {

    $stateProvider
        .state('app', {
            abstract: true
        });

    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;

    $mdThemingProvider.definePalette('Teal', {
        50: '#e6f1f3',
        100: '#b3d5da',
        200: '#80b9c2',
        300: '#55a1ae',
        400: '#2a8999',
        500: '#007285',
        600: '#006474',
        700: '#005664',
        800: '#004753',
        900: '#003943',
        A100: '#b3d5da',
        A200: '#80b9c2',
        A400: '#2a8999',
        A700: '#005664',
        contrastLightColors: ['500','600','700','800','900']
    });

    $mdThemingProvider.definePalette('Orange', {
        50: '#fff3e6',
        100: '#ffdcb3',
        200: '#ffc580',
        300: '#ffb155',
        400: '#ff9d2a',
        500: '#ff8a00',
        600: '#df7900',
        700: '#bf6800',
        800: '#9f5600',
        900: '#804500',
        A100: '#ffdcb3',
        A200: '#ffc580',
        A400: '#ff9d2a',
        A700: '#bf6800'
    });

    $mdThemingProvider.definePalette('Grey', {
        50: '#f1f1f2',
        100: '#d6d6d7',
        200: '#bbbbbc',
        300: '#a4a4a6',
        400: '#8e8e8f',
        500: '#777779',
        600: '#68686a',
        700: '#59595b',
        800: '#4a4a4c',
        900: '#3c3c3d',
        A100: '#d6d6d7',
        A200: '#bbbbbc',
        A400: '#8e8e8f',
        A700: '#59595b'
    });

    $mdThemingProvider.definePalette('Red', {
        50: '#fcebea',
        100: '#f7c2bf',
        200: '#f29a95',
        300: '#ed7872',
        400: '#e8564e',
        500: '#e4342b',
        600: '#c82e26',
        700: '#ab2720',
        800: '#8f211b',
        900: '#721a16',
        A100: '#f7c2bf',
        A200: '#f29a95',
        A400: '#e8564e',
        A700: '#ab2720'
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('Teal', {default: '500'})
        .accentPalette('Orange', {default: '500'})
        .warnPalette('Red', {default: '500'})
        .backgroundPalette('Grey', {default: '50'});

};
