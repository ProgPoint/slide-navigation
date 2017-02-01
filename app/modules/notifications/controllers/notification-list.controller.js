'use strict';
(function(){
    angular
        .module('SliderApp')
        .controller('NotificationListController', Controller);

        Controller.$inject = ['$rootScope', '$scope'];
        function Controller($rootScope, $scope){
            var vm = this;
            Activate();

            function Activate() {
                console.log('Notification list controller called...');
            }
        }
})();