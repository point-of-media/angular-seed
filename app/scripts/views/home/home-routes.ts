function routing($stateProvider: angular.ui.IStateProvider) {

    $stateProvider
        .state('home', <ng.ui.IState>{
            abstract: true,
            views: {
                'content@': { 'template': null }
            }
        })
        .state('home.root', <ng.ui.IState>{
            parent: 'home',
            url: '/home',
            views: {
                'content@': { template: '<home-component></home-component>' }
            }
        });
}

export default routing;
