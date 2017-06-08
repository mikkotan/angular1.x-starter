homeConfig.$inject = ['$stateProvider'];

export default function homeConfig($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        });
}