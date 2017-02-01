'use strict';
(function(){
    angular
        .module('SliderApp')
        .controller('LeftNavigationCtrl', Controller);

        Controller.$inject = ['$rootScope', '$scope'];
        function Controller($rootScope, $scope){
            var ctrl = this;
            ctrl.toggleMenu = toggleMenu;
            Activate();

            function Activate() {
                console.log('Left navigation controller called...');
            }

            function toggleMenu() {
                $rootScope.$broadcast('Open Side Panel');
            }
        }
})();