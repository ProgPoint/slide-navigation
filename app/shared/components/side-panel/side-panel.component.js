'use strict';

(function(){

  var sidePanelOptions = {
    templateUrl: 'shared/components/side-panel/side-panel.html',
    controller: 'SidePanelCtrl'
  };

  angular.module('SliderApp')
    .component('sidePanel', sidePanelOptions);

})();

