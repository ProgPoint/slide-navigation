'use strict';
(function(){
    angular
        .module('SliderApp')
        .controller('MainController', Controller);

        Controller.$inject = ['$rootScope', '$scope'];
        function Controller($rootScope, $scope){
            var vm = this;
            Activate();

            function Activate() {
                console.log('Main controller called...');
            }
        }
})();