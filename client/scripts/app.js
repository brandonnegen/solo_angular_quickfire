var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', function($scope){
    $scope.heading = "Who is this?";
    $scope.updateMessage = function(){
        $scope.message = "Hi, my name is " + $scope.name;
    }
}]);

//var name = myApp.controller("NameController", ['$scope', function($scope){
//    $scope.message = "Hi, my name is " + $scope.name + "!";
//}]);
//
//myApp.controller("WelcomeController", ['$scope', function($scope){
//    $scope.heading = "Who is this?";
//    $scope.updateMessage = name;
//}]);
