(function(){
'use strict';
var app = angular.module('theApp',[]);
    app.directive("tag-buatan", function() {
        return {
            template : "<h1>Made by a directive!</h1>"
        };
    });
    app.controller('theController',theController);
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
