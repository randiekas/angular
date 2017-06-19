/*
(function(){
'use strict';
    angular.module('theApp',[])
    .controller('theController',theController);
    theController.$inject = ['$scope','$filter'];
    function theController($scope,$filter){
        $scope.name = "Randi Ekas";
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
    }
})();

// compress online https://jscompress.com/
*/
!function(){"use strict";function e(e,n){e.name="Randi Ekas",e.upper=function(){var t=n("uppercase");e.name=t(e.name)}}angular.module("theApp",[]).controller("theController",e),e.$inject=["$scope","$filter"]}();