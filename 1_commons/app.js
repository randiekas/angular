(function(){
'use strict';
    angular.module('firstApp',[])
    .controller('MyFirstController',function($scope){
        $scope.name = "Randi Ekas";
        $scope.sayHello = function(){
            return "good";
        }
        /*
        <input type="text" ng-model="name"> <br/><br/>
        Hello my name is: {{name}}
        */
    });
    
    angular.module('secondApp',[])
    .controller('MyFirstController',function($scope){
        $scope.name = "Randi Ekas 2";
        $scope.total = 0;
        $scope.hitung = function(){
            $scope.total = $scope.total+1;
        }
        /*
        <input type="text" ng-model="name" ng-keyup="hitung()"> <br/><br/>
        Hello my name is: {{name}} ({{total}})
        */
    });
    
})();