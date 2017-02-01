'use strict';

(function(){

  var leftNavigationOptions = {
    templateUrl: 'shared/components/navigation/navigation.html',
    controller: 'LeftNavigationCtrl'
  };

  angular.module('SliderApp')
    .component('leftNavigation', leftNavigationOptions);

})();

