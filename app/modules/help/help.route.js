'use strict';
(function() {

    angular
        .module('SliderApp.help', [])
        .config(Config);

        Config.$inject = ['$stateProvider', '$urlRouterProvider'];

        function Config($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.help.list', {
                    url: '/list',
                    templateUrl: 'modules/help/views/partials/help-list.html',
                    controller:'HelpListController',
                    controllerAs:'helpList',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    '/modules/help/controllers/help-list.controller.js'
                                ]);
                            }
                        ]
                    }
                });
        }
})();