(function(){
'use strict';
    angular.module('theApp',[])
    .controller('theController',function($scope,$filter){
        $scope.name = "Randi Ekas";
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
    });

    
})();