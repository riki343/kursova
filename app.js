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
        .state('mini2', {url: '/mini2', templateUrl: 'app/mini2.html'})
        .state('mini4', {url: '/mini4', templateUrl: 'app/mini4.html'})
        .state('ios10', {url: '/iOS10', templateUrl: 'app/ios10.html'})
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