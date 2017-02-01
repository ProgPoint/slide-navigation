'use strict';
(function() {

    angular
        .module('SliderApp.notification', [])
        .config(Config);

        Config.$inject = ['$stateProvider', '$urlRouterProvider'];

        function Config($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app.notification.list', {
                    url: '/list',
                    templateUrl: 'modules/notifications/views/partials/notification-list.html',
                    controller:'NotificationListController',
                    controllerAs:'notificationList',
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    '/modules/notifications/controllers/notification-list.controller.js'
                                ]);
                            }
                        ]
                    }
                });
        }
})();