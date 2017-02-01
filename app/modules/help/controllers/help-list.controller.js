'use strict';
(function(){
    angular
        .module('SliderApp')
        .controller('HelpListController', Controller);

        Controller.$inject = ['$rootScope', '$scope'];
        function Controller($rootScope, $scope){
            var vm = this;
            Activate();

            function Activate() {
                console.log('Help list controller called...');
            }
        }
})();