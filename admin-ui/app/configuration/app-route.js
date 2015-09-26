(function(){
    angular.module('workmanagement',['ui.router','workmanagement.login','workmanagement.dashboard','workmanagement.logout','workmanagement.create']).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('login');
        });
        $urlRouterProvider.when('/dashboard','dashboard');
        $urlRouterProvider.when('/create','create');
        $urlRouterProvider.when('/history','history');

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'app/login/login.html',
                controller:'WorkManagementController',
                controllerAs:'wmc'
            })
            .state('login',{
                url:'/login',
                templateUrl:'app/login/login.html',
                controller:'loginController',
                controllerAs:'loginCtrl'
            })
            .state('dashboard',{
                url:'/dashboard',
                templateUrl:'app/dashboard/dashboard.html',
                controller: 'dashboardController',
                controllerAs: 'dashboardCtrl'
            })
            .state('create',{
                url:'/create',
                templateUrl:'app/create/create.html',
                controller: 'createController',
                controllerAs:'createCtrl'
            })
            .state('history',{
                url:'/history',
                templateUrl:'app/history/history.html',
                controller: ''
            })
            .state('logout',{
                url:'/logged-out',
                templateUrl:'app/logout/logout.html',
                controller: 'logoutController',
                controllerAs: 'logoutCtrl'
            })

    }]);
})();