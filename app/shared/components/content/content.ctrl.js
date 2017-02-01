'use strict';
(function(){
    angular
        .module('SliderApp')
        .controller('ContentCtrl', Controller);

        Controller.$inject = ['$rootScope', '$scope'];
        function Controller($rootScope, $scope){
            var vm = this;
            Activate();

            function Activate() {
                console.log('Content controller called...');
            }
        }
})();