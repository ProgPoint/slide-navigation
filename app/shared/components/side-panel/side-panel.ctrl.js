'use strict';
(function(){
    angular
        .module('SliderApp')
        .controller('SidePanelCtrl', Controller);

        Controller.$inject = ['$rootScope', '$scope'];
        function Controller($rootScope, $scope){
            var ctrl = this;
            ctrl.isSidePanelOpen = false;
            ctrl.onLoad = false;
            ctrl.closeMenu = closeMenu;
            Activate();

            function Activate() {
            }

            function closeMenu() {
                ctrl.isSidePanelOpen = ctrl.isSidePanelOpen ? true : false;
                if(!ctrl.onLoad && ctrl.isSidePanelOpen) {
                    ctrl.isSidePanelOpen = ctrl.isSidePanelOpen ? false : true;
                }
                ctrl.onLoad = false;
            }

            $rootScope.$on('Open Side Panel', function() {
                ctrl.onLoad = true;
                ctrl.isSidePanelOpen = !ctrl.isSidePanelOpen;
            });
        }
})();