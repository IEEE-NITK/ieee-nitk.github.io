angular.module('mainApp', ['ui.router','fullPage.js'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: 'homeController',
            })
            .state('sig', {
                url: '/sig/:id',
                templateUrl: 'partials/sig.html',
                controller: 'sigController'

            })
            .state('team', {
                url: '/team',
                templateUrl: 'partials/team.html',
                controller: 'teamController'
            })
            .state('achievements',{
                url: '/achievements',
                templateUrl: 'partials/achievements.html'
               })
            .state('projects',{
                url : '/projects',
                templateUrl : 'partials/projects.html',
            })
            .state('alumni',{
                url : '/alumni',
                templateUrl : 'partials/alumni.html'
            });
    })
    .run(function($rootScope) {
        $rootScope.$on('$stateChangeStart',
            function() {
                $(".full_screen_menu").slideUp();
                $(".nav-icon").removeClass("active");
            });
    });
