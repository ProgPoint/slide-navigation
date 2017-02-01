'use strict';
(function(){
    angular
        .module('SliderApp')
        .directive('clickAnywhereButHere', function($document){
			return {
				restrict: 'A',
				link: function(scope, elem, attr, ctrl) {
					elem.bind('click', function(e) {
						e.stopPropagation();
					});
					$document.bind('click', function() {
						scope.$apply(attr.clickAnywhereButHere);
					});
				}
			}
		});
})();