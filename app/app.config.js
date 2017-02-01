'use strict';
(function(){
    angular.module('SliderApp')
        .run(['$rootScope', runApp])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', configApp]);

        function configApp($stateProvider, $urlRouterProvider, $locationProvider){

            $urlRouterProvider.otherwise('/app/main');

            $stateProvider.state('app', {
                abstract:true,
                url:'/app',
                templateUrl: './layout/app.html'
            })
            .state('app.main', {
                url:'/main',
                template: '<content></content>'
            })
            .state('app.notification', {
                url:'/notification',
                abstract: true,
                templateUrl: 'layout/abstract.html'
            })
            .state('app.help', {
                url:'/help',
                abstract: true,
                templateUrl: 'layout/abstract.html'
            });
        }

        function runApp($rootScope){
            
        }
})();