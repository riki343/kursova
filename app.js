angular
    .module('kursova', [
        'ui.router',
        'angular-carousel'
    ])
    .config(AppConfig)
    .run(AppRun)
;

function AppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {url: '/', templateUrl: 'app/home.html'})
        .state('pro', {url: '/pro', templateUrl: 'app/pro.html'})
        .state('air2', {url: '/air2', templateUrl: 'app/air2.html'})
        .state('accessories', {url: '/accessories', templateUrl: 'app/accessories.html'})
    ;

    $urlRouterProvider.otherwise('/');

    new WOW().init();
}

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppRun($rootScope) {
    console.log('bootstrapped!');
    $rootScope.$on('$stateChangeStart', function () {
        new WOW().sync();
        document.body.scrollTop = 0;
    });
}

AppRun.$inject = ['$rootScope'];