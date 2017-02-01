'use strict';

(function(){

  var contentOptions = {
    templateUrl: 'shared/components/content/content.html',
    controller: 'ContentCtrl'
  };

  angular.module('SliderApp')
    .component('content', contentOptions);

})();

